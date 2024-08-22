import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreatePetCareplan, ScreenProps } from '@rufferal-frontend/store';

export const CreatePetCareplanScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Dashboard');
  const navigateForward = () => navigation.navigate('Create Profile Avatar');

  return (
    <RCreatePetCareplan
      // navigateBack={navigateBack}
      // navigateForward={navigateForward}
    />
  );
};
