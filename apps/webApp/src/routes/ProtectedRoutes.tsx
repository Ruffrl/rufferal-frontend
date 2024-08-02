import { AuthStoreContext, ToastStoreContext } from '@rufferal-frontend/store';
import { PropsWithChildren, useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const userStore = useContext(AuthStoreContext);
  const toastStore = useContext(ToastStoreContext);

  if (!userStore.bearerToken) {
    // user is not authenticated
    toastStore.addMessage('Not logged in.');
    return <Navigate to="/" />;
  }
  return children;
};
