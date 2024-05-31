import { defineStore } from 'pinia';

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: [],
    balance: 0,
  }),
  actions: {
    addTransaction(transaction) {
      this.transactions.push(transaction);
      this.updateBalance(transaction.amount);
    },
    updateBalance(amount) {
      this.balance += amount;
    },
  }
});
