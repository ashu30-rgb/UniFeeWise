/**
 * Microsoft Bing / IndexNow Protocol Ping Script
 * Notifies Bing, Microsoft Copilot, and OpenAI's ChatGPT Search indexer of all site URLs.
 *
 * Usage: node scripts/ping-indexnow.mjs
 */

const INDEXNOW_KEY = "a8f4c2e9d1b7603459e8a2c4f6b1d0e3";
const HOST = "unifeewise.vercel.app";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const URL_LIST = [
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
  `https://${HOST}/mock-test/physics`,
  `https://${HOST}/mock-test/chemistry`,
  `https://${HOST}/mock-test/mathematics`,
  `https://${HOST}/mock-test/biology`,
  `https://${HOST}/mock-test/english`,
  `https://${HOST}/mock-test/computer-science`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
];

async function pingIndexNow() {
  console.log(`[IndexNow] Submitting ${URL_LIST.length} URLs to api.indexnow.org...`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(
        `✅ [IndexNow] Success! Response Status: ${response.status} (${response.statusText || "Accepted"})`
      );
      console.log(`Submitted URLs for immediate Bing & ChatGPT Search indexing:`);
      URL_LIST.forEach((u) => console.log(`  - ${u}`));
    } else {
      const errorText = await response.text();
      console.warn(`⚠️ [IndexNow] Received status ${response.status}: ${errorText}`);
    }
  } catch (err) {
    console.error(`❌ [IndexNow] Failed to ping IndexNow API:`, err);
  }
}

pingIndexNow();
