export type ExpirableLocalStorageType = {
  clear: () => void;
  flush: () => void;
  getItem: (name: string) => any;
  setItem: (name: string, data: any, expire: number) => void;
  removeItem: (name: string) => void;
};
