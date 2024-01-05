import { ExpirableLocalStorageType } from './../types/expirableLocalStorageType';
import { create } from 'zustand';
const { expirableLocalStorage }: { expirableLocalStorage: ExpirableLocalStorageType } = require('expirable-storage');

const expirationDuration = 60 * 60 * 24 * 30; // 30 days;
const favouritesStorageName = 'favourites';

export type FavouritesStoreType = {
  ids: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
};

const getBaseData = () => {
  const storage = expirableLocalStorage.getItem(favouritesStorageName);
  if (storage && storage.length) {
    return storage;
  } else {
    return [];
  }
};

export const useFavouritesStore = create<FavouritesStoreType>((set) => ({
  ids: getBaseData(),
  add: (id: number) =>
    set((state) => {
      const exists = state.ids.some((el) => el === id);
      if (!exists) {
        state.ids.push(id);
      }
      expirableLocalStorage.setItem(favouritesStorageName, state.ids, expirationDuration);
      return { ids: state.ids };
    }),
  remove: (id: number) =>
    set((state: FavouritesStoreType) => {
      const ids = state.ids.filter((el) => el !== id);
      expirableLocalStorage.setItem(favouritesStorageName, ids, expirationDuration);
      return { ids };
    }),
  clear: () =>
    set((state: FavouritesStoreType) => {
      expirableLocalStorage.removeItem(favouritesStorageName);
      return { ids: [] };
    }),
}));
