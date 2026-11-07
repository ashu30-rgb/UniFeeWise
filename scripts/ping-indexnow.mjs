/**
 * IndexNow Instant Search Engine & ChatGPT Ping Script
 * Notifies Microsoft Bing, IndexNow, and ChatGPT live search indexers immediately of new/updated URLs.
 * 
 * Usage: node scripts/ping-indexnow.mjs
 */

const INDEXNOW_KEY = "e7492c19a9304a9dbd488e5b4129e015";
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
      console.log(`✅ [IndexNow] Success! Response Status: ${response.status} (${response.statusText || "Accepted"})`);
      console.log(`Submitted URLs for immediate AI/Bing indexing:`);
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

