import { RHome } from '@rufferal-frontend/store';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const navigateAfterLogin = () => navigate('/dashboard');
  
  return <RHome navigateAfterLogin={navigateAfterLogin} />;
};
