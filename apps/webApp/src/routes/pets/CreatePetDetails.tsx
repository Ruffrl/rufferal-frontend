import { PetSpecies, RCreatePetDetails } from '@rufferal-frontend/store';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const CreatePetDetails = () => {
  let petSpecies;
  const navigate = useNavigate();
  const { state } = useLocation();
  if (state?.petSpecies) {
    petSpecies = state.petSpecies;
  } else {
    return <Navigate to="/my-pets" />;
  }

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
