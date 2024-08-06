import { RDash } from '@rufferal-frontend/store';
import { ProtectedRoute } from './ProtectedRoutes';

export const Dashboard = () => {
  return (
    <ProtectedRoute>
      <RDash />
    </ProtectedRoute>
  );
};
