import { RForgotPassword } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/onboarding');
  // const navigateLogin = () => navigate('/login');
  const navigateResetPassword = () => navigate('/reset-password');

  return (
    <RForgotPassword
      navigateBack={navigateBack}
      // navigateLogin={navigateLogin}
      navigateResetPassword={navigateResetPassword}
    />
  );
};
