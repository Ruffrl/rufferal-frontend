import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RSignup, ScreenProps } from '@rufferal-frontend/store';

export const SignupScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateLogin = () => navigation.navigate('Login');
  // Service agreement and privacy policy
  const navigateAbout = () => navigation.navigate('About');

  return (
    <RSignup navigateLogin={navigateLogin} navigateAbout={navigateAbout} />
  );
};
