import { enableStaticRendering } from 'mobx-react';
import RootStore from '@stores/rootStore';
import { useMemo } from 'react';

enableStaticRendering(typeof window === 'undefined');

let store: RootStore;

export const initializeStore = (
  initialData: RootStore | null = null
): RootStore => {
  const _store = store ?? new RootStore();


  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    _store.hydrate(initialData);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
