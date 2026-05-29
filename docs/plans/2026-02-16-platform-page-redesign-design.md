# Platform Page Redesign — iDeal App Showcase

## Overview

Redesign the platform page to properly showcase all 7 iDeal apps with updated groupings, expanded descriptions, and HTML+CSS mockups (replacing image-based previews) that provide detailed replicas of each app's UI.

## App Inventory

| App | Type | User | Description |
|-----|------|------|-------------|
| iDeal Ops | Mobile | Operations Manager | NFC-powered outlet registration and tagging. Digitize field operations with instant verification and geo-tagged check-ins. |
| iDeal Stocks | Mobile | Warehouse Manager | Real-time warehouse management — product loading, empties unloading, stock monitoring, and automated inventory alerts. |
| iDeal Connect | Mobile | Consumers | Consumer ordering app — browse nearby outlets, place orders, and get products delivered directly to your door. |
| iDeal POS | Mobile | Dealer's Agent | The field agent's workhorse — NFC-powered booking and visit tagging, manage truckloads, process orders at outlets, handle payments, and track every delivery. |
| iDeal Store | Mobile | Outlet Owners | Self-service ordering for outlets. Place orders directly to your dealer for scheduled delivery — no phone calls needed. |
| iDeal Partner | Mobile | Business Owners | Monitor your entire business from anywhere — sales performance, revenue tracking, and real-time operational alerts. |
| iDeal Direct | Web | Suppliers | Web-based supplier portal to monitor dealer performance, track distribution coverage, and ensure brand compliance. |

## Section Grouping

### Section 1: Warehouse & Logistics (2 apps)
- iDeal Ops
- iDeal Stocks

### Section 2: Field Sales & POS (3 apps)
- iDeal POS
- iDeal Store
- iDeal Connect (moved from Warehouse — consumer-facing)

### Section 3: Management & Analytics (2 apps)
- iDeal Partner
- iDeal Direct

## Layout Per Section

### Section 1: Warehouse & Logistics
- **Layout:** Text left, phone frame mockup right
- **Hover behavior:** Each app card reveals its HTML+CSS mockup in the phone frame
- **Default state:** Warehouse placeholder with floating stock alert UI

#### Mockups
- **iDeal Ops:** Phone screen with outlet list (status badges: active/pending/new), search bar at top, prominent "Scan NFC" button at bottom with signal icon
- **iDeal Stocks:** Phone screen with warehouse dashboard — overview cards (Total SKUs, Low Stock, Recent Movements), product grid below with stock level indicators

### Section 2: Field Sales & POS
- **Layout:** Phone frame mockup left, text right
- **Hover behavior:** Each app card reveals its HTML+CSS mockup in the phone frame
- **Default state:** Mobile POS placeholder with NFC badge and transaction overlay

#### Mockups
- **iDeal POS:** Route list — today's stops with outlet names, status chips (Delivered/Pending/Next), progress bar "5 of 12 stops"
- **iDeal Store:** Dashboard with recent orders summary, suggested reorders, "Quick Order" button
- **iDeal Connect:** Nearby outlets list with distance indicators, "Order Now" buttons, location header

### Section 3: Management & Analytics
- **Layout:** Text left, browser frame mockup right
- **Hover behavior:** Each app card reveals its HTML+CSS mockup in the frame
- **Default state:** Dashboard with revenue/partner stats and chart bars

#### Mockups
- **iDeal Partner:** Full business summary — revenue at top, metric cards (Active Agents, Pending Deliveries, Inventory), recent activity feed
- **iDeal Direct:** Analytics dashboard — bar/line charts, distribution coverage %, sales trends, dealer ranking cards

## Icon Assignments (Heroicons)

| App | Icon | Reason |
|-----|------|--------|
| iDeal Ops | ArchiveBoxIcon | Operations/logistics |
| iDeal Stocks | ChartBarIcon | Inventory monitoring |
| iDeal Connect | DevicePhoneMobileIcon | Consumer mobile app (changed from ServerStackIcon) |
| iDeal POS | CreditCardIcon | Payment/sales |
| iDeal Store | BuildingStorefrontIcon | Outlet/storefront |
| iDeal Partner | UserGroupIcon | Business owners/partners |
| iDeal Direct | ComputerDesktopIcon | Web-based platform (updated to reflect web technology) |

## Key Changes from Current Implementation

1. **Move iDeal Connect** from WarehouseSection to FieldSalesSection
2. **Update iDeal Connect** description, icon, and add hover mockup
3. **Update iDeal POS** description to include NFC-powered booking and visit tagging
4. **Replace all image-based previews** (`/images/*.png`) with HTML+CSS detailed replica mockups
5. **Update all app descriptions** to expanded, role-specific versions
6. **Update iDeal Direct icon** to ComputerDesktopIcon (web technology)
7. **Add hover mockups** for apps that currently lack them (iDeal Stocks, iDeal Connect, iDeal POS, iDeal Direct)

## Files to Modify

- `app/components/platform/WarehouseSection.vue` — Remove iDeal Connect, add hover mockups for Ops and Stocks, change mockup frame to phone
- `app/components/platform/FieldSalesSection.vue` — Add iDeal Connect card, add hover mockups for all 3 apps
- `app/components/platform/ManagementSection.vue` — Update iDeal Direct icon, add hover mockups for Partner and Direct
- `app/components/landing/EcosystemSection.vue` — Update to reflect new grouping (Connect under Field Sales)
