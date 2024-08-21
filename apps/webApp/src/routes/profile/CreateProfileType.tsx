import { RCreateProfileType } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const CreateProfileType = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/create-profile/avatar');
  const navigateForward = () => navigate('/create-pet-profiles/avatar');

  return <RCreateProfileType
    navigateBack={navigateBack}
    navigateForward={navigateForward}
  />;
};
