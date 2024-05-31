<template>
  <section id="features" class="content-section mb-16">
    <h2 class="text-3xl font-bold mb-8">Our Features</h2>
    <div class="space-y-8">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="flex items-start"
      >
        <div :class="`border-l-4 pl-4 ${feature.borderColor}`">
          <h3 class="text-xl font-bold">{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFeaturesStore } from "~/stores/featuresStore";
import { computed } from "vue";

const featuresStore = useFeaturesStore();
const features = computed(() => featuresStore.features);
</script>

<style scoped></style>
