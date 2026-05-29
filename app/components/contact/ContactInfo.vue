<template>
  <div class="flex flex-col justify-between space-y-6 h-full">
    <!-- Info Card -->
    <div class="bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 rounded-xl p-8 relative overflow-hidden flex-1">
      <!-- Subtle dot pattern background -->
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#053B61 1px, transparent 1px); background-size: 20px 20px;" />

      <div class="relative z-10">
        <div class="w-12 h-12 bg-white dark:bg-background-dark rounded-full flex items-center justify-center mb-6 shadow-sm">
          <ShieldCheckIcon class="w-6 h-6 text-accent" />
        </div>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Built for the Industry</h3>
        <p class="text-slate-600 dark:text-slate-300 text-sm mb-8 leading-relaxed">
          Discover how our integrated web and mobile platform helps dealerships track inventory, manage fleet movement, and secure assets in real-time.
        </p>

        <div class="border-t border-primary/10 dark:border-primary/20 pt-8 mt-4">
          <h4 class="text-xs uppercase tracking-wider text-primary font-bold mb-6">Contact Information</h4>

          <div class="space-y-6">
            <!-- Company -->
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                  <BuildingOfficeIcon class="w-4 h-4 text-primary" />
                </div>
              </div>
              <div class="ml-4">
                <p class="text-sm font-semibold text-slate-900 dark:text-white">DMS Business Care IT Solutions</p>
              </div>
            </div>

            <!-- Main Address -->
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                  <MapPinIcon class="w-4 h-4 text-primary" />
                </div>
              </div>
              <div class="ml-4">
                <p class="text-xs font-semibold text-slate-900 dark:text-white mb-1">Main Office</p>
                <p class="text-sm text-slate-600 dark:text-slate-300">
                  Tower 3, Unit 17F Kasara Urban Resort Residences,<br />
                  Eagle Street, Brgy. Ugong,<br />
                  Pasig City, Metro Manila 1604
                </p>
              </div>
            </div>

            <!-- Extension Office -->
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                  <MapPinIcon class="w-4 h-4 text-primary" />
                </div>
              </div>
              <div class="ml-4">
                <p class="text-xs font-semibold text-slate-900 dark:text-white mb-1">Extension Office</p>
                <p class="text-sm text-slate-600 dark:text-slate-300">
                  Brgy. Rawis, Calbayog City, Samar,<br />
                  Philippines 6710
                </p>
              </div>
            </div>

            <!-- Email & Phone -->
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                  <EnvelopeIcon class="w-4 h-4 text-primary" />
                </div>
              </div>
              <div class="ml-4">
                <a href="mailto:info@dmsbusinesscare.com" class="text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                  info@dmsbusinesscare.com
                </a>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">(+63) 917-199-9961</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Placeholder -->
    <div class="h-48 rounded-xl overflow-hidden relative shadow-lg group cursor-pointer">
      <div class="w-full h-full bg-primary/20 dark:bg-primary/30" style="background-image: radial-gradient(circle, #053B61 1px, transparent 1px); background-size: 12px 12px;" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ShieldCheckIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/solid'
</script>
