import { action, makeAutoObservable, observable } from 'mobx';
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
  isLoggedIn: boolean | undefined;

  constructor() {
    makeAutoObservable(this, {
      bearerToken: observable,
      user: observable,
      isLoggedIn: observable,
      setToken: action,
      setUser: action,
      revokeAuth: action,
      setLoginState: action,
      revokeLoginState: action,
    });
    this.isLoggedIn = !!this.bearerToken;
  }

  // Manage authorization tokens and user account/identity data
  setToken(token: string) {
    this.bearerToken = token;
    this.isLoggedIn = !!this.bearerToken;
  }
  setUser(loginUser: User) {
    this.user = loginUser;
  }
  revokeAuth() {
    this.bearerToken = undefined;
    this.user = undefined;
  }

  // Manage login state
  setLoginState() {
    this.isLoggedIn = true;
  }
  revokeLoginState() {
    this.isLoggedIn = false;
  }
}

export const AuthStoreContext = createContext(new AuthStore());
