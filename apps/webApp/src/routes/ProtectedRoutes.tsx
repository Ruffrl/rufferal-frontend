import { AuthStoreContext, ToastStoreContext } from '@rufferal-frontend/store';
import { PropsWithChildren, useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const authStore = useContext(AuthStoreContext);
  const toastStore = useContext(ToastStoreContext);

  // user is not authenticated
  if (!authStore.isLoggedIn) {
    toastStore.addMessage('Not logged in.');
    return <Navigate to="/" />;
  }

  return children;
};
