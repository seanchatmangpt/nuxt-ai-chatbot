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
