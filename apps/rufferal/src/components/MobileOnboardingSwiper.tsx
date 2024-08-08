import {
  ROnboardingSlideOne,
  ROnboardingSlideThree,
  ROnboardingSlideTwo,
  SWIPER_ANDROID_IMAGE_STYLES,
  SWIPER_CONTAINER_STYLES,
} from '@rufferal-frontend/store';
import { Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import tw from 'twrnc';

export const MobileOnboardingSwiper = () => {
  const AndroidImageOne = (
    <Image
      style={SWIPER_ANDROID_IMAGE_STYLES}
      source={require('../../android/app/src/main/res/pikisuperstar/onboarding-community/onboarding-community.jpg')}
    />
  );
  const AndroidImageTwo = (
    <Image
      style={SWIPER_ANDROID_IMAGE_STYLES}
      source={require('../../android/app/src/main/res/pikisuperstar/onboarding-booking/onboarding-booking.jpg')}
    />
  );
  const AndroidImageThree = (
    <Image
      style={SWIPER_ANDROID_IMAGE_STYLES}
      source={require('../../android/app/src/main/res/pikisuperstar/onboarding-messaging/onboarding-messaging.jpg')}
    />
  );

  return (
    <Swiper
      loop={false}
      showsPagination
      containerStyle={SWIPER_CONTAINER_STYLES}
      showsButtons={true}
      buttonWrapperStyle={tw`items-end pb-6 text-pink-500`}
      nextButton={<Text style={tw`text-gray-600 font-semibold`}>Next</Text>}
      prevButton={<Text style={tw`text-gray-600 font-semibold`}>Prev</Text>}
      activeDotStyle={tw`bg-gray-600`}
      dotStyle={tw`bg-gray-300`}
    >
      <ROnboardingSlideOne image={AndroidImageOne} />
      <ROnboardingSlideTwo image={AndroidImageTwo} />
      <ROnboardingSlideThree image={AndroidImageThree} />
    </Swiper>
  );
};
