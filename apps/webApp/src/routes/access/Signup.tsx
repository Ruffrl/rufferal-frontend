import { observableAuthStore, RSignup } from '@rufferal-frontend/store';
import { Navigate } from 'react-router-dom';

export const Signup = () => {
  // user is authenticated, send them to dashboard
  if (observableAuthStore.isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <RSignup />;
};
