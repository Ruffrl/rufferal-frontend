import { action, makeAutoObservable, observable } from 'mobx';
import { createContext } from 'react';

// type Toast = {
//   type: 'success' | 'warning' | 'error';
//   expiration: Date;
//   message: string;
// };

type ToastType = 'success' | 'warning' | 'error';

class Toast {
  public type: ToastType;
  public message: string;
  public expiration: Date;

  public constructor({ type, message }: { type: ToastType; message: string }) {
    this.type = type;
    this.message = message;
    this.expiration = new Date(new Date().getTime() + 10000);
  }
}

export const testingToasts: Toast[] = [
  {
    type: 'error',
    expiration: new Date(new Date().getTime() + 8000),
    message: 'this be an eerror',
  },
  {
    type: 'warning',
    expiration: new Date(new Date().getTime() + 10000),
    message: 'could not load',
  },
  {
    type: 'success',
    expiration: new Date(new Date().getTime() + 20000),
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

  addToast({ type, message }: { type: ToastType; message: string }) {
    const toast = new Toast({ type, message });
    this.toasts.push(toast);
  }

  removeToast({ message }: { message: string }) {
    this.toasts = this.toasts.filter((toast) => toast.message != message);
  }

  removeExpired() {
    this.toasts = this.toasts.filter((toast) => new Date() < toast.expiration);
  }
}

export const ToastStoreContext = createContext(new ToastStore());
