<template>
  <div class="container mx-auto px-4">
    <Header />
    <main class="max-w-4xl mx-auto">
      <WelcomeSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/organisms/Header.vue";
import Footer from "../components/organisms/Footer.vue";
import WelcomeSection from "../components/organisms/WelcomeSection.vue";
import FeaturesSection from "../components/organisms/FeaturesSection.vue";
import TestimonialsSection from "../components/organisms/TestimonialsSection.vue";
import ContactSection from "../components/organisms/ContactSection.vue";
</script>

<style scoped></style>
