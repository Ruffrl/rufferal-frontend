import { RProfile } from '@rufferal-frontend/store';
import { ProtectedRoute } from './ProtectedRoutes';

export const Profile = () => {
  return (
    <ProtectedRoute>
      <RProfile />
    </ProtectedRoute>
  );
};
