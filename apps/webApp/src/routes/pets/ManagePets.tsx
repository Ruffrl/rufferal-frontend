import { PetSpecies, RManagePets } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const ManagePets = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/');
  const navigateCreatePet = (petSpecies: PetSpecies) =>
    navigate('/my-pets/create/details', { state: { petSpecies } });

  return (
    <RManagePets
      navigateBack={navigateBack}
      navigateCreatePet={navigateCreatePet}
    />
  );
};
