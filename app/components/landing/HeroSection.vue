<template>
  <section class="relative isolate overflow-hidden pt-32 lg:pt-40">
    <!-- Background -->
    <div class="absolute inset-0 -z-10">
      <img
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-dark/95 to-navy-dark/80" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(10,90,148,0.4),transparent_60%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(254,119,2,0.18),transparent_55%)]" />
      <!-- Grid overlay -->
      <div
        class="absolute inset-0 opacity-[0.07]"
        style="background-image: linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px); background-size: 56px 56px;"
      />
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-16 lg:py-24">
      <div class="grid lg:grid-cols-12 gap-10 xl:gap-16 items-center">
        <!-- Copy -->
        <div class="lg:col-span-7 space-y-7">
          <div class="inline-flex items-center gap-3 bg-white/[0.06] border border-white/15 rounded-full pl-1.5 pr-4 py-1 backdrop-blur">
            <span class="inline-flex items-center gap-1.5 bg-accent/15 text-accent text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              <span class="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              New
            </span>
            <span class="text-slate-200 text-xs font-medium">v4.0 — NFC Field Sales just shipped</span>
            <ArrowRightIcon class="w-3 h-3 text-slate-400" />
          </div>

          <h1 class="text-balance text-[2.6rem] sm:text-5xl lg:text-[4rem] leading-[1.05] font-extrabold text-white tracking-tightest">
            The operating system
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">built for beverage</span>
            dealerships.
          </h1>

          <p class="text-lg lg:text-xl text-slate-300/90 max-w-xl leading-relaxed text-pretty">
            Stop losing cases. Start gaining insight. The only NFC-powered platform engineered for total inventory control, real-time field operations, and management-grade analytics.
          </p>

          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <NuxtLink to="/contact" class="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl shadow-[0_14px_40px_-10px_rgba(254,119,2,0.55)] hover:shadow-[0_20px_50px_-10px_rgba(254,119,2,0.7)] hover:-translate-y-0.5 transition-all duration-200">
              Book a free demo
              <ArrowRightIcon class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
            <button
              type="button"
              class="group inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-medium px-6 py-3.5 rounded-xl backdrop-blur transition-all duration-200"
              @click="showVideo = true"
            >
              <span class="relative inline-flex w-7 h-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <PlayIcon class="w-3.5 h-3.5 text-white translate-x-px" />
              </span>
              Watch the 2-min tour
            </button>
          </div>

          <!-- Trust signals -->
          <div class="pt-6 grid grid-cols-3 gap-4 max-w-lg">
            <div v-for="stat in heroStats" :key="stat.label">
              <div class="text-2xl lg:text-3xl font-bold text-white tracking-tight">{{ stat.value }}</div>
              <div class="text-xs text-slate-400 mt-1 leading-snug">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Dashboard preview -->
        <div class="lg:col-span-5 relative hidden lg:block">
          <div class="relative max-w-md mx-auto">
            <!-- Glow halo -->
            <div class="absolute -inset-4 bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent rounded-[2rem] blur-2xl" />

            <!-- Floating KPI tile -->
            <div class="absolute -top-5 -left-4 z-20 bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-2xl px-3.5 py-2.5 shadow-elevated animate-float">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                  <ArrowTrendingUpIcon class="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <div class="text-emerald-300 text-[10px] font-semibold uppercase tracking-wider leading-tight">Throughput</div>
                  <div class="text-white text-sm font-bold leading-tight">+24% this week</div>
                </div>
              </div>
            </div>

          <!-- Main panel -->
          <div class="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 rounded-2xl border border-white/10 p-5 backdrop-blur-xl shadow-elevated">
            <!-- Window chrome -->
            <div class="flex justify-between items-center mb-5 pb-3 border-b border-white/5">
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div class="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div class="flex items-center gap-1.5 text-slate-400 text-[10px] font-mono uppercase tracking-wider">
                <span class="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE — Warehouse A
              </div>
            </div>

            <!-- Activity rows -->
            <div class="space-y-2.5">
              <div class="flex items-center justify-between bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-3 rounded-xl border border-white/5">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="w-9 h-9 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-300 shrink-0">
                    <CubeIcon class="w-4.5 h-4.5" />
                  </div>
                  <div class="min-w-0">
                    <div class="text-white text-sm font-medium truncate">Outlet #8921-A · Manila</div>
                    <div class="text-slate-400 text-[11px]">NFC scanned · just now</div>
                  </div>
                </div>
                <span class="inline-flex items-center gap-1 text-emerald-300 text-[11px] font-semibold bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full shrink-0">
                  <CheckBadgeIcon class="w-3 h-3" /> Verified
                </span>
              </div>

              <div class="flex items-center justify-between bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-3 rounded-xl border border-white/5">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="w-9 h-9 rounded-lg bg-amber-400/15 flex items-center justify-center text-amber-300 shrink-0">
                    <TruckIcon class="w-4.5 h-4.5" />
                  </div>
                  <div class="min-w-0">
                    <div class="text-white text-sm font-medium truncate">Route 42 · Truck 9</div>
                    <div class="text-slate-400 text-[11px]">Departed 2 min ago · 12 stops</div>
                  </div>
                </div>
                <span class="text-amber-300 text-[11px] font-semibold bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full shrink-0">
                  En route
                </span>
              </div>

              <div class="flex items-center justify-between bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-3 rounded-xl border border-white/5">
                <div class="flex items-center gap-3 min-w-0">
                  <div class="w-9 h-9 rounded-lg bg-purple-400/15 flex items-center justify-center text-purple-300 shrink-0">
                    <ChartBarIcon class="w-4.5 h-4.5" />
                  </div>
                  <div class="min-w-0">
                    <div class="text-white text-sm font-medium truncate">Daily reconciliation</div>
                    <div class="text-slate-400 text-[11px]">3 SKUs need review</div>
                  </div>
                </div>
                <span class="text-purple-300 text-[11px] font-semibold bg-purple-400/10 border border-purple-400/20 px-2 py-0.5 rounded-full shrink-0">
                  Auto
                </span>
              </div>

              <!-- Sparkline -->
              <div class="relative bg-gradient-to-b from-white/[0.04] to-transparent p-3 rounded-xl border border-white/5">
                <div class="flex justify-between items-baseline mb-1">
                  <div class="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Throughput · 7d</div>
                  <div class="text-white text-lg font-bold">98.4%</div>
                </div>
                <svg viewBox="0 0 100 30" preserveAspectRatio="none" class="w-full h-12">
                  <defs>
                    <linearGradient id="hero-spark" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stop-color="#FE7702" stop-opacity="0.4" />
                      <stop offset="100%" stop-color="#FE7702" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 22 Q10 18 20 20 T40 12 T60 14 T80 6 T100 4 L100 30 L0 30 Z" fill="url(#hero-spark)" />
                  <path d="M0 22 Q10 18 20 20 T40 12 T60 14 T80 6 T100 4" fill="none" stroke="#FE7702" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          </div>

            <!-- NFC tap chip -->
            <div class="absolute -bottom-4 -right-4 z-20 bg-white text-slate-900 rounded-2xl px-3.5 py-2.5 shadow-elevated border border-white/40 animate-float [animation-delay:1.2s]">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                  <SignalIcon class="w-4 h-4" />
                </div>
                <div>
                  <div class="text-[10px] uppercase tracking-wider text-slate-500 font-bold leading-tight">NFC tap</div>
                  <div class="text-sm font-bold leading-tight">12,438 today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="showVideo" class="fixed inset-0 z-[100] flex items-center justify-center p-4" @click.self="closeVideo">
          <div class="absolute inset-0 bg-black/85 backdrop-blur-sm" />
          <Transition
            enter-active-class="transition duration-300 ease-out delay-100"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div v-if="showVideo" class="relative z-10 w-full max-w-5xl">
              <button
                type="button"
                class="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-1 text-sm"
                @click="closeVideo"
              >
                <XMarkIcon class="w-5 h-5" />
                Close
              </button>
              <div class="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10" style="padding-bottom: 56.25%;">
                <iframe
                  class="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/2tuy29S8eCk?start=61&autoplay=1"
                  title="iDeal DMS Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowRightIcon,
  PlayIcon,
  CubeIcon,
  CheckBadgeIcon,
  TruckIcon,
  XMarkIcon,
  ChartBarIcon,
  SignalIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/vue/24/solid'

const showVideo = ref(false)

const heroStats = [
  { value: '500+', label: 'Distributors onboarded' },
  { value: '99.97%', label: 'Inventory accuracy' },
  { value: '₱2.4M', label: 'Avg. recovered revenue' },
]

function closeVideo() {
  showVideo.value = false
}
</script>
