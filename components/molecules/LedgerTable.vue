<template>
  <div>
    <table class="table w-full mt-4">
      <thead>
        <tr>
          <th class="text-neutral">Date</th>
          <th class="text-neutral">Type</th>
          <th class="text-neutral">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.date }}</td>
          <td>{{ transaction.type }}</td>
          <td>{{ transaction.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  transactions: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
