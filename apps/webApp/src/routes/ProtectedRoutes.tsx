import {
  observableAuthStore,
  ToastStoreContext,
} from '@rufferal-frontend/store';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren, useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = observer(({ children }: PropsWithChildren) => {
  const toastStore = useContext(ToastStoreContext);

  // user is not authenticated
  if (!observableAuthStore.isLoggedIn) {
    toastStore.addMessage('Not logged in.');
    return <Navigate to="/" />;
  }

  return children;
});
