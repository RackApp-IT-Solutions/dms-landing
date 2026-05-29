<template>
  <section class="py-20 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <!-- Text Content (Left) -->
        <div class="order-2 lg:order-1">
          <div class="mb-8">
            <span class="text-primary font-bold tracking-wider uppercase text-sm">Strategic Analytics & Reporting</span>
            <h2 class="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white mt-2 mb-4">Management &amp; Analytics</h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Drive performance with target management and item reconciliation. Access comprehensive reports and data analytics for informed decision-making.
            </p>
          </div>

          <div class="space-y-4">
            <!-- App Card: iDeal Partner -->
            <div
              class="group bg-white dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start cursor-pointer"
              @mouseenter="hoveredApp = 'partner'"
              @mouseleave="hoveredApp = null"
            >
              <div class="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-primary shrink-0">
                <UserGroupIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal Partner</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Monitor your entire business from anywhere — sales performance, revenue tracking, and real-time operational alerts.</p>
              </div>
            </div>

            <!-- App Card: iDeal Direct -->
            <div
              class="group bg-white dark:bg-white/5 p-5 rounded-xl border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex gap-4 items-start cursor-pointer"
              @mouseenter="hoveredApp = 'direct'"
              @mouseleave="hoveredApp = null"
            >
              <div class="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-primary shrink-0">
                <ComputerDesktopIcon class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-navy-dark dark:text-white text-lg">iDeal Direct</h3>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Web-based supplier portal to monitor dealer performance, track distribution coverage, and ensure brand compliance.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Content (Right) — Dashboard Browser Mockup -->
        <div class="order-1 lg:order-2">
          <div class="relative bg-navy-dark rounded-xl shadow-2xl p-2 border border-slate-700">
            <!-- Browser Header -->
            <div class="h-8 bg-slate-800 rounded-t-lg flex items-center px-4 gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500" />
              <div class="w-3 h-3 rounded-full bg-yellow-500" />
              <div class="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <!-- Dashboard Content -->
            <div class="relative h-[300px] lg:h-[400px] bg-slate-900 overflow-hidden">

              <!-- Default dashboard UI -->
              <div
                class="absolute inset-0 p-6 flex flex-col justify-center transition-all duration-500"
                :class="hoveredApp ? 'opacity-0' : 'opacity-100'"
              >
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="bg-slate-800/80 backdrop-blur p-4 rounded-lg border border-slate-700">
                    <div class="text-slate-400 text-xs mb-1">Monthly Revenue</div>
                    <div class="text-primary text-xl font-bold font-mono">₱842,000</div>
                  </div>
                  <div class="bg-slate-800/80 backdrop-blur p-4 rounded-lg border border-slate-700">
                    <div class="text-slate-400 text-xs mb-1">Active Partners</div>
                    <div class="text-white text-xl font-bold font-mono">1,204</div>
                  </div>
                </div>
                <!-- Fake Chart Bars -->
                <div class="bg-slate-800/80 backdrop-blur p-4 rounded-lg border border-slate-700 h-32 flex items-end justify-between px-2 pb-2 gap-2">
                  <div class="w-full bg-slate-700 rounded-t h-[40%] hover:bg-primary transition-colors" />
                  <div class="w-full bg-slate-700 rounded-t h-[60%] hover:bg-primary transition-colors" />
                  <div class="w-full bg-primary rounded-t h-[85%] shadow-[0_0_15px_rgba(5,59,97,0.5)]" />
                  <div class="w-full bg-slate-700 rounded-t h-[55%] hover:bg-primary transition-colors" />
                  <div class="w-full bg-slate-700 rounded-t h-[70%] hover:bg-primary transition-colors" />
                </div>
              </div>

              <!-- iDeal Partner mockup -->
              <div
                class="absolute inset-0 p-6 flex flex-col transition-all duration-500"
                :class="hoveredApp === 'partner' ? 'opacity-100' : 'opacity-0'"
              >
                <!-- Header row -->
                <div class="flex items-center justify-between mb-4">
                  <h4 class="text-white font-bold text-sm lg:text-base">Business Overview</h4>
                  <span class="text-slate-400 text-xs">Feb 2026</span>
                </div>

                <!-- Revenue hero -->
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-white text-2xl lg:text-3xl font-bold font-mono">&#8369;1,284,500</span>
                  <span class="bg-green-500/20 text-green-400 text-xs font-semibold px-2 py-0.5 rounded-full">+12.5%</span>
                </div>

                <!-- 3 metric cards -->
                <div class="grid grid-cols-3 gap-3 mb-4">
                  <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <div class="text-slate-400 text-[10px] lg:text-xs mb-1">Active Agents</div>
                    <div class="text-primary text-lg lg:text-xl font-bold font-mono">24</div>
                  </div>
                  <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <div class="text-slate-400 text-[10px] lg:text-xs mb-1">Pending Deliveries</div>
                    <div class="text-accent text-lg lg:text-xl font-bold font-mono">8</div>
                  </div>
                  <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <div class="text-slate-400 text-[10px] lg:text-xs mb-1">Inventory Health</div>
                    <div class="text-green-400 text-lg lg:text-xl font-bold font-mono">94%</div>
                  </div>
                </div>

                <!-- Recent activity feed -->
                <div class="bg-slate-800/60 rounded-lg border border-slate-700 p-3 flex-1">
                  <div class="space-y-2.5">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                        <span class="text-white text-xs">Agent #12 completed route</span>
                      </div>
                      <span class="text-slate-500 text-[10px] shrink-0 ml-2">2m ago</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                        <span class="text-white text-xs">New outlet registered</span>
                      </div>
                      <span class="text-slate-500 text-[10px] shrink-0 ml-2">15m ago</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                        <span class="text-white text-xs">Stock alert: Low inventory</span>
                      </div>
                      <span class="text-slate-500 text-[10px] shrink-0 ml-2">1h ago</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- iDeal Direct mockup -->
              <div
                class="absolute inset-0 p-6 flex flex-col transition-all duration-500"
                :class="hoveredApp === 'direct' ? 'opacity-100' : 'opacity-0'"
              >
                <!-- Header row -->
                <div class="flex items-center justify-between mb-4">
                  <h4 class="text-white font-bold text-sm lg:text-base">Supplier Dashboard</h4>
                  <span class="bg-accent/20 text-accent text-xs font-semibold px-2 py-0.5 rounded-full">iDeal Direct</span>
                </div>

                <!-- 2 stat cards -->
                <div class="grid grid-cols-2 gap-3 mb-4">
                  <div class="bg-slate-800 p-3 lg:p-4 rounded-lg border border-slate-700">
                    <div class="text-slate-400 text-[10px] lg:text-xs mb-1">Distribution Coverage</div>
                    <div class="text-primary text-xl lg:text-2xl font-bold font-mono">87%</div>
                    <div class="text-green-400 text-[10px] lg:text-xs mt-0.5">&uarr; 3.2%</div>
                  </div>
                  <div class="bg-slate-800 p-3 lg:p-4 rounded-lg border border-slate-700">
                    <div class="text-slate-400 text-[10px] lg:text-xs mb-1">Active Dealers</div>
                    <div class="text-white text-xl lg:text-2xl font-bold font-mono">156</div>
                    <div class="text-green-400 text-[10px] lg:text-xs mt-0.5">&uarr; 8</div>
                  </div>
                </div>

                <!-- Bar chart area -->
                <div class="bg-slate-800/60 rounded-lg border border-slate-700 p-3 mb-3">
                  <div class="flex items-end justify-between gap-2 h-16 lg:h-20 mb-1.5">
                    <div class="w-full bg-slate-700 rounded-t h-[45%]" />
                    <div class="w-full bg-slate-700 rounded-t h-[60%]" />
                    <div class="w-full bg-slate-700 rounded-t h-[50%]" />
                    <div class="w-full bg-primary rounded-t h-[85%] shadow-[0_0_15px_rgba(5,59,97,0.5)]" />
                    <div class="w-full bg-slate-700 rounded-t h-[72%]" />
                  </div>
                  <div class="flex justify-between text-[9px] lg:text-[10px] text-slate-500 px-1">
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                    <span>Jan</span>
                  </div>
                </div>

                <!-- Dealer ranking -->
                <div class="bg-slate-800/60 rounded-lg border border-slate-700 p-3 flex-1">
                  <div class="text-slate-400 text-[10px] uppercase tracking-wider mb-2 font-semibold">Top Dealers</div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between text-xs">
                      <div class="flex items-center gap-2">
                        <span class="text-slate-500 font-mono">#1</span>
                        <span class="text-white">Metro Distribution</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <span class="text-slate-300 font-mono text-[11px]">&#8369;2.4M</span>
                        <span class="text-green-400 text-[10px]">&uarr;</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                      <div class="flex items-center gap-2">
                        <span class="text-slate-500 font-mono">#2</span>
                        <span class="text-white">Pacific Traders</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <span class="text-slate-300 font-mono text-[11px]">&#8369;1.8M</span>
                        <span class="text-green-400 text-[10px]">&uarr;</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between text-xs">
                      <div class="flex items-center gap-2">
                        <span class="text-slate-500 font-mono">#3</span>
                        <span class="text-white">Island Supplies</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <span class="text-slate-300 font-mono text-[11px]">&#8369;1.2M</span>
                        <span class="text-red-400 text-[10px]">&darr;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserGroupIcon, ComputerDesktopIcon } from '@heroicons/vue/24/solid'

const hoveredApp = ref<string | null>(null)
</script>
