import { observableAuthStore, RLogin } from '@rufferal-frontend/store';
import { Navigate } from 'react-router-dom';

export const Login = () => {
  // user is authenticated, send them to dashboard
  if (observableAuthStore.isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <RLogin />;
};
