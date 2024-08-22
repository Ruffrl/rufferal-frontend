import { PetSpecies, RCreatePetPersonality } from '@rufferal-frontend/store';
import { useLocation, useNavigate } from 'react-router-dom';

export const CreatePetPersonality = () => {
  const navigate = useNavigate();
  const {
    state: { petSpecies },
  } = useLocation();

  const navigateBack = (petSpecies: PetSpecies) =>
    navigate('/my-pets/create/details', { state: { petSpecies } });
  const navigateCancel = () => navigate('/my-pets');
  const navigateForward = (petSpecies: PetSpecies) =>
    navigate('/my-pets/create/careplan', { state: { petSpecies } });

  return (
    <RCreatePetPersonality
      navigateBack={navigateBack}
      navigateCancel={navigateCancel}
      navigateForward={navigateForward}
      petSpecies={petSpecies}
    />
  );
};
