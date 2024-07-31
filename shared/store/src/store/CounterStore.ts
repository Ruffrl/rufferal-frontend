import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseCount() {
    this.count += 1;
  }
}

export const CounterStoreContext = createContext(new CounterStore());
