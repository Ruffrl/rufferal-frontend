import {
  ROnboardingSlideOne,
  ROnboardingSlideThree,
  ROnboardingSlideTwo,
} from '@rufferal-frontend/store';
import Swiper from 'react-native-swiper';

export const MobileOnboarding = () => (
  <Swiper>
    <ROnboardingSlideOne />
    <ROnboardingSlideTwo />
    <ROnboardingSlideThree />
  </Swiper>
);
