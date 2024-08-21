import { RVerification } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const Verification = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/signup');
  const navigateCreateProfile = () => navigate('/create-profile');
  const navigateLogin = () => navigate('/login');

  return <RVerification
    navigateBack={navigateBack}
    navigateCreateProfile={navigateCreateProfile}
    navigateLogin={navigateLogin}
  />;
};
