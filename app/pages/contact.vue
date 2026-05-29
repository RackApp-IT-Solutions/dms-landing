<template>
  <div>
    <ContactHero />

    <section class="p-6 md:p-12 lg:p-24 relative overflow-hidden">
      <!-- Decorative Background Elements -->
      <div class="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div class="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div class="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div class="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 relative">
        <div class="lg:col-span-7">
          <ContactForm />
        </div>
        <div class="lg:col-span-5">
          <ContactInfo />
        </div>
      </div>
    </section>
  </div>
</template>
