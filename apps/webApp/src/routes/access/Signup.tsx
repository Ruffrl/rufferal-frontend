import { observableAuthStore, RSignup } from '@rufferal-frontend/store';
import { Navigate, useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();

  // user is authenticated, send them to dashboard
  if (observableAuthStore.isLoggedIn) {
    return <Navigate to="/" />;
  }

  const navigateLogin = () => navigate('/login');
  // Service agreement and privacy policy
  const navigateAbout = () => navigate('/about');

  return (
    <RSignup navigateLogin={navigateLogin} navigateAbout={navigateAbout} />
  );
};
