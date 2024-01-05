import { ExpirableLocalStorageType } from './../types/expirableLocalStorageType';
import { create } from 'zustand';
const { expirableLocalStorage }: { expirableLocalStorage: ExpirableLocalStorageType } = require('expirable-storage');

const expirationDuration = 60 * 60 * 24 * 7; // 7 days;
const cartStorageName = 'cart';

export type CartsStoreType = {
  ids: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
};

const getBaseData = () => {
  const storage = expirableLocalStorage.getItem(cartStorageName);
  if (storage && storage.length) {
    return storage;
  } else {
    return [];
  }
};

export const useCartsStore = create<CartsStoreType>((set) => ({
  ids: getBaseData(),
  add: (id: number) =>
    set((state) => {
      const exists = state.ids.some((el) => el === id);
      if (!exists) {
        state.ids.push(id);
      }
      expirableLocalStorage.setItem(cartStorageName, state.ids, expirationDuration);
      return { ids: state.ids };
    }),
  remove: (id: number) =>
    set((state: CartsStoreType) => {
      const ids = state.ids.filter((el) => el !== id);
      expirableLocalStorage.setItem(cartStorageName, ids, expirationDuration);
      return { ids };
    }),
  clear: () =>
    set((state: CartsStoreType) => {
      expirableLocalStorage.removeItem(cartStorageName);
      return { ids: [] };
    }),
}));
