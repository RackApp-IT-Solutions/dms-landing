<template>
  <footer class="relative bg-slate-950 text-slate-300 border-t border-white/5 overflow-hidden">
    <!-- Top accent line -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 pb-10">
      <!-- CTA strip -->
      <div class="pb-16 mb-16 border-b border-white/10">
        <div>
          <div class="flex items-center gap-2 mb-5">
            <img src="/images/logo.svg" alt="DMS IT Solutions" class="h-14 w-auto brightness-0 invert" />
          </div>
          <p class="text-slate-400 text-base max-w-md leading-relaxed">
            iDeal DMS — the Dealership Management System purpose-built for beverage distributors. NFC-powered, offline-first, ERP-friendly.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <a
              v-for="link in social"
              :key="link.label"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              :aria-label="link.label"
              class="w-10 h-10 rounded-full bg-white/5 hover:bg-accent text-slate-400 hover:text-white border border-white/10 flex items-center justify-center transition-all hover:-translate-y-0.5"
            >
              <component :is="link.icon" v-if="link.icon" class="w-4 h-4" />
              <svg v-else-if="link.svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" v-html="link.svg" />
            </a>
          </div>
        </div>
      </div>

      <!-- Link grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div v-for="col in columns" :key="col.title">
          <h4 class="text-white font-semibold mb-4 text-xs uppercase tracking-[0.18em]">{{ col.title }}</h4>
          <ul class="space-y-3 text-sm">
            <li v-for="link in col.links" :key="link.label">
              <NuxtLink
                v-if="link.to"
                :to="link.to"
                class="text-slate-400 hover:text-white transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
              <a
                v-else
                :href="link.href || '#'"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
                class="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
              >
                {{ link.label }}
                <ArrowUpRightIcon v-if="link.external" class="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-500">
        <p>&copy; {{ new Date().getFullYear() }} DMS Business Care IT Solutions. All rights reserved.</p>
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <NuxtLink to="/terms-of-service" class="hover:text-white transition-colors">Terms of Service</NuxtLink>
          <NuxtLink to="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/cookies" class="hover:text-white transition-colors">Cookies</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'

const social = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/dmsbusinesscare',
    external: true,
    svg: '<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>',
  },
  {
    label: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.rackapp.dmsagent',
    external: true,
    svg: '<path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.553 1.478a1 1 0 0 1 0 1.73l-2.553 1.478-2.507-2.507 2.507-2.18zM5.864 3.458L16.8 9.79l-2.302 2.302-8.634-8.634z"/>',
  },
  {
    label: 'Email',
    href: 'mailto:info@dmsbusinesscare.com',
    icon: EnvelopeIcon,
  },
]

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', to: '/platform' },
      { label: 'Warehouse Ops', to: '/platform' },
      { label: 'Field Sales', to: '/platform' },
      { label: 'Management', to: '/platform' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Help Center', to: '/help-center' },
      { label: 'Success Stories', to: '/success-stories' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms-of-service' },
    ],
  },
  {
    title: 'Get the App',
    links: [
      { label: 'Android (Google Play)', href: 'https://play.google.com/store/apps/details?id=com.rackapp.dmsagent', external: true },
      { label: 'Facebook Page', href: 'https://www.facebook.com/dmsbusinesscare', external: true },
      { label: 'info@dmsbusinesscare.com', href: 'mailto:info@dmsbusinesscare.com' },
    ],
  },
]
</script>
