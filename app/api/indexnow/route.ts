import { NextResponse } from "next/server";
import { LPUNEST_CONFIG } from "@/config/lpunest";

export const dynamic = "force-dynamic";

const INDEXNOW_KEY = LPUNEST_CONFIG.seo.indexNowKey;
const HOST = "unifeewise.vercel.app";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const CORE_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/lpunest-coupon-code`,
  `https://${HOST}/mock-test`,
  `https://${HOST}/lpunest-previous-year-papers`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/llms-full.txt`,
  `https://${HOST}/calculator`,
  `https://${HOST}/btech-previous-year-paper`,
  `https://${HOST}/lpu-cse-fees`,
  `https://${HOST}/lpu-ece-fees`,
  `https://${HOST}/lpu-btech-aiml-fees`,
  `https://${HOST}/lpu-bba-fees`,
  `https://${HOST}/lpu-bca-fees`,
  `https://${HOST}/lpu-mba-fees`,
];

async function submitToIndexNow(urls = CORE_URLS) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  return {
    status: response.status,
    ok: response.ok || response.status === 200 || response.status === 202,
    statusText: response.statusText,
    submittedCount: urls.length,
    urls,
  };
}

export async function GET() {
  try {
    const result = await submitToIndexNow();
    return NextResponse.json({
      success: result.ok,
      message: result.ok
        ? "Successfully submitted URLs to Microsoft Bing IndexNow"
        : "IndexNow submission returned unexpected status",
      ...result,
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
    let urlsToSubmit = CORE_URLS;
    try {
      const body = await request.json();
      if (body.urls && Array.isArray(body.urls) && body.urls.length > 0) {
        urlsToSubmit = body.urls;
      }
    } catch {
      // Use default URLs if body is empty
    }

    const result = await submitToIndexNow(urlsToSubmit);
    return NextResponse.json({
      success: result.ok,
      message: result.ok
        ? "Successfully submitted custom URLs to Microsoft Bing IndexNow"
        : "IndexNow submission returned unexpected status",
      ...result,
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
