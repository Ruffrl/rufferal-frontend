import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ROnboarding, ScreenProps } from '@rufferal-frontend/store';
import { MobileOnboardingSwiper } from '../../components/MobileOnboardingSwiper';

export const OnboardingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateSignup = () => navigation.navigate('Signup');
  const navigateLogin = () => navigation.navigate('Login');
  const navigateGuest = () => navigation.navigate('Dashboard');

  return (
    <ROnboarding
      swiper={<MobileOnboardingSwiper />}
      navigation={{ navigateSignup, navigateLogin, navigateGuest }}
    />
  );
};
