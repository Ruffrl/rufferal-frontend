import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RResetPassword, ScreenProps } from '@rufferal-frontend/store';
import { IconArrowBack, IconClose, IconHide, IconView } from '../../assets';

export const ResetPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateBack = () => navigation.navigate('Login');
  const navigateLogin = () => navigation.navigate('Login');
  const navigateSignup = () => navigation.navigate('Signup');

  return (
    <RResetPassword
      mobileBackIcon={<IconArrowBack />}
      mobileCloseIcon={<IconClose />}
      mobileIconHide={<IconHide />}
      mobileIconView={<IconView />}
      navigateBack={navigateBack}
      navigateLogin={navigateLogin}
      navigateSignup={navigateSignup}
    />
  );
};
