import { PetSpecies, RCreatePetCareplan } from '@rufferal-frontend/store';
import { useLocation, useNavigate } from 'react-router-dom';

export const CreatePetCareplan = () => {
  const navigate = useNavigate();
  const {
    state: { petSpecies },
  } = useLocation();

  const navigateBack = (petSpecies: PetSpecies) =>
    navigate('/my-pets/create/personality', { state: { petSpecies } });
  const navigateCancel = () => navigate('/my-pets');
  const navigateForward = () => navigate('/my-pets');

  return (
    <RCreatePetCareplan
      navigateBack={navigateBack}
      navigateCancel={navigateCancel}
      navigateForward={navigateForward}
      petSpecies={petSpecies}
    />
  );
};
