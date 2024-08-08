import {
  ROnboardingSlideOne,
  ROnboardingSlideThree,
  ROnboardingSlideTwo,
  SWIPER_CONTAINER_STYLES,
} from '@rufferal-frontend/store';
import Swiper from 'react-native-web-swiper';

export const WebOnboarding = () => {
  return (
    <Swiper containerStyle={SWIPER_CONTAINER_STYLES}>
      <ROnboardingSlideOne />
      <ROnboardingSlideTwo />
      <ROnboardingSlideThree />
    </Swiper>
  );
};
