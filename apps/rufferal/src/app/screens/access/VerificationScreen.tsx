import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RVerification, ScreenProps } from '@rufferal-frontend/store';
import { IconArrowBack, IconClose } from '../../assets';

export const VerificationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Signup');
  const navigateLogin = () => navigation.navigate('Login');
  const navigateCreateProfile = () =>
    navigation.navigate('Create Profile Name');

  return (
    <RVerification
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      navigateBack={navigateBack}
      navigateCreateProfile={navigateCreateProfile}
      navigateLogin={navigateLogin}
    />
  );
};
