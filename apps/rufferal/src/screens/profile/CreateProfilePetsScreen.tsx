import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreateProfilePets, ScreenProps } from '@rufferal-frontend/store';

export const CreateProfilePetsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Create Profile Avatar');
  const navigateForward = () => navigation.navigate('Manage Pets');
  const navigateDashboard = () => navigation.navigate('Dashboard');

  return (
    <RCreateProfilePets
      // navigateBack={navigateBack}
      // navigateDashboard={navigateDashboard}
      // navigateForward={navigateForward}
    />
  );
};
