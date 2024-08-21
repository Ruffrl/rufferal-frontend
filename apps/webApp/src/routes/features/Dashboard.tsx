import { RDashboard } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/create-profile/avatar');
  const navigateForward = () => navigate('/create-pet-profiles/avatar');

  return (
    <RDashboard
    // navigateBack={navigateBack}
    // navigateForward={navigateForward}
    />
  );
};
