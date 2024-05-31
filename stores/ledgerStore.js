import { defineStore } from 'pinia';

export const useLedgerStore = defineStore('ledger', {
  state: () => ({
    ledgerEntries: [],
  }),
  actions: {
    addLedgerEntry(entry) {
      this.ledgerEntries.push(entry);
    },
    fetchLedgerEntries() {
      // Logic to fetch ledger entries
    },
  }
});
