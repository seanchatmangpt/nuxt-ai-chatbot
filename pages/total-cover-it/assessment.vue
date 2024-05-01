<script setup>
import Chatbot from "../components/Chatbot.vue";
import { useCheckboxStore } from "~/stores/checkboxStore";

const store = useCheckboxStore();
</script>

<template>
  <div class="flex flex-row gap-12">
    <div class="w-1/2">
      <Chatbot />
    </div>
    <div class="w-1/2 flex flex-col gap-4 p-8">
      <FormKit
        v-model="store.value1"
        type="checkbox"
        label="Initial Level Assessment"
        :options="store.options1"
        class="mb-8"
      />
      <FormKit
        v-model="store.value2"
        type="checkbox"
        label="Managed Level Assessment"
        :options="store.options2"
        class="mb-4"
      />
      <FormKit
        v-model="store.value3"
        type="checkbox"
        label="Defined Level Assessment"
        :options="store.options3"
        class="mb-4"
      />
      <FormKit
        v-model="store.value4"
        type="checkbox"
        label="Quantitatively Managed Level Assessment"
        :options="store.options4"
        class="mb-4"
      />
      <FormKit
        v-model="store.value5"
        type="checkbox"
        label="Optimizing Level Assessment"
        :options="store.options5"
      />
    </div>
  </div>
</template>
