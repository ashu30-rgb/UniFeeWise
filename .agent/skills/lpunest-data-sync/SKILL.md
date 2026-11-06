---
name: lpunest-data-sync
description: Fetches the latest official LPUNEST admission dates, slot booking deadlines, phase schedules, and fee/scholarship slabs from the web, updates the centralized strings in config/lpunest.ts, and audits the codebase to ensure all external links strictly use LPUNEST_CONFIG.links.affiliate or LPUNEST_CONFIG.links.whatsapp.
---

# LPUNEST Data Sync & Link Lockdown Skill

## When to Run
Run this skill whenever the user asks to "update LPUNEST dates", "sync LPU schedule", "check if Phase 1/Phase 2 dates changed", or invokes `@lpunest-data-sync`.

## Step-by-Step Workflow

### 1. Fetch Latest Official LPUNEST Dates & Fee Structure
Use web search / browser tools to check the latest official LPUNEST 2027 admission schedule and fee structure:
- Search for `"LPUNEST important dates lpu.in"` and check the active Phase (Phase 1, Phase 2, etc.), Registration start/end dates, Slot Booking start/end dates, Online & Test Centre exam windows, and Result/Counselling dates.
- Verify if base semester tuition fees, scholarship percentages, or application form fees (₹1,000 Boys / ₹500 Girls, 20% off with `LPUMZW722`) have changed.

### 2. Update `config/lpunest.ts` (Never Overwrite `links.affiliate` or `links.whatsapp`)
- Update the `dates`, `fees`, and `coupon` objects inside `config/lpunest.ts` with the latest verified strings.
- Keep `LPUNEST_CONFIG.links.affiliate` and `LPUNEST_CONFIG.links.whatsapp` intact unless the user explicitly provides a new URL string.
- Update `lastSyncedAt` to the current date.

### 3. Outbound Link Lockdown Audit
Search all `.tsx` and `.ts` files for any `href=` or `window.open`:
- Verify that 100% of external links across the entire site reference ONLY `LPUNEST_CONFIG.links.affiliate` or `LPUNEST_CONFIG.links.whatsapp`.
- If any raw `admission.lpu.in` or `lpu.in` clickable link is found, immediately replace it with `LPUNEST_CONFIG.links.affiliate` or convert it to non-clickable plain text.

### 4. Build Verification
Run `npm run build` to ensure all static pages compile with zero errors, and print a summary table of the updated dates.
