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
    this.expiration = new Date();
  }
}

// export const testingToasts: Toast[] = [
//   {
//     type: 'error',
//     expiration: new Date(new Date().getTime() + 8000),
//     message: 'this be an eerror',
//   },
//   {
//     type: 'warning',
//     expiration: new Date(new Date().getTime() + 10000),
//     message: 'could not load',
//   },
//   {
//     type: 'success',
//     expiration: new Date(new Date().getTime() + 20000),
//     message: 'account created',
//   },
// ];

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
    // Current time is 12:00:00
    // Send toast with an expiration of 12:00:10
    // Remove? 12:00:00 ? 12:00:10 -> NO/FALSE
    // Remove? 12:00:05 ? 12:00:10 -> NO/FALSE
    // Remove? 12:00:10 ? 12:00:10 -> YES/TRUE
    // Remove? 12:00:15+ ? 12:00:10 -> YES/TRUE
    // So.. currentTime should be <= toast.expiration

    // return all that aren't expired yet
    // return any where the current time [new Date()] is greater than any toast's expiration time
    // time is greater means time is later means time is further down the "timeline"
    console.log(
      'BLARG toasts: ',
      this.toasts.map((t) => t.message)
    );
    this.toasts = this.toasts.filter((toast) => new Date() < toast.expiration);
  }
}

export const ToastStoreContext = createContext(new ToastStore());
