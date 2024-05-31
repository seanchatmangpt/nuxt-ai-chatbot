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
