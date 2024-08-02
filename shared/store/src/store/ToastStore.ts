import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

class ToastStore {
  messages: Array<string> = [];

  constructor() {
    makeAutoObservable(this);
  }

  addMessage(message: string) {
    this.messages.push(message);
  }
}

export const ToastStoreContext = createContext(new ToastStore());
