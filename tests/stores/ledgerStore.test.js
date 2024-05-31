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
