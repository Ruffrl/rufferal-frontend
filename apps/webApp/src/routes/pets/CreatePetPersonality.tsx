import { RCreatePetPersonality } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const CreatePetPersonality = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/my-pets/create/details');
  const navigateCancel = () => navigate('/my-pets');
  const navigateForward = () => navigate('/my-pets/create/careplan');

  return (
    <RCreatePetPersonality
      navigateBack={navigateBack}
      navigateCancel={navigateCancel}
      navigateForward={navigateForward}
    />
  );
};
