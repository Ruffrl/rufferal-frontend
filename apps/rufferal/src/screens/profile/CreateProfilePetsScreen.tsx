import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  RCreateProfilePets,
  ScreenProps,
  SWIPER_IMAGE_STYLES,
} from '@rufferal-frontend/store';
import { Image } from 'react-native';
import { IconArrowBack, IconClose } from '../../assets';

export const CreateProfilePetsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Create Profile Type');
  const navigateForward = () => navigation.navigate('Manage Pets');
  const navigateDashboard = () => navigation.navigate('Dashboard');

  const MobilePetsImage = () => (
    <Image
      source={require('../../../android/app/src/main/res/pikisuperstar/profile-creation-pets/different-pets.jpg')}
      resizeMode="cover"
      style={SWIPER_IMAGE_STYLES}
    />
  );

  return (
    <RCreateProfilePets
      mobilePetsImage={<MobilePetsImage />}
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      navigateBack={navigateBack}
      navigateDashboard={navigateDashboard}
      navigateForward={navigateForward}
    />
  );
};
