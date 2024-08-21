import { RCreateProfilePets } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const CreateProfilePets = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/create-profile/avatar');
  const navigateForward = () => navigate('/create-pet-profiles/avatar');

  return (
    <RCreateProfilePets
    // navigateBack={navigateBack}
    // navigateForward={navigateForward}
    />
  );
};
