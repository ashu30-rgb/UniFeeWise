/**
 * Microsoft Bing & IndexNow Protocol Submission Script
 * Pushes all site URLs directly to Microsoft Bing, Copilot, and OpenAI ChatGPT Search indexers.
 *
 * Usage:
 *   npm run indexnow
 *   node scripts/ping-indexnow.mjs
 */

const INDEXNOW_KEY = "a8f4c2e9d1b7603459e8a2c4f6b1d0e3";
const HOST = "unifeewise.vercel.app";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const ENDPOINTS = [
  { name: "IndexNow Central (api.indexnow.org)", url: "https://api.indexnow.org/indexnow" },
  { name: "Microsoft Bing (www.bing.com)", url: "https://www.bing.com/indexnow" },
  { name: "Yandex (yandex.com)", url: "https://yandex.com/indexnow" },
  { name: "Seznam (search.seznam.cz)", url: "https://search.seznam.cz/indexnow" },
];

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/mock-test`,
  `https://${HOST}/lpunest-coupon-code`,
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
  console.log(`\n======================================================`);
  console.log(`🚀 Microsoft Bing & IndexNow Live Push`);
  console.log(`Host: ${HOST}`);
  console.log(`Key:  ${INDEXNOW_KEY}`);
  console.log(`Key Location: ${KEY_LOCATION}`);
  console.log(`Submitting ${URL_LIST.length} URLs across ${ENDPOINTS.length} search endpoints...`);
  console.log(`======================================================\n`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  for (const endpoint of ENDPOINTS) {
    try {
      console.log(`📡 Pinging ${endpoint.name} (${endpoint.url})...`);
      const response = await fetch(endpoint.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok || response.status === 200 || response.status === 202) {
        console.log(
          `   ✅ SUCCESS! Status: ${response.status} (${response.statusText || "Accepted"})\n`
        );
      } else {
        const errorText = await response.text();
        console.warn(
          `   ⚠️ Warning: Received HTTP ${response.status} from ${endpoint.name}: ${errorText}\n`
        );
      }
    } catch (err) {
      console.error(`   ❌ Failed to connect to ${endpoint.name}:`, err.message || err);
    }
  }

  console.log(`\nSubmitted URLs for immediate Bing & ChatGPT Search indexing:`);
  URL_LIST.forEach((u) => console.log(`  • ${u}`));
  console.log(`\n🎉 IndexNow push complete!\n`);
}

pingIndexNow();
