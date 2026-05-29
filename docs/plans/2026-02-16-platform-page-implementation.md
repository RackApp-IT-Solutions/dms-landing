# Platform Page Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the platform page to showcase all 7 iDeal apps with correct groupings, updated descriptions, and HTML+CSS mockups replacing image-based previews.

**Architecture:** Each platform section component (`WarehouseSection`, `FieldSalesSection`, `ManagementSection`) gets rewritten with: updated app cards (descriptions, icons), hover-triggered HTML+CSS mockup screens inside phone/browser frames, and correct app groupings. The landing page `EcosystemSection` is also updated to match.

**Tech Stack:** Vue 3 (Composition API), Tailwind CSS, Heroicons (`@heroicons/vue/24/solid`), Nuxt 3

---

## Reference

- **Design doc:** `docs/plans/2026-02-16-platform-page-redesign-design.md`
- **Tailwind config:** `tailwind.config.ts` — custom colors: `primary` (#053B61), `accent` (#FE7702), `navy-dark` (#021e36), `navy-light` (#0a3050), `background-light` (#f7f8fa)
- **Pattern:** Each section uses a `hoveredApp` ref. App cards set it on `@mouseenter`, clear on `@mouseleave`. Mockup area uses `:class` bindings to fade in/out based on `hoveredApp` value.

---

### Task 1: Rewrite WarehouseSection.vue

**Files:**
- Modify: `app/components/platform/WarehouseSection.vue`

**What changes:**
1. Remove the iDeal Connect card entirely (lines 45-54)
2. Remove the `ServerStackIcon` import
3. Update iDeal Ops description to: "NFC-powered outlet registration and tagging. Digitize field operations with instant verification and geo-tagged check-ins."
4. Update iDeal Stocks description to: "Real-time warehouse management — product loading, empties unloading, stock monitoring, and automated inventory alerts."
5. Add `cursor-pointer`, `@mouseenter="hoveredApp = 'stocks'"`, `@mouseleave="hoveredApp = null"` to the Stocks card
6. Replace the image mockup area (lines 58-94) with a phone frame containing HTML+CSS mockups:
   - **Default state:** Warehouse placeholder (keep existing stock alert floating UI style)
   - **iDeal Ops mockup** (shown when `hoveredApp === 'ops'`): Phone screen with:
     - Top bar: "iDeal Ops" title + search icon
     - Search bar placeholder
     - 3 outlet list items with: outlet name, address snippet, status badge (green "Active", yellow "Pending", blue "New")
     - Bottom: large "Scan NFC" button with `SignalIcon`
   - **iDeal Stocks mockup** (shown when `hoveredApp === 'stocks'`): Phone screen with:
     - Top bar: "iDeal Stocks" title
     - 3 stat cards in a row: "Total SKUs" (248), "Low Stock" (12, red), "Movements" (36)
     - Product grid: 4 items in 2x2 grid, each with product name, stock bar indicator (colored green/yellow/red based on level), quantity number
7. Change the mockup frame from the current rounded-2xl card to a phone frame matching the FieldSalesSection style (`rounded-[2.5rem] border-8 border-navy-dark`)
8. Import `SignalIcon` from heroicons

**Step 1:** Rewrite the full component with all changes above

**Step 2:** Visually verify in browser — hover each card, check transitions

**Step 3:** Commit: `feat: rewrite WarehouseSection with HTML+CSS mockups, remove iDeal Connect`

---

### Task 2: Rewrite FieldSalesSection.vue

**Files:**
- Modify: `app/components/platform/FieldSalesSection.vue`

**What changes:**
1. Add iDeal Connect as a 3rd app card after iDeal Store
2. Update iDeal POS description to: "The field agent's workhorse — NFC-powered booking and visit tagging, manage truckloads, process orders at outlets, handle payments, and track every delivery."
3. Update iDeal Store description to: "Self-service ordering for outlets. Place orders directly to your dealer for scheduled delivery — no phone calls needed."
4. iDeal Connect card: icon `DevicePhoneMobileIcon`, description "Consumer ordering app — browse nearby outlets, place orders, and get products delivered directly to your door."
5. Add `cursor-pointer` and hover handlers to ALL 3 cards (POS currently lacks them)
6. Replace the `<img>` preview with HTML+CSS mockups inside the phone frame:
   - **Default state:** Keep existing Mobile POS placeholder + NFC badge + transaction overlay
   - **iDeal POS mockup** (shown when `hoveredApp === 'pos'`): Phone screen with:
     - Top bar: "Today's Route" title, progress indicator "5/12"
     - Progress bar (partially filled, primary color)
     - 4 route stop items: outlet name, address, status chip ("Delivered" green, "Pending" yellow, "Next" primary with pulse), time
     - Bottom action bar with "Start Next Delivery" button
   - **iDeal Store mockup** (shown when `hoveredApp === 'store'`): Phone screen with:
     - Top bar: "iDeal Store" + notification bell
     - Summary cards row: "Pending Orders" (3), "Delivered" (12)
     - "Suggested Reorders" section: 2 product rows with name, quantity, "Reorder" button
     - Bottom: large "Quick Order" accent-colored button
   - **iDeal Connect mockup** (shown when `hoveredApp === 'connect'`): Phone screen with:
     - Top bar: location pin + "Outlets near you"
     - 3 outlet cards: store name, distance (e.g., "0.3 km"), rating stars, "Order Now" button
     - Each card slightly elevated with shadow
7. Import `DevicePhoneMobileIcon` from heroicons
8. Keep existing floating NFC badge behavior (hide when any app is hovered)

**Step 1:** Rewrite the full component with all changes above

**Step 2:** Visually verify in browser — hover each of the 3 cards, check transitions

**Step 3:** Commit: `feat: rewrite FieldSalesSection with 3 apps and HTML+CSS mockups`

---

### Task 3: Rewrite ManagementSection.vue

**Files:**
- Modify: `app/components/platform/ManagementSection.vue`

**What changes:**
1. Update iDeal Partner description to: "Monitor your entire business from anywhere — sales performance, revenue tracking, and real-time operational alerts."
2. Update iDeal Direct: change icon from `TruckIcon` to `ComputerDesktopIcon`, update description to "Web-based supplier portal to monitor dealer performance, track distribution coverage, and ensure brand compliance."
3. Add `cursor-pointer` and hover handlers to iDeal Direct card (`@mouseenter="hoveredApp = 'direct'"`)
4. Replace the `<img>` preview with HTML+CSS mockups inside the browser frame:
   - **Default state:** Keep existing dashboard UI (revenue/partners stats + chart bars)
   - **iDeal Partner mockup** (shown when `hoveredApp === 'partner'`): Browser dashboard with:
     - Header: "Business Overview" + date
     - Revenue hero number: "₱1,284,500" with +12.5% badge
     - 3 metric cards: "Active Agents" (24), "Pending Deliveries" (8), "Inventory Health" (94%)
     - Recent activity feed: 3 items with icon, text, timestamp
   - **iDeal Direct mockup** (shown when `hoveredApp === 'direct'`): Browser dashboard with:
     - Header: "Supplier Dashboard" + "iDeal Direct" badge
     - Top row: 2 stat cards — "Distribution Coverage" (87%), "Active Dealers" (156)
     - Bar chart area (styled bars like current default state)
     - Bottom: dealer ranking table — 3 rows with rank, dealer name, sales figure, trend arrow
5. Import `ComputerDesktopIcon` replacing `TruckIcon`

**Step 1:** Rewrite the full component with all changes above

**Step 2:** Visually verify in browser — hover each card, check transitions

**Step 3:** Commit: `feat: rewrite ManagementSection with HTML+CSS mockups, update iDeal Direct`

---

### Task 4: Update EcosystemSection.vue

**Files:**
- Modify: `app/components/landing/EcosystemSection.vue`

**What changes:**
1. Update the "Field Sales" node features to include iDeal Connect reference:
   - Change features to: `['Mobile POS & NFC booking', 'Consumer direct ordering', 'Outlet self-service portal']`
2. Update the "Field Sales" description to: "NFC-powered field sales, consumer ordering, and outlet self-service."
3. Update the "Warehouse Ops" features to reflect only Ops + Stocks:
   - Keep: `['NFC-powered outlet tagging', 'Pallet & empties management', 'Automated stock alerts']`
4. Update "Warehouse Ops" description to: "NFC outlet registration, real-time inventory monitoring, and warehouse management."
5. Update "Management" features to include iDeal Direct:
   - Change to: `['Revenue & performance analytics', 'Supplier distribution monitoring', 'Partner & outlet oversight']`
6. Update "Management" description to: "BI dashboards, supplier monitoring, and total operational oversight."

**Step 1:** Update the `nodes` array with new descriptions and features

**Step 2:** Visually verify the landing page ecosystem section

**Step 3:** Commit: `feat: update EcosystemSection to reflect new app groupings`

---

### Task 5: Final visual QA

**Step 1:** Run `npm run dev` (or `nuxt dev`) and navigate to `/platform`

**Step 2:** Verify each section:
- Warehouse: 2 cards (Ops, Stocks), phone frame, both hover mockups work
- Field Sales: 3 cards (POS, Store, Connect), phone frame, all 3 hover mockups work
- Management: 2 cards (Partner, Direct), browser frame, both hover mockups work

**Step 3:** Navigate to landing page `/` and verify EcosystemSection reflects updated groupings

**Step 4:** Check dark mode if applicable

**Step 5:** Commit any fixes if needed
