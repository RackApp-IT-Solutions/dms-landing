<template>
  <section class="relative isolate py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
    <!-- Layered background -->
    <div aria-hidden="true" class="absolute inset-0 -z-10">
      <div class="absolute inset-0 opacity-[0.06]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 28px 28px;" />
      <div class="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[radial-gradient(circle,rgba(254,119,2,0.18),transparent_60%)]" />
      <div class="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,rgba(10,90,148,0.25),transparent_65%)]" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">The solution</span>
        <h2 class="mt-3 text-balance text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
          One platform.
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">Total control.</span>
        </h2>
        <p class="mt-5 text-lg text-slate-400 text-pretty">
          Warehouse, field, and management — connected through a single source of truth, powered by NFC and built for beverage.
        </p>
      </div>

      <!-- Spokes layout -->
      <div class="relative">
        <!-- Spoke grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          <NuxtLink
            v-for="node in nodes"
            :key="node.title"
            :to="node.link"
            class="group relative flex flex-col overflow-hidden bg-slate-900/70 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-7 hover:border-accent/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1"
          >
            <!-- Hover glow -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(254,119,2,0.12),transparent_60%)]" />

            <div class="relative flex flex-col flex-1">
              <div class="flex items-start justify-between mb-5">
                <div :class="[node.iconBg, 'w-12 h-12 rounded-xl flex items-center justify-center ring-1 ring-white/10']">
                  <component :is="node.icon" :class="[node.iconColor, 'w-6 h-6']" />
                </div>
                <span class="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">{{ node.tag }}</span>
              </div>

              <h4 class="font-bold text-white text-xl mb-2 group-hover:text-accent transition-colors">{{ node.title }}</h4>
              <p class="text-sm text-slate-400 leading-relaxed">{{ node.description }}</p>

              <ul class="mt-5 space-y-2">
                <li v-for="feature in node.features" :key="feature" class="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircleIcon class="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <div class="mt-auto pt-5 border-t border-white/5 flex items-center justify-between text-sm">
                <span class="text-slate-400">Explore module</span>
                <span class="inline-flex items-center gap-1 text-accent font-semibold opacity-70 group-hover:opacity-100 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRightIcon class="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BuildingStorefrontIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/solid'

const nodes = [
  {
    title: 'Warehouse Ops',
    tag: 'Module 01',
    description: 'NFC outlet registration, real-time inventory monitoring, and end-to-end warehouse management.',
    icon: BuildingStorefrontIcon,
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-300',
    link: '/platform#features',
    features: [
      'NFC-powered outlet tagging',
      'Pallet & empties management',
      'Automated stock-level alerts',
    ],
  },
  {
    title: 'Field Sales',
    tag: 'Module 02',
    description: 'Mobile POS for reps, NFC-verified deliveries, and self-service ordering for outlets.',
    icon: DevicePhoneMobileIcon,
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-300',
    link: '/platform#features',
    features: [
      'Offline-first mobile POS',
      'NFC tap-to-deliver verification',
      'Outlet self-service portal',
    ],
  },
  {
    title: 'Management',
    tag: 'Module 03',
    description: 'BI dashboards, supplier monitoring, and total operational oversight in one workspace.',
    icon: ChartBarIcon,
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-300',
    link: '/platform#features',
    features: [
      'Revenue & performance analytics',
      'Supplier distribution monitoring',
      'Partner & outlet oversight',
    ],
  },
]
</script>
