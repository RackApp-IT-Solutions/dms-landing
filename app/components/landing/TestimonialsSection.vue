<template>
  <section class="py-24 lg:py-32 bg-white dark:bg-background-dark relative isolate overflow-hidden">
    <div aria-hidden="true" class="absolute inset-0 -z-10 opacity-60 dark:opacity-30">
      <div class="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div class="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      <div class="text-center max-w-2xl mx-auto mb-14">
        <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-accent">Customer stories</span>
        <h2 class="mt-3 text-balance text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
          Distributors who got their <span class="text-primary dark:text-accent">cases back.</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-3 gap-6 items-stretch">
        <article
          v-for="(t, i) in testimonials"
          :key="t.author"
          :class="[
            'relative rounded-3xl p-8 flex flex-col justify-between',
            i === 1
              ? 'bg-primary text-white shadow-elevated lg:scale-[1.03]'
              : 'bg-slate-50 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 text-slate-900 dark:text-white'
          ]"
        >
          <div>
            <!-- Quote mark -->
            <svg :class="['w-10 h-10 mb-5 opacity-30', i === 1 ? 'text-accent' : 'text-primary dark:text-accent']" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.333 22.667H4L8 12h-4V5.333h10.667V12L10.667 22.667H9.333zm14.667 0h-5.333L22.667 12h-4V5.333h10.666V12l-4 10.667H24z" />
            </svg>
            <p :class="['text-lg lg:text-[19px] leading-relaxed font-medium', i === 1 ? 'text-white' : 'text-slate-700 dark:text-slate-200']">
              {{ t.quote }}
            </p>

            <!-- Stat -->
            <div :class="['mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold', i === 1 ? 'bg-white/15 text-accent' : 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent']">
              <ArrowTrendingUpIcon class="w-4 h-4" />
              {{ t.stat }}
            </div>
          </div>

          <div :class="['mt-8 pt-6 border-t flex items-center gap-3', i === 1 ? 'border-white/15' : 'border-slate-200 dark:border-white/10']">
            <img
              v-if="t.avatar"
              :src="t.avatar"
              :alt="t.author"
              class="w-11 h-11 rounded-full object-cover ring-2 ring-white/20"
            />
            <div v-else :class="['w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm', i === 1 ? 'bg-white/20 text-white' : 'bg-primary text-white']">
              {{ t.initials }}
            </div>
            <div class="flex-1 min-w-0">
              <div :class="['font-semibold text-sm', i === 1 ? 'text-white' : 'text-slate-900 dark:text-white']">{{ t.author }}</div>
              <div :class="['text-xs', i === 1 ? 'text-white/70' : 'text-slate-500 dark:text-slate-400']">{{ t.role }}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowTrendingUpIcon } from '@heroicons/vue/24/solid'

const testimonials = [
  {
    quote: 'We thought 4% case shrinkage was just \"the cost of doing business.\" Three months in, we are at 0.3%. iDeal paid for itself in the first quarter.',
    author: 'Maria Santos',
    initials: 'MS',
    avatar: '',
    role: 'Operations Director, Metro Beverage Co.',
    stat: 'Shrinkage: 4% → 0.3%',
  },
  {
    quote: 'The NFC tap-to-deliver flow ended our dispute meetings overnight. Drivers love it because the data covers them when something goes wrong.',
    author: 'Joey Reyes',
    initials: 'JR',
    avatar: '',
    role: 'Logistics Lead, Pacific Brews',
    stat: 'Disputes down 92%',
  },
  {
    quote: 'Our brewers wanted real-time outlet data. iDeal gave us a single dashboard for 14 branches and 3 partner distributors. Game changer.',
    author: 'Anika Cruz',
    initials: 'AC',
    avatar: '',
    role: 'GM, Highland Distribution',
    stat: '14 branches unified',
  },
]
</script>
