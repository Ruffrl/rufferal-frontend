import { RCreatePetCareplan } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const CreatePetCareplan = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/create-profile/avatar');
  const navigateForward = () => navigate('/create-pet-profiles/avatar');

  return (
    <RCreatePetCareplan
    // navigateBack={navigateBack}
    // navigateForward={navigateForward}
    />
  );
};
