# Footer Pages & Shared Layout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create 6 new pages (Cookies, Privacy Policy, Terms of Service, Case Studies, Help Center, Blog), a shared Nuxt layout, update footer links, and configure Nuxt Content collections.

**Architecture:** Shared default layout with NavBar + Footer wrapping all pages. Legal pages as standalone Vue components with placeholder prose. Blog, Case Studies, and Help Center as Nuxt Content collections with listing pages + detail pages + sample markdown.

**Tech Stack:** Nuxt 4, @nuxt/content v3, Tailwind CSS, @heroicons/vue, Inter font

---

### Task 1: Create Shared Default Layout

**Files:**
- Create: `app/layouts/default.vue`

**Step 1: Create the default layout**

```vue
<template>
  <div class="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 antialiased selection:bg-primary/30 min-h-screen flex flex-col">
    <LandingNavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <LandingAppFooter />
  </div>
</template>
```

**Step 2: Commit**

```bash
git add app/layouts/default.vue
git commit -m "feat: add shared default layout with NavBar and Footer"
```

---

### Task 2: Migrate Existing Pages to Use Default Layout

**Files:**
- Modify: `app/pages/index.vue`
- Modify: `app/pages/platform.vue`
- Modify: `app/pages/success-stories.vue`
- Modify: `app/pages/contact.vue`

**Step 1: Update `app/pages/index.vue`**

Remove the wrapper div, `<LandingNavBar />`, and `<LandingAppFooter />`. Keep only the content sections:

```vue
<template>
  <div>
    <LandingHeroSection />
    <LandingProblemSection />
    <LandingEcosystemSection />
    <LandingFeaturesSection />
    <LandingCtaSection />
  </div>
</template>
```

**Step 2: Update `app/pages/platform.vue`**

```vue
<template>
  <div>
    <PlatformHero />
    <PlatformWarehouseSection />
    <PlatformFieldSalesSection />
    <PlatformManagementSection />
    <PlatformPlatformCta />
  </div>
</template>
```

**Step 3: Update `app/pages/success-stories.vue`**

```vue
<template>
  <div>
    <StoriesRoiHero />
    <StoriesProofStats />
    <LandingCtaSection />
  </div>
</template>
```

**Step 4: Update `app/pages/contact.vue`**

Remove the outer wrapper div and NavBar/Footer. Keep existing `<script setup>` and main content, but wrap in a plain `<div>` without the base styling classes (those are now in the layout):

```vue
<script setup lang="ts">
import AuditForm from '~/components/contact/AuditForm.vue';
</script>

<template>
  <div>
    <ContactHero />

    <section class="flex-grow p-6 md:p-12 lg:p-24 relative overflow-hidden">
      <!-- Decorative Background Elements -->
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div class="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div class="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div class="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 z-10">
        <div class="lg:col-span-7">
          <AuditForm />
        </div>
        <div class="lg:col-span-5">
          <ContactInfo />
        </div>
      </div>
    </section>
  </div>
</template>
```

**Step 5: Run dev server and verify all 4 pages still render correctly**

```bash
npm run dev
```

Visit `/`, `/platform`, `/success-stories`, `/contact` — each should look identical to before.

**Step 6: Commit**

```bash
git add app/pages/index.vue app/pages/platform.vue app/pages/success-stories.vue app/pages/contact.vue
git commit -m "refactor: migrate existing pages to use shared default layout"
```

---

### Task 3: Create Legal Pages

**Files:**
- Create: `app/pages/privacy-policy.vue`
- Create: `app/pages/terms-of-service.vue`
- Create: `app/pages/cookies.vue`

All three legal pages follow the same template structure: a hero header with title + last-updated date, followed by prose-styled placeholder sections.

**Step 1: Create `app/pages/privacy-policy.vue`**

```vue
<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
        <p class="mt-4 text-slate-500 dark:text-slate-400 text-sm">Last updated: February 16, 2026</p>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert max-w-none">
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, request a demo, fill out a form, or contact us. This may include your name, email address, phone number, company name, and any other information you choose to provide.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you technical notices and support messages, and to respond to your comments and questions.</p>

        <h2>3. Information Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>

        <h2>4. Data Security</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.</p>

        <h2>5. Cookies</h2>
        <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction. For more details, please see our <NuxtLink to="/cookies" class="text-primary hover:text-primary-dark">Cookie Policy</NuxtLink>.</p>

        <h2>6. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those sites. We encourage you to read the privacy statements of each website that collects your information.</p>

        <h2>7. Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date above.</p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please <NuxtLink to="/contact" class="text-primary hover:text-primary-dark">contact us</NuxtLink>.</p>
      </div>
    </section>
  </div>
</template>
```

**Step 2: Create `app/pages/terms-of-service.vue`**

```vue
<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Terms of Service</h1>
        <p class="mt-4 text-slate-500 dark:text-slate-400 text-sm">Last updated: February 16, 2026</p>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the DMS Business Care IT Solutions platform and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

        <h2>2. Description of Service</h2>
        <p>DMS Business Care IT Solutions provides a dealership management system designed for the beverage industry, including warehouse management, field sales tools, and management dashboards ("the Service").</p>

        <h2>3. User Accounts</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>

        <h2>4. Acceptable Use</h2>
        <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service in any way that could damage, disable, or impair the Service or interfere with any other party's use of the Service.</p>

        <h2>5. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are owned by DMS Business Care IT Solutions and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

        <h2>6. Limitation of Liability</h2>
        <p>In no event shall DMS Business Care IT Solutions be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.</p>

        <h2>7. Termination</h2>
        <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms of Service.</p>

        <h2>8. Changes to Terms</h2>
        <p>We reserve the right to modify or replace these Terms at any time. Material changes will be communicated with at least 30 days' notice before taking effect.</p>

        <h2>9. Contact Us</h2>
        <p>If you have questions about these Terms, please <NuxtLink to="/contact" class="text-primary hover:text-primary-dark">contact us</NuxtLink>.</p>
      </div>
    </section>
  </div>
</template>
```

**Step 3: Create `app/pages/cookies.vue`**

```vue
<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Cookie Policy</h1>
        <p class="mt-4 text-slate-500 dark:text-slate-400 text-sm">Last updated: February 16, 2026</p>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert max-w-none">
        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.</p>

        <h2>2. How We Use Cookies</h2>
        <p>We use cookies to understand how you use our website, to remember your preferences, and to improve your experience. We also use cookies to help us compile aggregate data about site traffic and interaction.</p>

        <h2>3. Types of Cookies We Use</h2>
        <h3>Essential Cookies</h3>
        <p>These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.</p>

        <h3>Analytics Cookies</h3>
        <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.</p>

        <h3>Functional Cookies</h3>
        <p>These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, more personal features.</p>

        <h2>4. Managing Cookies</h2>
        <p>Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of our website.</p>

        <h2>5. Third-Party Cookies</h2>
        <p>In some cases, we use cookies provided by trusted third parties. These third-party cookies are used for analytics and performance tracking purposes only.</p>

        <h2>6. Changes to This Policy</h2>
        <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.</p>

        <h2>7. Contact Us</h2>
        <p>If you have questions about our use of cookies, please <NuxtLink to="/contact" class="text-primary hover:text-primary-dark">contact us</NuxtLink>.</p>
      </div>
    </section>
  </div>
</template>
```

**Step 4: Commit**

```bash
git add app/pages/privacy-policy.vue app/pages/terms-of-service.vue app/pages/cookies.vue
git commit -m "feat: add legal pages (privacy policy, terms of service, cookies)"
```

---

### Task 4: Configure Nuxt Content Collections

**Files:**
- Modify: `content.config.ts`

**Step 1: Update `content.config.ts`**

Add three new collections for blog, case-studies, and help-center. Keep the existing `content` collection.

```ts
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        image: z.string().optional(),
        author: z.string().optional(),
      }),
    }),
    caseStudies: defineCollection({
      type: 'page',
      source: 'case-studies/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        image: z.string().optional(),
        company: z.string().optional(),
        industry: z.string().optional(),
      }),
    }),
    helpCenter: defineCollection({
      type: 'page',
      source: 'help-center/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string().optional(),
      }),
    }),
  },
})
```

**Step 2: Commit**

```bash
git add content.config.ts
git commit -m "feat: add Nuxt Content collections for blog, case studies, help center"
```

---

### Task 5: Create Sample Content Markdown Files

**Files:**
- Create: `content/blog/getting-started-with-dms.md`
- Create: `content/blog/beverage-distribution-trends-2026.md`
- Create: `content/case-studies/abc-beverages-success.md`
- Create: `content/case-studies/metro-drinks-transformation.md`
- Create: `content/help-center/getting-started.md`
- Create: `content/help-center/managing-inventory.md`

**Step 1: Create blog posts**

`content/blog/getting-started-with-dms.md`:
```markdown
---
title: Getting Started with DMS
description: Learn how to set up and get the most out of your DMS Business Care platform from day one.
date: '2026-02-10'
author: DMS Team
---

# Getting Started with DMS

Setting up your DMS Business Care platform is straightforward. In this guide, we'll walk you through the essential steps to get your beverage distribution management system up and running.

## Initial Setup

Once your account is provisioned, you'll receive access credentials for the management dashboard. From there, you can configure your warehouse locations, set up your product catalog, and invite your team members.

## Key Features to Explore

- **Warehouse Management** — Track inventory in real-time across all your locations
- **Field Sales Tools** — Equip your sales team with mobile tools for on-the-go order management
- **Management Dashboard** — Get a bird's-eye view of your entire operation

## Need Help?

Our support team is available to help you get started. Don't hesitate to reach out through the Help Center or contact us directly.
```

`content/blog/beverage-distribution-trends-2026.md`:
```markdown
---
title: Beverage Distribution Trends in 2026
description: Explore the key trends shaping the beverage distribution industry this year and how technology is driving transformation.
date: '2026-02-01'
author: DMS Team
---

# Beverage Distribution Trends in 2026

The beverage distribution landscape continues to evolve rapidly. Here are the key trends we're seeing this year.

## Digital-First Operations

More distributors are moving away from paper-based processes and embracing digital tools for route planning, order management, and inventory tracking.

## Real-Time Analytics

Data-driven decision making is no longer optional. Distributors need real-time insights into sales performance, stock levels, and delivery efficiency.

## Mobile Workforce Enablement

Field sales teams expect modern, intuitive mobile apps that work offline and sync seamlessly when connectivity is restored.

## Sustainability Focus

Environmental considerations are increasingly influencing distribution strategies, from route optimization to packaging choices.
```

**Step 2: Create case studies**

`content/case-studies/abc-beverages-success.md`:
```markdown
---
title: How ABC Beverages Increased Efficiency by 40%
description: ABC Beverages transformed their distribution operations with DMS, achieving a 40% improvement in operational efficiency.
date: '2026-01-15'
company: ABC Beverages
industry: Soft Drinks
---

# How ABC Beverages Increased Efficiency by 40%

## The Challenge

ABC Beverages, a leading soft drinks distributor, was struggling with manual inventory tracking and paper-based order management across their 5 warehouse locations.

## The Solution

By implementing DMS Business Care, ABC Beverages digitized their entire distribution workflow — from warehouse management to field sales and delivery tracking.

## The Results

- **40% improvement** in operational efficiency
- **60% reduction** in order processing time
- **25% decrease** in stockouts
- **Real-time visibility** across all 5 warehouse locations

> "DMS Business Care transformed how we operate. We can now see our entire operation in real-time and make data-driven decisions." — Operations Manager, ABC Beverages
```

`content/case-studies/metro-drinks-transformation.md`:
```markdown
---
title: Metro Drinks' Digital Transformation Journey
description: Metro Drinks modernized their field sales operations and saw a 35% increase in sales productivity.
date: '2026-01-28'
company: Metro Drinks
industry: Beverage Distribution
---

# Metro Drinks' Digital Transformation Journey

## The Challenge

Metro Drinks' field sales team was relying on outdated tools, leading to missed opportunities and slow order processing. Manual route planning was costing them hours each week.

## The Solution

DMS Business Care's field sales module equipped the Metro Drinks sales team with modern mobile tools for route optimization, real-time inventory checks, and instant order placement.

## The Results

- **35% increase** in sales team productivity
- **50% faster** order processing
- **Optimized routes** saving 3+ hours per driver per week
- **Improved customer satisfaction** through faster, more reliable service

> "Our sales team loves the mobile app. They can check stock, place orders, and plan routes all from their phones." — Sales Director, Metro Drinks
```

**Step 3: Create help center articles**

`content/help-center/getting-started.md`:
```markdown
---
title: Getting Started Guide
description: Everything you need to know to start using DMS Business Care.
category: Getting Started
---

# Getting Started Guide

Welcome to DMS Business Care! This guide will help you set up your account and start managing your beverage distribution operations.

## Step 1: Log In to Your Dashboard

Access your management dashboard using the credentials provided by your account administrator. Navigate to the dashboard URL and enter your email and password.

## Step 2: Configure Your Warehouses

Set up your warehouse locations under **Settings > Warehouses**. Add the name, address, and capacity for each location.

## Step 3: Import Your Products

Navigate to **Products > Import** to upload your product catalog. You can use our CSV template for bulk imports.

## Step 4: Invite Your Team

Go to **Settings > Team** to invite team members and assign roles (warehouse staff, field sales, managers).

## Need More Help?

Browse our other help articles or contact our support team for personalized assistance.
```

`content/help-center/managing-inventory.md`:
```markdown
---
title: Managing Inventory
description: Learn how to track, update, and optimize your inventory across all warehouse locations.
category: Warehouse Management
---

# Managing Inventory

Keep your inventory accurate and up-to-date with DMS Business Care's warehouse management tools.

## Viewing Stock Levels

Navigate to **Warehouse > Inventory** to see real-time stock levels across all your locations. Use filters to search by product, category, or warehouse.

## Updating Stock

Stock levels update automatically when orders are processed and deliveries are confirmed. You can also make manual adjustments under **Warehouse > Adjustments**.

## Stock Alerts

Set up low-stock alerts under **Settings > Notifications** to get notified when products fall below your specified threshold.

## Inventory Reports

Generate detailed inventory reports under **Reports > Inventory**. Export to CSV or PDF for sharing with your team.
```

**Step 4: Commit**

```bash
git add content/blog/ content/case-studies/ content/help-center/
git commit -m "feat: add sample content for blog, case studies, and help center"
```

---

### Task 6: Create Blog Listing and Detail Pages

**Files:**
- Create: `app/pages/blog/index.vue`
- Create: `app/pages/blog/[...slug].vue`

**Step 1: Create `app/pages/blog/index.vue`**

```vue
<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Blog</h1>
        <p class="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl">Insights, tips, and news from the DMS Business Care team.</p>
      </div>
    </section>

    <!-- Posts Grid -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="group bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
          >
            <div class="p-6">
              <p class="text-xs text-slate-400 dark:text-slate-500 mb-2">{{ post.date }}</p>
              <h2 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">{{ post.title }}</h2>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">{{ post.description }}</p>
            </div>
          </NuxtLink>
        </div>

        <div v-if="!posts?.length" class="text-center py-16">
          <p class="text-slate-500 dark:text-slate-400">No blog posts yet. Check back soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>
```

**Step 2: Create `app/pages/blog/[...slug].vue`**

```vue
<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const { data: post } = await useAsyncData('blog-' + slug, () =>
  queryCollection('blog').path('/blog/' + slug).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/blog" class="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block">&larr; Back to Blog</NuxtLink>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">{{ post?.title }}</h1>
        <p class="mt-4 text-slate-500 dark:text-slate-400 text-sm">{{ post?.date }} <span v-if="post?.author">| {{ post.author }}</span></p>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert max-w-none">
        <ContentRenderer v-if="post" :value="post" />
      </div>
    </section>
  </div>
</template>
```

**Step 3: Commit**

```bash
git add app/pages/blog/
git commit -m "feat: add blog listing and detail pages"
```

---

### Task 7: Create Case Studies Listing and Detail Pages

**Files:**
- Create: `app/pages/case-studies/index.vue`
- Create: `app/pages/case-studies/[...slug].vue`

**Step 1: Create `app/pages/case-studies/index.vue`**

```vue
<script setup lang="ts">
const { data: studies } = await useAsyncData('case-studies', () =>
  queryCollection('caseStudies').order('date', 'DESC').all()
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Case Studies</h1>
        <p class="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl">See how beverage distributors are transforming their operations with DMS Business Care.</p>
      </div>
    </section>

    <!-- Studies Grid -->
    <section class="pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NuxtLink
            v-for="study in studies"
            :key="study.path"
            :to="study.path"
            class="group bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
          >
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span v-if="study.industry" class="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{{ study.industry }}</span>
                <span v-if="study.company" class="text-xs text-slate-400 dark:text-slate-500">{{ study.company }}</span>
              </div>
              <h2 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-2">{{ study.title }}</h2>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">{{ study.description }}</p>
            </div>
          </NuxtLink>
        </div>

        <div v-if="!studies?.length" class="text-center py-16">
          <p class="text-slate-500 dark:text-slate-400">No case studies yet. Check back soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>
```

**Step 2: Create `app/pages/case-studies/[...slug].vue`**

```vue
<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const { data: study } = await useAsyncData('case-study-' + slug, () =>
  queryCollection('caseStudies').path('/case-studies/' + slug).first()
)

if (!study.value) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found', fatal: true })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/case-studies" class="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block">&larr; Back to Case Studies</NuxtLink>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">{{ study?.title }}</h1>
        <div class="mt-4 flex items-center gap-3">
          <span v-if="study?.industry" class="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{{ study.industry }}</span>
          <span v-if="study?.company" class="text-sm text-slate-500 dark:text-slate-400">{{ study.company }}</span>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert max-w-none">
        <ContentRenderer v-if="study" :value="study" />
      </div>
    </section>
  </div>
</template>
```

**Step 3: Commit**

```bash
git add app/pages/case-studies/
git commit -m "feat: add case studies listing and detail pages"
```

---

### Task 8: Create Help Center Listing and Detail Pages

**Files:**
- Create: `app/pages/help-center/index.vue`
- Create: `app/pages/help-center/[...slug].vue`

**Step 1: Create `app/pages/help-center/index.vue`**

```vue
<script setup lang="ts">
const { data: articles } = await useAsyncData('help-center', () =>
  queryCollection('helpCenter').all()
)
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Help Center</h1>
        <p class="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Find answers and guides to help you get the most out of DMS Business Care.</p>
      </div>
    </section>

    <!-- Articles List -->
    <section class="pb-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4">
          <NuxtLink
            v-for="article in articles"
            :key="article.path"
            :to="article.path"
            class="group block bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-6 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <span v-if="article.category" class="text-xs font-medium text-primary mb-1 block">{{ article.category }}</span>
                <h2 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{{ article.title }}</h2>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">{{ article.description }}</p>
              </div>
              <ChevronRightIcon class="w-5 h-5 text-slate-400 group-hover:text-primary flex-shrink-0 mt-1 transition-colors" />
            </div>
          </NuxtLink>
        </div>

        <div v-if="!articles?.length" class="text-center py-16">
          <p class="text-slate-500 dark:text-slate-400">No help articles yet. Check back soon!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
</script>
```

Note: This file has two `<script setup>` blocks which won't work. Combine into one at the top:

```vue
<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

const { data: articles } = await useAsyncData('help-center', () =>
  queryCollection('helpCenter').all()
)
</script>
```

**Step 2: Create `app/pages/help-center/[...slug].vue`**

```vue
<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const { data: article } = await useAsyncData('help-' + slug, () =>
  queryCollection('helpCenter').path('/help-center/' + slug).first()
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/help-center" class="text-sm text-primary hover:text-primary-dark font-medium mb-4 inline-block">&larr; Back to Help Center</NuxtLink>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">{{ article?.title }}</h1>
        <span v-if="article?.category" class="mt-4 inline-block text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">{{ article.category }}</span>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate dark:prose-invert max-w-none">
        <ContentRenderer v-if="article" :value="article" />
      </div>
    </section>
  </div>
</template>
```

**Step 3: Commit**

```bash
git add app/pages/help-center/
git commit -m "feat: add help center listing and detail pages"
```

---

### Task 9: Update Footer Links

**Files:**
- Modify: `app/components/landing/AppFooter.vue`

**Step 1: Replace all `<a href="#">` links with `<NuxtLink>` using correct paths**

In the Resources section (lines 39-43), replace:
```html
<li><a href="#" class="hover:text-primary transition-colors">Blog</a></li>
<li><a href="#" class="hover:text-primary transition-colors">Case Studies</a></li>
<li><a href="#" class="hover:text-primary transition-colors">Help Center</a></li>
```
with:
```html
<li><NuxtLink to="/blog" class="hover:text-primary transition-colors">Blog</NuxtLink></li>
<li><NuxtLink to="/case-studies" class="hover:text-primary transition-colors">Case Studies</NuxtLink></li>
<li><NuxtLink to="/help-center" class="hover:text-primary transition-colors">Help Center</NuxtLink></li>
```

In the Company section (lines 49-51), replace:
```html
<li><a href="#" class="hover:text-primary transition-colors">About Us</a></li>
<li><a href="#" class="hover:text-primary transition-colors">Contact</a></li>
<li><a href="#" class="hover:text-primary transition-colors">Privacy Policy</a></li>
```
with:
```html
<li><NuxtLink to="/about" class="hover:text-primary transition-colors">About Us</NuxtLink></li>
<li><NuxtLink to="/contact" class="hover:text-primary transition-colors">Contact</NuxtLink></li>
<li><NuxtLink to="/privacy-policy" class="hover:text-primary transition-colors">Privacy Policy</NuxtLink></li>
```

In the bottom bar (lines 59-61), replace:
```html
<a href="#" class="hover:text-white">Terms of Service</a>
<a href="#" class="hover:text-white">Privacy Policy</a>
<a href="#" class="hover:text-white">Cookies</a>
```
with:
```html
<NuxtLink to="/terms-of-service" class="hover:text-white">Terms of Service</NuxtLink>
<NuxtLink to="/privacy-policy" class="hover:text-white">Privacy Policy</NuxtLink>
<NuxtLink to="/cookies" class="hover:text-white">Cookies</NuxtLink>
```

**Step 2: Commit**

```bash
git add app/components/landing/AppFooter.vue
git commit -m "feat: update footer links to use NuxtLink with correct page routes"
```

---

### Task 10: Add Tailwind Typography Plugin

The legal and content pages use `prose` classes from `@tailwindcss/typography`. This plugin needs to be installed.

**Step 1: Install the plugin**

```bash
npm install @tailwindcss/typography
```

**Step 2: Update `tailwind.config.ts`**

Add the typography plugin:

```ts
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      // ... existing config unchanged
    },
  },
  plugins: [typography],
} satisfies Partial<Config>
```

**Step 3: Commit**

```bash
git add tailwind.config.ts package.json package-lock.json
git commit -m "feat: add @tailwindcss/typography plugin for prose styling"
```

---

### Task 11: Verify Everything Works

**Step 1: Run the dev server**

```bash
npm run dev
```

**Step 2: Verify all pages load correctly**

- `/` — Home page
- `/platform` — Platform page
- `/success-stories` — Success stories
- `/contact` — Contact page
- `/privacy-policy` — Privacy Policy
- `/terms-of-service` — Terms of Service
- `/cookies` — Cookie Policy
- `/blog` — Blog listing with 2 posts
- `/blog/getting-started-with-dms` — Blog detail
- `/case-studies` — Case studies listing with 2 studies
- `/case-studies/abc-beverages-success` — Case study detail
- `/help-center` — Help center listing with 2 articles
- `/help-center/getting-started` — Help article detail
- Footer links all navigate to correct pages

**Step 3: Verify layout works** — NavBar and Footer should appear on all pages without duplication.
