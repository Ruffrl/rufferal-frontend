import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RForgotPassword, ScreenProps } from '@rufferal-frontend/store';
import { IconArrowBack, IconClose } from '../../assets';

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  // Service agreement and privacy policy
  const navigateBack = () => navigation.navigate('Login');
  // const navigateLogin = () => navigation.navigate('Login');
  const navigateResetPassword = () => navigation.navigate('Reset Password');

  return (
    <RForgotPassword
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      navigateBack={navigateBack}
      // navigateLogin={navigateLogin}
      navigateResetPassword={navigateResetPassword}
    />
  );
};
