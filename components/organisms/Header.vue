<template>
  <header
    class="border-b-2 border-black py-4 mb-8 flex justify-between items-center"
  >
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <nav class="space-x-4">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="text-black hover:underline"
      >
        {{ link.text }}
      </a>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "AI Command Center",
  },
  navLinks: {
    type: Array,
    default: () => [
      { href: "/developer/dashboard", text: "Developers" },
      { href: "/customer/dashboard", text: "Customers" },
    ],
  },
});
</script>
