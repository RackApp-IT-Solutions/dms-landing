<template>
  <section class="relative -mt-px py-12 lg:py-14 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-8">
        Trusted by leading beverage distributors across Southeast Asia
      </p>

      <div class="relative mask-fade-edges overflow-hidden">
        <div class="marquee-track gap-12 lg:gap-16 items-center">
          <div
            v-for="(name, i) in [...logos, ...logos]"
            :key="`${name}-${i}`"
            class="shrink-0 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors flex items-center gap-2.5"
          >
            <BuildingOfficeIcon class="w-5 h-5 opacity-80" />
            <span class="text-lg lg:text-xl font-semibold tracking-tight whitespace-nowrap">{{ name }}</span>
          </div>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200/70 dark:bg-white/10 rounded-2xl overflow-hidden border border-slate-200/70 dark:border-white/10">
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="bg-white dark:bg-background-dark px-5 py-6 text-center"
        >
          <div class="text-3xl lg:text-4xl font-extrabold text-primary dark:text-white tracking-tight">
            {{ metric.value }}
          </div>
          <div class="mt-1.5 text-xs lg:text-sm text-slate-500 dark:text-slate-400 font-medium">
            {{ metric.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BuildingOfficeIcon } from '@heroicons/vue/24/outline'

const logos = [
  'San Miguel',
  'AB InBev',
  'Heineken',
  'Asia Brewery',
  'Coca-Cola PH',
  'Pepsi PH',
  'Tanduay',
  'Emperador',
]

const metrics = [
  { value: '500+', label: 'Distributors live' },
  { value: '12M+', label: 'NFC scans / month' },
  { value: '99.97%', label: 'Inventory accuracy' },
  { value: '24%', label: 'Avg. efficiency lift' },
]
</script>
