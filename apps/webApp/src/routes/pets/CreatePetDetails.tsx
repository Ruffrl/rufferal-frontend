import { RCreatePetDetails } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const CreatePetDetails = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/create-profile/avatar');
  const navigateForward = () => navigate('/create-pet-profiles/avatar');

  return (
    <RCreatePetDetails
    // navigateBack={navigateBack}
    // navigateForward={navigateForward}
    />
  );
};
