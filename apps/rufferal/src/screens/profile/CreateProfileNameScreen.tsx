import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreateProfileName, ScreenProps } from '@rufferal-frontend/store';

export const CreateProfileNameScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Dashboard');
  const navigateForward = () => navigation.navigate('Create Profile Avatar');

  return (
    <RCreateProfileName
      navigateBack={navigateBack}
      navigateForward={navigateForward}
    />
  );
};
