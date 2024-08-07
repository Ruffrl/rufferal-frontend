import {
  ROnboardingSlideOne,
  ROnboardingSlideThree,
  ROnboardingSlideTwo,
} from '@rufferal-frontend/store';
import Swiper from 'react-native-web-swiper';

export const WebOnboarding = () => {
  return (
    <Swiper>
      <ROnboardingSlideOne />
      <ROnboardingSlideTwo />
      <ROnboardingSlideThree />
    </Swiper>
  );
};
