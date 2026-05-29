<template>
  <section class="relative isolate py-24 lg:py-28 overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-navy-dark">
    <!-- Layered overlays -->
    <div aria-hidden="true" class="absolute inset-0 opacity-[0.07] pointer-events-none" style="background-image: linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px); background-size: 56px 56px;" />
    <div aria-hidden="true" class="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[radial-gradient(circle,rgba(254,119,2,0.18),transparent_60%)] pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      <div class="relative grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
        <!-- Copy -->
        <div class="text-white">
          <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Ready when you are</span>
          <h2 class="mt-3 text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.05]">
            See what your<br class="hidden lg:inline" />
            operation <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">is leaking</span> — for free.
          </h2>
          <p class="mt-5 text-lg lg:text-xl text-white/75 max-w-2xl text-pretty">
            A 30-minute audit. No fluff, no commitment. We benchmark your variance, asset loss, and route efficiency against 500+ peers.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <NuxtLink
              to="/contact"
              class="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-4 rounded-xl shadow-[0_14px_40px_-10px_rgba(254,119,2,0.6)] hover:-translate-y-0.5 transition-all"
            >
              Book your free audit
              <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl backdrop-blur transition-colors"
            >
              Talk to sales
            </NuxtLink>
          </div>

          <ul class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <li class="flex items-center gap-2">
              <CheckCircleIcon class="w-4 h-4 text-accent" />
              No credit card required
            </li>
            <li class="flex items-center gap-2">
              <CheckCircleIcon class="w-4 h-4 text-accent" />
              30-minute call
            </li>
            <li class="flex items-center gap-2">
              <CheckCircleIcon class="w-4 h-4 text-accent" />
              Custom benchmark report
            </li>
          </ul>
        </div>

        <!-- Side card -->
        <div class="relative">
          <div class="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
          <div class="relative bg-white/[0.07] backdrop-blur-xl border border-white/15 rounded-3xl p-7 shadow-elevated text-white">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                <CalendarDaysIcon class="w-6 h-6" />
              </div>
              <div>
                <div class="text-xs uppercase tracking-wider text-accent font-bold">Next available</div>
                <div class="text-lg font-semibold">This week</div>
              </div>
            </div>

            <ul class="space-y-3">
              <li v-for="step in steps" :key="step.title" class="flex gap-3">
                <div class="shrink-0 w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold text-accent">
                  {{ step.n }}
                </div>
                <div>
                  <div class="text-sm font-semibold text-white">{{ step.title }}</div>
                  <div class="text-xs text-white/60">{{ step.detail }}</div>
                </div>
              </li>
            </ul>

            <div class="mt-6 pt-5 border-t border-white/10 text-xs text-white/60 italic">
              "Within 30 days we knew exactly where every keg was." — Pacific Brews
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon, CheckCircleIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid'

const steps = [
  { n: 1, title: 'Quick discovery call', detail: '15 min — share your current setup' },
  { n: 2, title: 'Operational benchmark', detail: '15 min — see your variance vs. peers' },
  { n: 3, title: 'Tailored next steps', detail: 'Walkthrough of priority modules' },
]
</script>
