import { PetSpecies, RCreatePetCareplan } from '@rufferal-frontend/store';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const CreatePetCareplan = () => {
  let petSpecies;
  const navigate = useNavigate();
  const { state } = useLocation();
  if (state?.petSpecies) {
    petSpecies = state.petSpecies;
  } else {
    return <Navigate to="/my-pets" />;
  }

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
