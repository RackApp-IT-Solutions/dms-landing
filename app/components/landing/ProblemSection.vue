<template>
  <section class="relative isolate py-24 lg:py-32 bg-background-light dark:bg-background-dark overflow-hidden">
    <!-- Decorative blob -->
    <div aria-hidden="true" class="absolute inset-x-0 -top-20 -z-10 transform-gpu blur-3xl">
      <div class="mx-auto aspect-[1155/678] w-[40rem] bg-gradient-to-tr from-rose-200/50 to-amber-200/30 dark:from-rose-900/20 dark:to-amber-900/10 opacity-40" style="clip-path: polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 76%, 0% 64%, 17% 100%, 27% 76%, 76% 97%, 74% 44%)" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      <div class="text-center max-w-2xl mx-auto mb-14">
        <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose-500 dark:text-rose-400">The hidden cost</span>
        <h2 class="mt-3 text-balance text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          Where your distribution
          <span class="relative inline-block">
            bleeds money
            <svg class="absolute left-0 -bottom-1 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 6 Q 50 2, 100 5 T 198 4" stroke="currentColor" class="text-rose-400" stroke-width="3" fill="none" stroke-linecap="round" />
            </svg>
          </span>
        </h2>
        <p class="mt-5 text-lg text-slate-600 dark:text-slate-400 text-pretty">
          Paper trails, blind field ops, and disconnected systems quietly drain margin every single day. Here's what we typically uncover in a free audit.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <article
          v-for="(item, idx) in problems"
          :key="item.title"
          :class="[
            'group relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated',
            idx === 1 ? 'lg:scale-[1.02] lg:shadow-card' : ''
          ]"
        >
          <!-- Decorative top accent -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400/0 via-rose-500/60 to-rose-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />

          <div class="flex items-center justify-between mb-6">
            <div class="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center">
              <component :is="item.icon" class="w-6 h-6 text-rose-500 dark:text-rose-400" />
            </div>
            <div class="text-right">
              <div class="text-2xl lg:text-3xl font-extrabold text-rose-500 dark:text-rose-400 tabular-nums">
                {{ item.stat }}
              </div>
              <div class="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold">{{ item.statLabel }}</div>
            </div>
          </div>

          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">{{ item.title }}</h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">{{ item.description }}</p>

          <div class="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400">
            <ExclamationTriangleIcon class="w-4 h-4 text-rose-400 shrink-0" />
            <span>{{ item.impact }}</span>
          </div>
        </article>
      </div>

      <!-- Sum-up bar -->
      <div class="mt-14 p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden shadow-elevated">
        <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;" />
        <div class="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div class="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-2">Bottom line</div>
            <h3 class="text-2xl lg:text-3xl font-bold text-balance">
              The average mid-size distributor loses <span class="text-accent">₱340K / year</span> to preventable variance.
            </h3>
            <p class="text-white/70 mt-2 max-w-2xl">We'll show you yours — for free, in under 30 minutes.</p>
          </div>
          <NuxtLink
            to="/contact"
            class="shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3.5 rounded-xl shadow-[0_10px_30px_-10px_rgba(254,119,2,0.6)] hover:-translate-y-0.5 transition-all"
          >
            Get a free audit
            <ArrowRightIcon class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArchiveBoxIcon,
  BanknotesIcon,
  EyeSlashIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/solid'

const problems = [
  {
    title: 'Inventory variance',
    description: 'Manual counts can\'t keep up with warehouse velocity. Stockouts and ghost SKUs snowball into reorder chaos.',
    icon: ArchiveBoxIcon,
    stat: '2-5%',
    statLabel: 'cases lost / yr',
    impact: 'Untracked variance compounds every quarter.',
  },
  {
    title: 'Asset leakage',
    description: 'Tap handles, pallets, kegs, and CO₂ tanks vanish in the field. Without owner-level traceability, the trail goes cold.',
    icon: BanknotesIcon,
    stat: '₱47K',
    statLabel: 'avg. asset loss',
    impact: 'Per branch, per year — typically unbudgeted.',
  },
  {
    title: 'Blind field ops',
    description: 'Drivers and reps run on radio silence. By the time mis-deliveries surface, they\'ve already cost the customer.',
    icon: EyeSlashIcon,
    stat: '38%',
    statLabel: 'route disputes',
    impact: 'Disputes that proper proof-of-delivery would prevent.',
  },
]
</script>
