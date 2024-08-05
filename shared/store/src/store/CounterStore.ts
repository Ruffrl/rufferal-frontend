import { makeAutoObservable } from 'mobx';
// import { createContext } from 'react';

class CounterStore {
  count = 0;
  isLogged = false;

  constructor() {
    makeAutoObservable(this);
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
