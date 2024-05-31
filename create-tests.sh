#!/bin/bash

# Ensure the /tests/stores directory exists
mkdir -p tests/stores

# Create User Store Test
cat <<EOF > tests/stores/userStore.test.js
import { setActivePinia, createPinia } from 'pinia';
import { useUserStore } from '../../stores/userStore';

describe('User Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should login a user', () => {
    const store = useUserStore();
    store.login({ id: 1, name: 'John Doe' });
    expect(store.currentUser).toEqual({ id: 1, name: 'John Doe' });
    expect(store.isAuthenticated).toBe(true);
  });

  it('should logout a user', () => {
    const store = useUserStore();
    store.login({ id: 1, name: 'John Doe' });
    store.logout();
    expect(store.currentUser).toBe(null);
    expect(store.isAuthenticated).toBe(false);
  });

  it('should register a user', () => {
    const store = useUserStore();
    store.register({ id: 2, name: 'Jane Doe' });
    // Add expectations for register logic once implemented
  });
});
EOF

# Create Transaction Store Test
cat <<EOF > tests/stores/transactionStore.test.js
import { setActivePinia, createPinia } from 'pinia';
import { useTransactionStore } from '../../stores/transactionStore';

describe('Transaction Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should add a transaction and update balance', () => {
    const store = useTransactionStore();
    store.addTransaction({ id: 1, amount: 100 });
    expect(store.transactions).toHaveLength(1);
    expect(store.transactions[0]).toEqual({ id: 1, amount: 100 });
    expect(store.balance).toBe(100);
  });

  it('should update the balance correctly', () => {
    const store = useTransactionStore();
    store.updateBalance(50);
    expect(store.balance).toBe(50);
  });
});
EOF

# Create Project Store Test
cat <<EOF > tests/stores/projectStore.test.js
import { setActivePinia, createPinia } from 'pinia';
import { useProjectStore } from '../../stores/projectStore';

describe('Project Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should fetch projects', () => {
    const store = useProjectStore();
    store.fetchProjects();
    // Add expectations for fetchProjects logic once implemented
  });

  it('should select a project', () => {
    const store = useProjectStore();
    const project = { id: 1, name: 'Project A' };
    store.selectProject(project);
    expect(store.selectedProject).toEqual(project);
  });

  it('should setup a project', () => {
    const store = useProjectStore();
    const project = { id: 1, name: 'Project A' };
    store.setupProject(project);
    expect(store.activeProjects).toContain(project);
  });
});
EOF

# Create Usage Store Test
cat <<EOF > tests/stores/usageStore.test.js
import { setActivePinia, createPinia } from 'pinia';
import { useUsageStore } from '../../stores/usageStore';

describe('Usage Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should log usage', () => {
    const store = useUsageStore();
    const usage = { id: 1, hours: 10 };
    store.logUsage(usage);
    expect(store.usageRecords).toHaveLength(1);
    expect(store.usageRecords[0]).toEqual(usage);
  });

  it('should fetch usage records', () => {
    const store = useUsageStore();
    store.fetchUsageRecords();
    // Add expectations for fetchUsageRecords logic once implemented
  });
});
EOF

# Create Ledger Store Test
cat <<EOF > tests/stores/ledgerStore.test.js
import { setActivePinia, createPinia } from 'pinia';
import { useLedgerStore } from '../../stores/ledgerStore';

describe('Ledger Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should add a ledger entry', () => {
    const store = useLedgerStore();
    const entry = { id: 1, type: 'Deposit', amount: 100 };
    store.addLedgerEntry(entry);
    expect(store.ledgerEntries).toHaveLength(1);
    expect(store.ledgerEntries[0]).toEqual(entry);
  });

  it('should fetch ledger entries', () => {
    const store = useLedgerStore();
    store.fetchLedgerEntries();
    // Add expectations for fetchLedgerEntries logic once implemented
  });
});
EOF

echo "Vitest store tests created successfully."
