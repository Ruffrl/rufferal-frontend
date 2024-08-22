import { observableAccountStore, RLogin } from '@rufferal-frontend/store';
import { Navigate, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  // user is authenticated, send them to dashboard
  if (observableAccountStore.isLoggedIn) {
    return <Navigate to="/" />;
  }

  const navigateBack = () => navigate('/onboarding');
  const navigateDashboard = () => navigate('/');
  const navigateSignup = () => navigate('/signup');
  const navigateForgotPassword = () => navigate('/forgot-password');

  return (
    <RLogin
      navigateBack={navigateBack}
      navigateDashboard={navigateDashboard}
      navigateSignup={navigateSignup}
      navigateForgotPassword={navigateForgotPassword}
    />
  );
};
