---
name: lpunest-data-sync
description: Fetches and verifies official LPUNEST admission schedules, Phase deadlines, exam windows, slot booking dates, and fee slabs directly from official university sources (lpu.in), updating config/lpunest.ts to keep the site 100% synchronized.
---

# LPUNEST Official Data Synchronization Skill

This skill is designed for the autonomous agent to inspect, extract, verify, and update official LPUNEST admission schedules, Phase deadlines, exam windows, and academic fee slabs in `config/lpunest.ts`.

---

## 1. Architecture & Single Source of Truth

All dynamic numbers, deadlines, fees, coupons, and outbound links in **UniFeeWise** are strictly governed by:
👉 [`config/lpunest.ts`](file:///Users/ashutosh/Desktop/UniFeeWise/config/lpunest.ts)

### Critical Outbound Lockdown Rules
1. **Never bypass the affiliate link:** ZERO clickable `<a>` or `<Link>` tags anywhere on the website may redirect directly to untracked `admission.lpu.in`, `www.lpu.in`, or third-party portals.
2. **Mandatory link mapping:** Every external redirect must import and reference either:
   - `LPUNEST_CONFIG.links.affiliate` (Default: `https://sms.lpu.in/r96ebAmny`)
   - `LPUNEST_CONFIG.links.whatsapp` (Default: `https://chat.whatsapp.com/HVj67QWkaXZAy55FmP1IrL`)
3. **Coupon integrity:** `LPUNEST_CONFIG.coupon.code` is strictly **`LPUMZW722`** granting the official 20% discount (₹800 Boys / ₹400 Girls).

---

## 2. Official University Sources to Monitor

When synchronizing or updating admission data, fetch and parse the following official public reference endpoints:

| Domain | Official URL | Extracted Fields |
| :--- | :--- | :--- |
| **B.Tech Engineering Dates & Fees** | `https://www.lpu.in/nest/btech/fee-and-scholarship.php` | Tuition slabs (₹1.6L - ₹1.8L), Phase 1/2 deadlines, Exam dates |
| **All Important Dates** | `https://www.lpu.in/nest/important-dates.php` | Slot booking window, Proctored vs Center exam dates, Result dates |
| **Undergraduate Programs** | `https://www.lpu.in/nest/under-graduate/fee-and-scholarship.php` | BCA/BBA fees (₹80,000/sem), eligibility cutoffs |
| **Postgraduate (MBA)** | `https://www.lpu.in/nest/post-graduate/fee-and-scholarship.php` | MBA tuition (₹2,20,000/sem), interview schedule |
| **Hostel & Residence Services** | `https://www.lpu.in/student-services/residence.php` | 4-seater AC/Non-AC annual fee (₹83,700 - ₹92,700), Standard mess (₹45,000) |

---

## 3. Step-by-Step Synchronization Procedure

Whenever this skill is triggered (e.g., at the start of a new admission phase or weekly verification):

### Step 1: Scrape & Verify Official Dates
Use curl, web fetch, or the companion script:
```bash
npx ts-node --compiler-options '{"module":"CommonJS"}' .agent/skills/lpunest-data-sync/scripts/sync-dates.ts
```
Or execute a targeted web search:
- Query: `site:lpu.in/nest "Schedule of LPUNEST" OR "Important Dates"`
- Check the official active Phase name (e.g., `Phase 1 (2027 Intake)`, `Phase 2`, etc.).

### Step 2: Compare Against `config/lpunest.ts`
Inspect the fields in `LPUNEST_CONFIG.dates`:
- `registrationStart`
- `slotBookingStart`
- `lastDateToApply`
- `examWindowOnline`
- `examWindowCentre`
- `resultDate`
- `counsellingWindow`

If the university has published updated Phase cutoffs or shifted the slot booking window:
1. Update the corresponding string in `config/lpunest.ts`.
2. Update `lastSyncedAt` to today's ISO date (e.g. `YYYY-MM-DD`).
3. Preserve all existing TypeScript formatting, comments, and `as const` assertions.

### Step 3: Run Verification & Type Check
Verify that the Next.js static build remains 100% clean:
```bash
npm run build
npm run lint
```
Confirm that all static routes (`22/22 static pages`) compile without errors.

### Step 4: Commit & Deploy
Commit the synchronized configuration changes:
```bash
git add config/lpunest.ts
git commit -m "chore(sync): update LPUNEST official phase deadlines and schedules [skip ci]"
git push origin main
```

---

## 4. Invariant Checklist
Before completing any sync run, verify:
- [ ] `LPUNEST_CONFIG.links.affiliate` points to `https://sms.lpu.in/r96ebAmny`.
- [ ] `LPUNEST_CONFIG.links.whatsapp` points to the active community desk.
- [ ] `LPUNEST_CONFIG.coupon.code` equals `LPUMZW722`.
- [ ] `LPUNEST_CONFIG.coupon.discountPercent` equals `20`.
- [ ] No bare `<a>` tags with `admission.lpu.in` or `www.lpu.in` exist in the codebase.
