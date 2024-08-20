import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RLogin, ScreenProps } from '@rufferal-frontend/store';
import {
  IconApple,
  IconArrowBack,
  IconClose,
  IconGoogle,
  IconHide,
  IconView,
} from '../../assets';

export const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Onboarding');
  const navigateSignup = () => navigation.navigate('Signup');
  const navigateForgotPassword = () => navigation.navigate('Forgot Password');

  return (
    <RLogin
      appleIcon={<IconApple />}
      googleIcon={<IconGoogle />}
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      mobileIconHide={<IconHide />}
      mobileIconView={<IconView />}
      navigateBack={navigateBack}
      navigateForgotPassword={navigateForgotPassword}
      navigateSignup={navigateSignup}
    />
  );
};
