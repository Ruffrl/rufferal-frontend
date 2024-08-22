import { RCreatePetDetails } from '@rufferal-frontend/store';
import { useLocation, useNavigate } from 'react-router-dom';

export const CreatePetDetails = () => {
  const navigate = useNavigate();
  const {
    state: { petSpecies },
  } = useLocation();
  console.log('BLARG WEB petSpecies: ', petSpecies);

  const navigateBack = () => navigate('/my-pets');
  const navigateForward = () => navigate('/my-pets/create/personality');
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
