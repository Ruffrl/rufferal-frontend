import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreatePetPersonality, ScreenProps } from '@rufferal-frontend/store';

export const CreatePetPersonalityScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Dashboard');
  const navigateForward = () => navigation.navigate('Create Profile Avatar');

  return (
    <RCreatePetPersonality
      // navigateBack={navigateBack}
      // navigateForward={navigateForward}
    />
  );
};
