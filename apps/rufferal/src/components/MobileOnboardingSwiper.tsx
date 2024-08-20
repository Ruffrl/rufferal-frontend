import {
  moderateScaleTW,
  ROnboardingSlideOne,
  ROnboardingSlideThree,
  ROnboardingSlideTwo,
  SWIPER_IMAGE_STYLES,
  SWIPER_NAVIGATION_STYLES,
  SWIPER_STYLES,
} from '@rufferal-frontend/store';
import { Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import tw from 'twrnc';

export const MobileOnboardingSwiper = () => {
  const AndroidImageOne = (
    <Image
      style={SWIPER_IMAGE_STYLES}
      source={require('../../android/app/src/main/res/pikisuperstar/onboarding-community/onboarding-community.jpg')}
      resizeMode="contain"
    />
  );
  const AndroidImageTwo = (
    <Image
      style={SWIPER_IMAGE_STYLES}
      source={require('../../android/app/src/main/res/pikisuperstar/onboarding-booking/onboarding-booking.jpg')}
      resizeMode="contain"
    />
  );
  const AndroidImageThree = (
    <Image
      style={SWIPER_IMAGE_STYLES}
      source={require('../../android/app/src/main/res/pikisuperstar/onboarding-messaging/onboarding-messaging.jpg')}
      resizeMode="contain"
    />
  );

  return (
    <Swiper
      loop={false}
      showsPagination
      containerStyle={SWIPER_STYLES}
      showsButtons={true}
      buttonWrapperStyle={tw`items-end pb-${moderateScaleTW(24)}`}
      nextButton={<Text style={SWIPER_NAVIGATION_STYLES}>Next</Text>}
      prevButton={<Text style={SWIPER_NAVIGATION_STYLES}>Prev</Text>}
      activeDotStyle={tw`bg-gray-600`}
      dotStyle={tw`bg-gray-300`}
    >
      <ROnboardingSlideOne image={AndroidImageOne} />
      <ROnboardingSlideTwo image={AndroidImageTwo} />
      <ROnboardingSlideThree image={AndroidImageThree} />
    </Swiper>
  );
};
