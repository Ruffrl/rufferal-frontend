import { action, makeAutoObservable, observable } from 'mobx';
// import { createContext } from 'react';

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

/*
 * BLARG - update to handle
 * 1. can return if account.loggedIn
 * 2. can return an account object
 *    - account id
 *    - account role
 *    - account email
 *    - account social identities (may include avatar/profile photo from social identity...)
 *    - account statuses (verification, banned/archived, etc)
 * 3. can behave as such
 *    - login
 *    - loginGoogle
 *    - loginApple
 *    - signup
 *    - sendVerification
 *    - resendVerification
 *    - sendPasswordReset
 *    - resetPassword
 * BLARG - ProfileStore
 * 1. migrate User/Profile stuff to this store
 * 2. can return a profile object
 *    - profile id (should match account id)
 *    - forename, surname
 *    - avatar/profile photo (unless overridden by account avatar from social login)
 *    - user type (species - owner, cartaker, both)
 * 2. can behave as such
 *    - getProfile
 *    - updateProfile
 */
class AuthStore {
  bearerToken: string | undefined;
  user: User | undefined;
  isLoggedIn = false;

  constructor() {
    makeAutoObservable(this, {
      bearerToken: observable,
      user: observable,
      isLoggedIn: observable,
      setToken: action,
      revokeToken: action,
      setLoginState: action,
      revokeLoginState: action,
      setAuth: action,
      revokeAuth: action,
      // BLARG - to be removed
      setUser: action,
      revokeUser: action,
    });
    // makeAutoObservable(this);
  }

  // Manage authorization tokens and user account/identity data
  // setToken(token: string) {
  //   this.bearerToken = token;
  //   this.setLoginState();
  // }
  // Manage token state
  setToken(token: string) {
    this.bearerToken = token;
  }
  revokeToken() {
    this.bearerToken = undefined;
  }

  // Manage login state
  setLoginState() {
    this.isLoggedIn = true;
  }
  revokeLoginState() {
    this.isLoggedIn = false;
  }

  // Manage AUTH state
  setAuth(token: string) {
    this.setToken(token);
    this.setLoginState();
  }
  revokeAuth() {
    this.revokeToken();
    this.revokeLoginState();
  }

  // BLARG - this should probably move to Profile
  // Manage user state
  setUser(loginUser: User) {
    this.user = loginUser;
  }
  revokeUser() {
    this.user = undefined;
  }
}

// export const AuthStoreContext = createContext(new AuthStore());
export const observableAuthStore = new AuthStore();
