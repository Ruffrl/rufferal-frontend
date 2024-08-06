import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeAutoObservable } from 'mobx';
// import { createContext } from 'react';
import { makePersistable } from 'mobx-persist-store';

class CounterStore {
  count = 0;
  isLogged = false;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'CounterStore',
      properties: ['count', 'isLogged'],
      storage: AsyncStorage,
    });
  }

  increaseCount() {
    this.count += 1;
  }

  setStatus() {
    this.isLogged = true;
  }

  revokeStatus() {
    this.isLogged = false;
  }
}

// export const CounterStoreContext = createContext(new CounterStore());
export const observableCounterStore = new CounterStore();
