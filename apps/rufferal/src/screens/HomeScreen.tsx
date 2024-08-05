import { RHome } from '@rufferal-frontend/store';

export const HomeScreen = ({ navigation }) => {
  const navigateAfterLogin = () => navigation.navigate('Dashboard');
  
  return (
    <RHome navigation={navigation} navigateAfterLogin={navigateAfterLogin} />
  );
};
