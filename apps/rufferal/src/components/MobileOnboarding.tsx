import {
  ROnboardingSlideOne,
  ROnboardingSlideThree,
  ROnboardingSlideTwo,
  SWIPER_CONTAINER_STYLES,
  SWIPER_IMAGE_STYLES,
} from '@rufferal-frontend/store';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';

export const MobileOnboarding = () => {
  const AndroidImageOne = (
    <Image
      style={SWIPER_IMAGE_STYLES}
      source={require('../../android/app/src/main/res/pikisuperstar/onboarding-community/onboarding-community.jpg')}
    />
  );
  const AndroidImageTwo = (
    <Image
      style={SWIPER_IMAGE_STYLES}
      source={require('../../android/app/src/main/res/pikisuperstar/onboarding-booking/onboarding-booking.jpg')}
    />
  );
  const AndroidImageThree = (
    <Image
      style={SWIPER_IMAGE_STYLES}
      source={require('../../android/app/src/main/res/pikisuperstar/onboarding-messaging/onboarding-messaging.jpg')}
    />
  );

  return (
    <Swiper
      loop={false}
      showsPagination
      containerStyle={SWIPER_CONTAINER_STYLES}
    >
      <ROnboardingSlideOne image={AndroidImageOne} />
      <ROnboardingSlideTwo image={AndroidImageTwo} />
      <ROnboardingSlideThree image={AndroidImageThree} />
    </Swiper>
  );
};
