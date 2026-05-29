<template>
  <nav
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/85 dark:bg-background-dark/85 backdrop-blur-xl border-b border-slate-200/70 dark:border-white/5 shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)]'
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
          <img src="/images/logo.svg" alt="DMS IT Solutions" class="h-12 w-auto transition-transform group-hover:scale-[1.03]" />
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 bg-slate-100/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="relative px-4 py-1.5 text-sm font-medium rounded-full text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors"
            active-class="!text-primary dark:!text-white bg-white dark:bg-white/10 shadow-sm"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Right cluster -->
        <div class="hidden md:flex items-center gap-3">
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-full shadow-[0_8px_24px_-10px_rgba(254,119,2,0.6)] hover:shadow-[0_14px_30px_-10px_rgba(254,119,2,0.7)] transition-all duration-200 text-sm"
          >
            Book a demo
            <ArrowRightIcon class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </NuxtLink>
        </div>

        <!-- Mobile button -->
        <div class="md:hidden flex items-center">
          <button
            class="p-2 -mr-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <XMarkIcon v-if="mobileMenuOpen" class="w-6 h-6" />
            <Bars3Icon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden pb-5 space-y-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="block px-3 py-2.5 text-base font-medium rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            active-class="!text-primary bg-primary/5 dark:bg-primary/10"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="pt-3 mt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <NuxtLink
              to="/contact"
              class="text-center bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-3 rounded-lg shadow-md shadow-accent/20 text-sm"
              @click="mobileMenuOpen = false"
            >
              Book a demo
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/vue/24/solid'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/platform', label: 'Platform' },
  { to: '/success-stories', label: 'Stories' },
  { to: '/contact', label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
