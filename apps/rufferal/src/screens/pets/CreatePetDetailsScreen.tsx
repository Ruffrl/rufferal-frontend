import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreatePetDetails, ScreenProps } from '@rufferal-frontend/store';

export const CreatePetDetailsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Dashboard');
  const navigateForward = () => navigation.navigate('Create Profile Avatar');

  return (
    <RCreatePetDetails
      // navigateBack={navigateBack}
      // navigateForward={navigateForward}
    />
  );
};
