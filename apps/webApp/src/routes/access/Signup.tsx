import { observableAuthStore, RSignup } from '@rufferal-frontend/store';
import { Navigate, useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();

  // user is authenticated, send them to dashboard
  if (observableAuthStore.isLoggedIn) {
    return <Navigate to="/" />;
  }

  // Service agreement and privacy policy
  const navigateAbout = () => navigate('/about');
  const navigateBack = () => navigate('/onboarding');
  const navigateLogin = () => navigate('/login');
  const navigateVerification = () => navigate('/verification');

  return (
    <RSignup
      navigateAbout={navigateAbout}
      navigateBack={navigateBack}
      navigateLogin={navigateLogin}
      navigateVerification={navigateVerification}
    />
  );
};
