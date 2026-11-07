import { NextResponse } from "next/server";
import { LPUNEST_CONFIG } from "@/config/lpunest";

export const dynamic = "force-dynamic";

const INDEXNOW_KEY = LPUNEST_CONFIG.seo.indexNowKey;
const HOST = "unifeewise.vercel.app";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const ENDPOINTS = [
  { name: "IndexNow (api.indexnow.org)", url: "https://api.indexnow.org/indexnow" },
  { name: "Microsoft Bing (www.bing.com)", url: "https://www.bing.com/indexnow" },
];

const PROGRAM_SLUGS = [
  "lpu-cse-fees",
  "lpu-ece-fees",
  "lpu-btech-aiml-fees",
  "lpu-bba-fees",
  "lpu-bca-fees",
  "lpu-mba-fees",
];

const SUBJECT_SLUGS = [
  "physics",
  "chemistry",
  "mathematics",
  "biology",
  "english",
  "computer-science",
];

const ALL_SITE_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/mock-test`,
  `https://${HOST}/lpunest-coupon-code`,
  `https://${HOST}/lpunest-previous-year-papers`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/llms-full.txt`,
  `https://${HOST}/calculator`,
  `https://${HOST}/btech-previous-year-paper`,
  ...PROGRAM_SLUGS.map((slug) => `https://${HOST}/${slug}`),
  ...SUBJECT_SLUGS.map((sub) => `https://${HOST}/mock-test/${sub}`),
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
];

async function submitToAllEndpoints(urls: string[] = ALL_SITE_URLS) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const results = await Promise.allSettled(
    ENDPOINTS.map(async (endpoint) => {
      const response = await fetch(endpoint.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      const isSuccess = response.ok || response.status === 200 || response.status === 202;
      return {
        endpoint: endpoint.name,
        url: endpoint.url,
        status: response.status,
        statusText: response.statusText || (isSuccess ? "Accepted" : "Error"),
        ok: isSuccess,
      };
    })
  );

  return results.map((res, idx) => {
    if (res.status === "fulfilled") {
      return res.value;
    }
    return {
      endpoint: ENDPOINTS[idx].name,
      url: ENDPOINTS[idx].url,
      status: 500,
      statusText: res.reason instanceof Error ? res.reason.message : "Network failure",
      ok: false,
    };
  });
}

export async function GET() {
  try {
    const endpointResults = await submitToAllEndpoints();
    const allSuccessful = endpointResults.every((r) => r.ok);

    return NextResponse.json({
      success: allSuccessful,
      message: allSuccessful
        ? "Successfully submitted URLs to Microsoft Bing and IndexNow protocol endpoints"
        : "Some IndexNow endpoints returned warnings or non-200 status",
      host: HOST,
      keyLocation: KEY_LOCATION,
      submittedUrlsCount: ALL_SITE_URLS.length,
      endpoints: endpointResults,
      urlList: ALL_SITE_URLS,
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Failed to submit to IndexNow";
    return NextResponse.json(
      {
        success: false,
        error: errMessage,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    let urlsToSubmit = ALL_SITE_URLS;
    try {
      const body = await request.json();
      if (body.urls && Array.isArray(body.urls) && body.urls.length > 0) {
        urlsToSubmit = body.urls;
      }
    } catch {
      // Default to full site list if request body is empty
    }

    const endpointResults = await submitToAllEndpoints(urlsToSubmit);
    const allSuccessful = endpointResults.every((r) => r.ok);

    return NextResponse.json({
      success: allSuccessful,
      message: allSuccessful
        ? "Successfully submitted custom URLs to Microsoft Bing and IndexNow endpoints"
        : "Some IndexNow endpoints returned warnings or non-200 status",
      host: HOST,
      keyLocation: KEY_LOCATION,
      submittedUrlsCount: urlsToSubmit.length,
      endpoints: endpointResults,
      urlList: urlsToSubmit,
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Failed to submit to IndexNow";
    return NextResponse.json(
      {
        success: false,
        error: errMessage,
      },
      { status: 500 }
    );
  }
}
