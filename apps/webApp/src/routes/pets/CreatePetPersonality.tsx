import { RCreatePetPersonality } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const CreatePetPersonality = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/create-profile/avatar');
  const navigateForward = () => navigate('/create-pet-profiles/avatar');

  return (
    <RCreatePetPersonality
    // navigateBack={navigateBack}
    // navigateForward={navigateForward}
    />
  );
};
