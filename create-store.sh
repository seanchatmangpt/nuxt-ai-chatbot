#!/bin/bash

# Create User Store
cat <<EOF > userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null,
    isAuthenticated: false,
  }),
  actions: {
    login(user) {
      this.currentUser = user;
      this.isAuthenticated = true;
    },
    logout() {
      this.currentUser = null;
      this.isAuthenticated = false;
    },
    register(user) {
      // Logic to register a new user
    },
  }
});
EOF

# Create Transaction Store
cat <<EOF > transactionStore.js
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
EOF

# Create Project Store
cat <<EOF > projectStore.js
import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [],
    activeProjects: [],
    selectedProject: null,
  }),
  actions: {
    fetchProjects() {
      // Logic to fetch projects
    },
    selectProject(project) {
      this.selectedProject = project;
    },
    setupProject(project) {
      this.activeProjects.push(project);
    },
  }
});
EOF

# Create Usage Store
cat <<EOF > usageStore.js
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
EOF

# Create Ledger Store
cat <<EOF > ledgerStore.js
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
EOF

echo "Pinia stores created successfully."
