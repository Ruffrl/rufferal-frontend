import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RLogin, ScreenProps } from '@rufferal-frontend/store';

export const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateSignup = () => navigation.navigate('Signup');
  const navigateForgotPassword = () => navigation.navigate('Forgot Password');

  return (
    <RLogin
      navigateSignup={navigateSignup}
      navigateForgotPassword={navigateForgotPassword}
    />
  );
};
