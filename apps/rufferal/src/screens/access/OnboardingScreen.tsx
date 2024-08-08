import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ROnboarding, ScreenProps } from '@rufferal-frontend/store';
import { MobileOnboardingSwiper } from '../../components/MobileOnboardingSwiper';

export const OnboardingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const onSignup = () => navigation.navigate('Signup');
  const onLogin = () => navigation.navigate('Login');
  const onGuest = () => navigation.navigate('Dashboard');

  return (
    <ROnboarding
      swiper={<MobileOnboardingSwiper />}
      navigation={{ onSignup, onLogin, onGuest }}
    />
  );
};
