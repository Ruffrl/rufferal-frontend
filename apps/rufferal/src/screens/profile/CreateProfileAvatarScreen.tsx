import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreateProfileAvatar, ScreenProps } from '@rufferal-frontend/store';
import { IconArrowBack, IconClose, IconPlus } from '../../assets';

export const CreateProfileAvatarScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Create Profile Name');
  const navigateForward = () => navigation.navigate('Create Profile Type');

  return (
    <RCreateProfileAvatar
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      mobilePlusIcon={<IconPlus />}
      navigateBack={navigateBack}
      navigateForward={navigateForward}
    />
  );
};
