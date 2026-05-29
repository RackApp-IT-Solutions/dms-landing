<template>
  <div class="bg-white dark:bg-navy-dark rounded-xl shadow-xl p-8 md:p-12 border border-slate-100 dark:border-white/10">
    <!-- Success State -->
    <div v-if="submitted" class="text-center py-8">
      <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircleIcon class="w-10 h-10 text-green-500" />
      </div>
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h2>
      <p class="text-slate-500 dark:text-slate-400 mb-6">
        Thank you for reaching out. Our team will get back to you within 24 hours.
      </p>
      <button
        type="button"
        class="text-primary font-semibold hover:underline"
        @click="resetForm"
      >
        Send another message
      </button>
    </div>

    <!-- Form -->
    <template v-else>
      <div class="mb-8">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">Get in Touch</h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg">
          Tell us what you need and we'll connect you with the right team.
        </p>
      </div>

      <!-- Service Selection -->
      <div class="mb-8">
        <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">What can we help you with?</label>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            v-for="option in serviceOptions"
            :key="option.value"
            type="button"
            :class="[
              'relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-center cursor-pointer',
              form.service === option.value
                ? 'border-primary bg-primary/5 dark:bg-primary/10 ring-1 ring-primary/30'
                : 'border-slate-200 dark:border-white/10 hover:border-primary/40 hover:bg-slate-50 dark:hover:bg-white/5'
            ]"
            @click="form.service = option.value"
          >
            <div
              :class="[
                'w-10 h-10 rounded-lg flex items-center justify-center transition-colors',
                form.service === option.value
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
              ]"
            >
              <component :is="option.icon" class="w-5 h-5" />
            </div>
            <span
              :class="[
                'text-sm font-semibold transition-colors',
                form.service === option.value
                  ? 'text-primary'
                  : 'text-slate-700 dark:text-slate-300'
              ]"
            >
              {{ option.label }}
            </span>
            <span class="text-xs text-slate-400 dark:text-slate-500">{{ option.description }}</span>
          </button>
        </div>
      </div>

      <form class="space-y-5" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- Name -->
          <div class="space-y-1">
            <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name <span class="text-red-500">*</span></label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon class="w-4 h-4 text-slate-400" />
              </div>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="John Doe"
                required
                class="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-white/10 dark:bg-background-dark rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-colors"
              />
            </div>
          </div>

          <!-- Email -->
          <div class="space-y-1">
            <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Email Address <span class="text-red-500">*</span></label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon class="w-4 h-4 text-slate-400" />
              </div>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="john@company.com"
                required
                class="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-white/10 dark:bg-background-dark rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-colors"
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- Phone -->
          <div class="space-y-1">
            <label for="phone" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PhoneIcon class="w-4 h-4 text-slate-400" />
              </div>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                placeholder="+63 912 345 6789"
                class="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-white/10 dark:bg-background-dark rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-colors"
              />
            </div>
          </div>

          <!-- Company -->
          <div class="space-y-1">
            <label for="company" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Company Name</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BuildingOfficeIcon class="w-4 h-4 text-slate-400" />
              </div>
              <input
                id="company"
                v-model="form.company"
                type="text"
                placeholder="Metro Beverage Distribution Inc."
                class="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-white/10 dark:bg-background-dark rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-colors"
              />
            </div>
          </div>
        </div>

        <!-- Message -->
        <div class="space-y-1">
          <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Message <span class="text-red-500">*</span></label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            :placeholder="messagePlaceholder"
            required
            class="block w-full px-4 py-3 border border-slate-200 dark:border-white/10 dark:bg-background-dark rounded-lg focus:ring-primary focus:border-primary sm:text-sm transition-colors resize-none"
          />
        </div>

        <!-- Error Message -->
        <p v-if="error" class="text-sm text-red-500 flex items-center gap-1.5">
          <ExclamationCircleIcon class="w-4 h-4 flex-shrink-0" />
          {{ error }}
        </p>

        <!-- Submit -->
        <div class="pt-2">
          <button
            type="submit"
            :disabled="loading"
            :class="[
              'w-full flex justify-center items-center gap-2 py-4 px-4 rounded-lg text-sm font-bold text-white transition-all shadow-lg shadow-accent/30',
              loading
                ? 'bg-accent/70 cursor-not-allowed'
                : 'bg-accent hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent'
            ]"
          >
            <ArrowPathIcon v-if="loading" class="w-4 h-4 animate-spin" />
            {{ loading ? 'Sending...' : submitLabel }}
          </button>
          <p class="mt-4 text-xs text-center text-slate-400 dark:text-slate-500">
            We typically respond within 24 hours.
          </p>
        </div>
      </form>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
} from '@heroicons/vue/24/solid'

const serviceOptions = [
  {
    value: 'audit' as const,
    label: 'Free Audit',
    description: 'Evaluate your operations',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    value: 'demo' as const,
    label: 'Request Demo',
    description: 'See the platform live',
    icon: ComputerDesktopIcon,
  },
  {
    value: 'inquiry' as const,
    label: 'General Inquiry',
    description: 'Ask us anything',
    icon: ChatBubbleLeftRightIcon,
  },
]

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: 'audit' as 'audit' | 'demo' | 'inquiry',
  message: '',
})

const loading = ref(false)
const submitted = ref(false)
const error = ref('')

const messagePlaceholder = computed(() => {
  const placeholders: Record<string, string> = {
    audit: 'Tell us about your current distribution setup and what challenges you face...',
    demo: 'Let us know which features interest you most and your preferred schedule...',
    inquiry: 'How can we help you? Ask us anything about our platform or services...',
  }
  return placeholders[form.value.service]
})

const submitLabel = computed(() => {
  const labels: Record<string, string> = {
    audit: 'Request Free Audit',
    demo: 'Schedule Demo',
    inquiry: 'Send Message',
  }
  return labels[form.value.service]
})

async function handleSubmit() {
  error.value = ''
  loading.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value,
    })
    submitted.value = true
  } catch (e: any) {
    error.value = e.data?.statusMessage || 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}

function resetForm() {
  form.value = { name: '', email: '', phone: '', company: '', service: 'audit', message: '' }
  submitted.value = false
  error.value = ''
}
</script>
