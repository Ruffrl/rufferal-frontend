import { RDash } from '@rufferal-frontend/store';
import { ProtectedRoute } from './ProtectedRoutes';

export const Dashboard2 = () => {
  return (
    <ProtectedRoute>
      <RDash />
    </ProtectedRoute>
  );
};
