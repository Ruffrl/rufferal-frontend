import { RCreatePetCareplan } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const CreatePetCareplan = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/my-pets/create/personality');
  const navigateCancel = () => navigate('/my-pets');
  const navigateForward = () => navigate('/my-pets');

  return (
    <RCreatePetCareplan
      navigateBack={navigateBack}
      navigateCancel={navigateCancel}
      navigateForward={navigateForward}
    />
  );
};
