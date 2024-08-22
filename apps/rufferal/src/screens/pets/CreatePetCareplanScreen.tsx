import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RCreatePetCareplan, ScreenProps } from '@rufferal-frontend/store';
import { IconArrowBack, IconClose } from '../../assets';

export const CreatePetCareplanScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Create Pet Personality');
  const navigateCancel = () => navigation.navigate('Manage Pets');
  const navigateForward = () => navigation.navigate('Manage Pets');

  return (
    <RCreatePetCareplan
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      navigateBack={navigateBack}
      navigateCancel={navigateCancel}
      navigateForward={navigateForward}
    />
  );
};
