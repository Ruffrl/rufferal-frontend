import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreateProfileAvatar, ScreenProps } from '@rufferal-frontend/store';

export const CreateProfileAvatarScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Create Profile Name');
  const navigateForward = () => navigation.navigate('Create Profile Type');

  return (
    <RCreateProfileAvatar
      navigateBack={navigateBack}
      navigateForward={navigateForward}
    />
  );
};
