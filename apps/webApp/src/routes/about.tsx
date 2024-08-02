import { RAbout } from '@rufferal-frontend/store';
import { ProtectedRoute } from './ProtectedRoutes';

export const About = () => {
  return (
    <ProtectedRoute>
      <RAbout />
    </ProtectedRoute>
  );
};
