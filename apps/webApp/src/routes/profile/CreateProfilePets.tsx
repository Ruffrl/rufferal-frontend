import { RCreateProfilePets } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const CreateProfilePets = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/create-profile/pets');
  const navigateForward = () => navigate('/my-pets');
  const navigateDashboard = () => navigate('/');

  return (
    <RCreateProfilePets
    // navigateBack={navigateBack}
    // navigateDashboard={navigateDashboard}
    // navigateForward={navigateForward}
    />
  );
};
