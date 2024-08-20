import { RResetPassword } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const ResetPassword = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/forgot-password');
  const navigateLogin = () => navigate('/login');
  const navigateSignup = () => navigate('/signup');

  return (
    <RResetPassword
      navigateBack={navigateBack}
      navigateLogin={navigateLogin}
      navigateSignup={navigateSignup}
    />
  );
};
