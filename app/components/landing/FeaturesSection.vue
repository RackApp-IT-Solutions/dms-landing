<template>
  <section class="py-24 lg:py-32 bg-background-light dark:bg-background-dark relative isolate overflow-hidden">
    <!-- subtle grid overlay -->
    <div aria-hidden="true" class="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]" style="background-image: linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px); background-size: 56px 56px;" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <!-- Visual side -->
        <div class="relative order-2 lg:order-1">
          <!-- glow halo -->
          <div class="absolute -inset-6 bg-gradient-to-tr from-primary/30 via-accent/10 to-transparent rounded-[2rem] blur-2xl" />

          <div class="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-elevated">
            <img
              src="/images/features-warehouse.jpg"
              alt="Warehouse manager using a tablet for inventory tracking"
              class="w-full h-auto object-cover aspect-[4/5]"
            />
            <!-- gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

            <!-- Bottom inset card -->
            <div class="absolute inset-x-5 bottom-5 bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-elevated">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2 text-xs uppercase tracking-wider text-white/70 font-semibold">
                  <span class="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live operations
                </div>
                <div class="text-[10px] text-white/50 font-mono">today</div>
              </div>
              <div class="grid grid-cols-3 gap-3">
                <div v-for="kpi in liveKpis" :key="kpi.label">
                  <div class="text-white text-xl font-bold tracking-tight">{{ kpi.value }}</div>
                  <div class="text-[11px] text-white/60 mt-0.5">{{ kpi.label }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating stat -->
          <div class="absolute -top-5 -right-5 hidden md:block bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-elevated border border-slate-200 dark:border-white/10 max-w-[200px]">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                <ArrowTrendingUpIcon class="w-5 h-5" />
              </div>
              <div>
                <div class="text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">+24%</div>
                <div class="text-[11px] text-slate-500">First-year efficiency lift</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Copy side -->
        <div class="order-1 lg:order-2 space-y-8">
          <div>
            <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-accent">Purpose-built</span>
            <h2 class="mt-3 text-balance text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
              Built for the beverage industry —
              <span class="text-primary dark:text-accent">not adapted to it.</span>
            </h2>
            <p class="mt-5 text-lg text-slate-600 dark:text-slate-400 text-pretty max-w-xl">
              Generic ERPs don't understand bottle deposits, tap-handle traceability, or route accounting. iDeal DMS does — out of the box.
            </p>
          </div>

          <ul class="space-y-2">
            <li
              v-for="feature in features"
              :key="feature.title"
              class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-white/[0.04] hover:shadow-soft transition-all duration-200 border border-transparent hover:border-slate-200/70 dark:hover:border-white/10"
            >
              <div class="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <component :is="feature.icon" class="w-5 h-5" />
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-slate-900 dark:text-white text-base">{{ feature.title }}</h4>
                <p class="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">{{ feature.description }}</p>
              </div>
            </li>
          </ul>

          <div class="pt-2">
            <NuxtLink to="/platform" class="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all group">
              Explore the full platform
              <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  SignalIcon,
  WifiIcon,
  PuzzlePieceIcon,
  ArrowRightIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/vue/24/solid'

const features = [
  {
    title: 'NFC-powered tagging',
    description: 'Every outlet, asset, and route is NFC-tagged. Scan with a tap; track automatically — no scanners, no paper.',
    icon: SignalIcon,
  },
  {
    title: 'Offline-first mobile app',
    description: 'Reps and drivers can work inside coolers, cellars, or rural routes with zero connectivity. Auto-syncs when online.',
    icon: WifiIcon,
  },
  {
    title: 'Seamless integrations',
    description: 'Pre-built connectors for QuickBooks, NetSuite, SAP, and major brewery portals. Up and running in days, not months.',
    icon: PuzzlePieceIcon,
  },
]

const liveKpis = [
  { value: '12.4K', label: 'NFC scans' },
  { value: '98%', label: 'On-time' },
  { value: '0.03%', label: 'Variance' },
]
</script>
