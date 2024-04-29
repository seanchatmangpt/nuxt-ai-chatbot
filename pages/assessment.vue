<script setup>
import Chatbot from "../components/Chatbot.vue";
import { useCheckboxStore } from "~/stores/checkboxStore";

const store = useCheckboxStore();

// watchEffect(() => {
//   console.log(
//     "Current State of Store:",
//     JSON.parse(JSON.stringify(store.$state)),
//   );
// });
</script>

<template>
  <Chatbot />
  <FormKit
    v-model="store.value1"
    type="checkbox"
    label="Initial Level Assessment"
    :options="store.options1"
  />
  <FormKit
    v-model="store.value2"
    type="checkbox"
    label="Managed Level Assessment"
    :options="store.options2"
  />
  <FormKit
    v-model="store.value3"
    type="checkbox"
    label="Defined Level Assessment"
    :options="store.options3"
  />
  <FormKit
    v-model="store.value4"
    type="checkbox"
    label="Quantitatively Managed Level Assessment"
    :options="store.options4"
  />
  <FormKit
    v-model="store.value5"
    type="checkbox"
    label="Optimizing Level Assessment"
    :options="store.options5"
  />
</template>
