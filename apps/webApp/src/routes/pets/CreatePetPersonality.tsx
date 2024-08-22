import { PetSpecies, RCreatePetPersonality } from '@rufferal-frontend/store';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const CreatePetPersonality = () => {
  let petSpecies;
  const navigate = useNavigate();
  const { state } = useLocation();
  if (state?.petSpecies) {
    petSpecies = state.petSpecies;
  } else {
    return <Navigate to="/my-pets" />;
  }

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
