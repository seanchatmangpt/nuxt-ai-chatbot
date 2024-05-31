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
