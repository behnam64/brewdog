import { VariantType } from 'notistack';
import { create } from 'zustand';

export type NotificationType = {message: string, variant: VariantType}

export type NotificationStoreType = {
  notifications: NotificationType[];
  add: (notification: NotificationType) => void;
  remove: (notification: NotificationType) => void;
  clear: () => void;
};

export const useNotificationStore = create<NotificationStoreType>((set) => ({
  notifications: [],
  add: (notification: NotificationType) =>
    set((state) => {
      const exists = state.notifications.some((el) => el.message === notification.message);
      if (!exists) {
        state.notifications.push(notification);
      }
      return { notifications: state.notifications };
    }),
  remove: (notification: NotificationType) =>
    set((state: NotificationStoreType) => {
      return { notifications: state.notifications.filter((el) => el.message !== notification.message) };
    }),
  clear: () =>
    set((state: NotificationStoreType) => {
      return { notifications: [] };
    }),
}));
