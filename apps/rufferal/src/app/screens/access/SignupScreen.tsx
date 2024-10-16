import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RSignup, ScreenProps } from '@rufferal-frontend/store';
import {
  IconApple,
  IconArrowBack,
  IconClose,
  IconGoogle,
  IconHide,
  IconView,
} from '../../assets';

export const SignupScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  // Service agreement and privacy policy
  const navigateAbout = () => navigation.navigate('About');
  const navigateBack = () => navigation.navigate('Onboarding');
  const navigateLogin = () => navigation.navigate('Login');
  const navigateVerification = () => navigation.navigate('Verification');

  return (
    <RSignup
      appleIcon={<IconApple />}
      googleIcon={<IconGoogle />}
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      mobileIconHide={<IconHide />}
      mobileIconView={<IconView />}
      navigateAbout={navigateAbout}
      navigateBack={navigateBack}
      navigateLogin={navigateLogin}
      navigateVerification={navigateVerification}
    />
  );
};
