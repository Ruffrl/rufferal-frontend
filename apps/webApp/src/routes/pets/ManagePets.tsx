import { RManagePets } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const ManagePets = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/create-profile/avatar');
  const navigateForward = () => navigate('/create-pet-profiles/avatar');

  return (
    <RManagePets
    // navigateBack={navigateBack}
    // navigateForward={navigateForward}
    />
  );
};
