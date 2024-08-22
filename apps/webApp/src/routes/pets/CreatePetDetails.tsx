import { PetSpecies, RCreatePetDetails } from '@rufferal-frontend/store';
import { useLocation, useNavigate } from 'react-router-dom';

export const CreatePetDetails = () => {
  const navigate = useNavigate();
  const {
    state: { petSpecies },
  } = useLocation();

  const navigateBack = () => navigate('/my-pets');
  const navigateForward = (petSpecies: PetSpecies) =>
    navigate('/my-pets/create/personality', { state: { petSpecies } });
  const navigateCancel = () => navigate('/my-pets');

  return (
    <RCreatePetDetails
      navigateBack={navigateBack}
      navigateCancel={navigateCancel}
      navigateForward={navigateForward}
      petSpecies={petSpecies}
    />
  );
};
