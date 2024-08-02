import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

type UserType = 'OWNER' | 'CARETAKER' | 'OWNER_AND_CARETAKER';

// type UserRole = 'SUPERADMIN' | 'ADMIN' | 'USER';

export interface User {
  id: number;
  email: string;
  verified: boolean;
  forename: string;
  surname: string;
  avatar: string | null;
  species: UserType;
  // role: UserRole;
}

class AuthStore {
  bearerToken: string | undefined;
  user: User | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token: string) {
    this.bearerToken = token;
  }

  setUser(loginUser: User) {
    this.user = loginUser;
  }

  revokeAuth() {
    this.bearerToken = undefined;
    this.user = undefined;
  }
}

export const AuthStoreContext = createContext(new AuthStore());
