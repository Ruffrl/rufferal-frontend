import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreatePetPersonality, ScreenProps } from '@rufferal-frontend/store';
import { IconArrowBack, IconClose } from '../../assets';

export const CreatePetPersonalityScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Create Pet Details');
  const navigateCancel = () => navigation.navigate('Manage Pets');
  const navigateForward = () =>
    navigation.navigate('Create Pet Careplan');

  return (
    <RCreatePetPersonality
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      navigateBack={navigateBack}
      navigateCancel={navigateCancel}
      navigateForward={navigateForward}
    />
  );
};
