import { RCreateProfileAvatar } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const CreateProfileAvatar = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/create-profile/name');
  const navigateForward = () => navigate('/create-profile/type');

  return (
    <RCreateProfileAvatar
      navigateBack={navigateBack}
      navigateForward={navigateForward}
    />
  );
};
