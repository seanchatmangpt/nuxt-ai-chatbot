import { defineStore } from 'pinia';

export const useUsageStore = defineStore('usage', {
  state: () => ({
    usageRecords: [],
    currentUsage: null,
  }),
  actions: {
    logUsage(usage) {
      this.usageRecords.push(usage);
    },
    fetchUsageRecords() {
      // Logic to fetch usage records
    },
  }
});
