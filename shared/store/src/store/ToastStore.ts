import { action, makeAutoObservable, observable } from 'mobx';
import { createContext } from 'react';

type Toast = {
  type: 'success' | 'warning' | 'error';
  status: 'pending' | 'expired';
  message: string;
};
export const testingToasts: Toast[] = [
  {
    type: 'error',
    status: 'pending',
    message: 'this be an eerror',
  },
  {
    type: 'warning',
    status: 'expired',
    message: 'could not load',
  },
  {
    type: 'success',
    status: 'pending',
    message: 'account created',
  },
];

class ToastStore {
  toasts: Toast[] = [];

  constructor() {
    makeAutoObservable(this, {
      toasts: observable,
      addToast: action,
      removeToast: action,
      removeExpired: action,
    });
  }

  addToast(toast: Toast) {
    this.toasts.push(toast);
  }

  removeToast(message: string) {
    this.toasts = this.toasts.filter((toast) => toast.message != message);
  }

  removeExpired() {
    this.toasts = this.toasts.filter((toast) => toast.status != 'expired');
  }
}

export const ToastStoreContext = createContext(new ToastStore());
