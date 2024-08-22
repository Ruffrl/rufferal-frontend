import { RCreateProfileName } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const CreateProfileName = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/');
  const navigateForward = () => navigate('/create-profile/avatar');

  return (
    <RCreateProfileName
      navigateBack={navigateBack}
      navigateForward={navigateForward}
    />
  );
};
