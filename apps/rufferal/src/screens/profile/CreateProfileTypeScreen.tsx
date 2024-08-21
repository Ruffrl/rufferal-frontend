import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreateProfileType, ScreenProps } from '@rufferal-frontend/store';

export const CreateProfileTypeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Create Profile Avatar');
  const navigateForward = () => navigation.navigate('Create Profile Pets');

  return (
    <RCreateProfileType
    navigateBack={navigateBack}
    navigateForward={navigateForward}
    />
  );
};
