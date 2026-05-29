# About Us Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create an About Us page that builds trust and credibility by showcasing the company story, mission, team, and values.

**Architecture:** Component-based approach matching existing project patterns. Four section components in `app/components/about/`, composed by a page file. NavBar updated with new link.

**Tech Stack:** Nuxt 4, Vue 3, Tailwind CSS, Heroicons Vue

---

### Task 1: Create AboutHero.vue

**Files:**
- Create: `app/components/about/AboutHero.vue`

**Step 1: Create the hero component**

```vue
<template>
  <header class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div class="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div class="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
        <span class="w-2 h-2 rounded-full bg-accent animate-pulse" />
        About Us
      </div>

      <h1 class="text-4xl md:text-6xl font-extrabold text-navy-dark dark:text-white tracking-tight mb-6 leading-tight">
        The People Behind <span class="text-primary">DMS</span>
      </h1>

      <p class="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
        We're on a mission to modernize beverage distribution — one dealership at a time. Meet the team building the future of supply chain technology.
      </p>
    </div>
  </header>
</template>
```

**Step 2: Commit**

```bash
git add app/components/about/AboutHero.vue
git commit -m "feat: add AboutHero component"
```

---

### Task 2: Create AboutMission.vue

**Files:**
- Create: `app/components/about/AboutMission.vue`

**Step 1: Create the mission component**

```vue
<template>
  <section class="py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Text Content -->
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Our Mission
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-navy-dark dark:text-white tracking-tight mb-6">
            Empowering Dealerships with <span class="text-primary">Smart Technology</span>
          </h2>
          <p class="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            The beverage distribution industry has long relied on manual processes, paper trails, and disconnected systems. We saw an opportunity to change that.
          </p>
          <p class="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
            DMS was born from a simple idea: give dealership owners real-time visibility into their operations — from warehouse inventory to field sales — through one unified platform.
          </p>
          <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
            Today, we help businesses across the region reduce losses, improve efficiency, and scale with confidence using NFC-powered tracking, smart analytics, and seamless ERP integration.
          </p>
        </div>

        <!-- Visual -->
        <div class="relative">
          <div class="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-2xl p-8 lg:p-12">
            <div class="grid grid-cols-2 gap-6">
              <div v-for="stat in stats" :key="stat.label" class="text-center">
                <div class="text-3xl md:text-4xl font-extrabold text-primary mb-1">{{ stat.value }}</div>
                <div class="text-sm text-slate-500 dark:text-slate-400 font-medium">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '50+', label: 'Dealerships Served' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '3x', label: 'Efficiency Gain' },
  { value: '24/7', label: 'Support Available' },
]
</script>
```

**Step 2: Commit**

```bash
git add app/components/about/AboutMission.vue
git commit -m "feat: add AboutMission component with stats"
```

---

### Task 3: Create AboutTeam.vue

**Files:**
- Create: `app/components/about/AboutTeam.vue`

**Step 1: Create the team component**

```vue
<template>
  <section class="py-20 lg:py-28 bg-slate-50 dark:bg-navy-dark/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          Our Team
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-navy-dark dark:text-white tracking-tight mb-4">
          Meet the <span class="text-primary">Experts</span>
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          A passionate team of engineers, designers, and industry specialists dedicated to transforming distribution.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="member in team"
          :key="member.name"
          class="bg-white dark:bg-white/5 rounded-2xl p-6 text-center border border-slate-200 dark:border-white/10 hover:shadow-soft transition-all duration-300"
        >
          <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl font-bold text-primary">{{ member.initials }}</span>
          </div>
          <h3 class="text-lg font-bold text-navy-dark dark:text-white mb-1">{{ member.name }}</h3>
          <p class="text-sm text-primary font-semibold mb-3">{{ member.role }}</p>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const team = [
  {
    name: 'Alex Rivera',
    initials: 'AR',
    role: 'CEO & Founder',
    bio: 'Former supply chain consultant with 15+ years transforming distribution operations.',
  },
  {
    name: 'Sam Chen',
    initials: 'SC',
    role: 'CTO',
    bio: 'Full-stack architect passionate about IoT, NFC technology, and real-time systems.',
  },
  {
    name: 'Maria Santos',
    initials: 'MS',
    role: 'Head of Product',
    bio: 'Product leader focused on building tools that dealership teams actually love to use.',
  },
  {
    name: 'James Park',
    initials: 'JP',
    role: 'Head of Customer Success',
    bio: 'Dedicated to ensuring every client achieves measurable ROI from day one.',
  },
]
</script>
```

**Step 2: Commit**

```bash
git add app/components/about/AboutTeam.vue
git commit -m "feat: add AboutTeam component with placeholder members"
```

---

### Task 4: Create AboutValues.vue

**Files:**
- Create: `app/components/about/AboutValues.vue`

**Step 1: Create the values component**

Uses Heroicons as per project preference.

```vue
<template>
  <section class="py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          Our Values
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-navy-dark dark:text-white tracking-tight mb-4">
          What <span class="text-primary">Drives</span> Us
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          The principles that guide every decision we make and every feature we build.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="bg-white dark:bg-white/5 rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:shadow-soft transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <component :is="value.icon" class="w-6 h-6 text-primary" />
          </div>
          <h3 class="text-lg font-bold text-navy-dark dark:text-white mb-2">{{ value.title }}</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LightBulbIcon, ShieldCheckIcon, UserGroupIcon, EyeIcon } from '@heroicons/vue/24/outline'

const values = [
  {
    title: 'Innovation',
    icon: LightBulbIcon,
    description: 'We leverage NFC, IoT, and real-time analytics to solve problems others accept as normal.',
  },
  {
    title: 'Reliability',
    icon: ShieldCheckIcon,
    description: 'Our platform is built for 99.9% uptime because your operations never stop.',
  },
  {
    title: 'Customer-First',
    icon: UserGroupIcon,
    description: 'Every feature starts with a real problem faced by dealership owners and their teams.',
  },
  {
    title: 'Transparency',
    icon: EyeIcon,
    description: 'From pricing to data practices, we believe in open, honest partnerships.',
  },
]
</script>
```

**Step 2: Commit**

```bash
git add app/components/about/AboutValues.vue
git commit -m "feat: add AboutValues component with Heroicons"
```

---

### Task 5: Create the About page and update NavBar

**Files:**
- Create: `app/pages/about.vue`
- Modify: `app/components/landing/NavBar.vue:11-13` (desktop links)
- Modify: `app/components/landing/NavBar.vue:31-34` (mobile links)

**Step 1: Create the page file**

```vue
<template>
  <div>
    <AboutHero />
    <AboutMission />
    <AboutTeam />
    <AboutValues />
  </div>
</template>
```

**Step 2: Add "About" link to NavBar desktop menu**

In `app/components/landing/NavBar.vue`, add after the Platform link (line 11):

```vue
<NuxtLink to="/about" class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">About</NuxtLink>
```

**Step 3: Add "About" link to NavBar mobile menu**

In `app/components/landing/NavBar.vue`, add after the Platform mobile link (line 31):

```vue
<NuxtLink to="/about" class="block text-slate-600 dark:text-slate-300 hover:text-primary font-medium transition-colors py-2">About</NuxtLink>
```

**Step 4: Commit**

```bash
git add app/pages/about.vue app/components/landing/NavBar.vue
git commit -m "feat: add About page and navigation link"
```

---

### Task 6: Verify the page works

**Step 1: Run the dev server and verify**

```bash
npm run dev
```

Visit `http://localhost:3000/about` and confirm all sections render correctly.

**Step 2: Final commit if any fixes needed**
