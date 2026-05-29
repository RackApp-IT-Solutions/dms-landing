<template>
  <section class="py-20 lg:py-28 bg-slate-50 dark:bg-navy-dark/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          Our Team
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-navy-dark dark:text-white tracking-tight mb-4">
          Meet the <span class="text-primary">Experts</span>
        </h2>
        <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          A passionate team of engineers, designers, and industry specialists dedicated to transforming distribution.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="member in team"
          :key="member.name"
          class="bg-white dark:bg-white/5 rounded-2xl p-6 text-center border border-slate-200 dark:border-white/10 hover:shadow-soft transition-all duration-300"
        >
          <img
            v-if="member.avatar"
            :src="member.avatar"
            :alt="member.name"
            class="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-2 ring-primary/20"
          />
          <div v-else class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl font-bold text-primary">{{ member.initials }}</span>
          </div>
          <h3 class="text-lg font-bold text-navy-dark dark:text-white mb-1">{{ member.name }}</h3>
          <p class="text-sm text-primary font-semibold mb-3">{{ member.role }}</p>
          <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const team = [
  {
    name: 'Jappy Palis',
    initials: 'JP',
    avatar: '',
    role: 'CEO',
    bio: '10+ years in supply chain and distribution leadership — combining hands-on operations experience with a vision for building technology that solves real beverage industry problems.',
  },
  {
    name: 'Marlex Ladag',
    initials: 'ML',
    avatar: '/images/team-marlex.png',
    role: 'CTO',
    bio: '10+ years of experience as a full-stack architect passionate about business technology and applications, integrated platforms, and real-time systems.',
  },
  {
    name: 'Rowel Medrina',
    initials: 'RM',
    avatar: '',
    role: 'Head of Customer Success',
    bio: '10+ years of solid experience driving customer success and support — onboarding clients, resolving issues fast, and making sure every partner gets lasting value from the platform.',
  },
]
</script>
