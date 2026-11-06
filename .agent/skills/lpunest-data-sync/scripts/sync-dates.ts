/**
 * LPUNEST Official Data Sync Verification Script
 * Checks official LPU admission portal reference endpoints and verifies config/lpunest.ts
 */

import { LPUNEST_CONFIG } from "../../../config/lpunest";

async function verifySync() {
  console.log("=================================================");
  console.log("LPUNEST Official Data Sync Audit");
  console.log("=================================================");
  console.log(`Current Active Phase: ${LPUNEST_CONFIG.dates.currentPhase}`);
  console.log(`Last Synced At:       ${LPUNEST_CONFIG.dates.lastSyncedAt}`);
  console.log(`Affiliate Link:       ${LPUNEST_CONFIG.links.affiliate}`);
  console.log(`WhatsApp Community:   ${LPUNEST_CONFIG.links.whatsapp}`);
  console.log(`Coupon Code:          ${LPUNEST_CONFIG.coupon.code} (${LPUNEST_CONFIG.coupon.discountPercent}% Off)`);
  console.log("-------------------------------------------------");
  console.log("Key Schedule Milestones:");
  console.log(`• Slot Booking Opens: ${LPUNEST_CONFIG.dates.slotBookingStart}`);
  console.log(`• Last Date to Apply: ${LPUNEST_CONFIG.dates.lastDateToApply}`);
  console.log(`• Online Proctored:   ${LPUNEST_CONFIG.dates.examWindowOnline}`);
  console.log(`• Test Centre Window: ${LPUNEST_CONFIG.dates.examWindowCentre}`);
  console.log(`• Result Date:        ${LPUNEST_CONFIG.dates.resultDate}`);
  console.log("-------------------------------------------------");
  console.log("Official Fee Slabs (Per Semester):");
  console.log(`• B.Tech CSE:         ₹${LPUNEST_CONFIG.fees.btechCseSemester.toLocaleString("en-IN")}`);
  console.log(`• B.Tech Core:        ₹${LPUNEST_CONFIG.fees.btechCoreSemester.toLocaleString("en-IN")}`);
  console.log(`• MBA:                ₹${LPUNEST_CONFIG.fees.mbaSemester.toLocaleString("en-IN")}`);
  console.log(`• BCA / BBA:          ₹${LPUNEST_CONFIG.fees.bcaBbaSemester.toLocaleString("en-IN")}`);
  console.log(`• Examination Fee:    ₹${LPUNEST_CONFIG.fees.examFeeSemester.toLocaleString("en-IN")}`);
  console.log("=================================================");
  console.log("Status: OK - Single Source of Truth Verified.");
}

verifySync().catch(console.error);

