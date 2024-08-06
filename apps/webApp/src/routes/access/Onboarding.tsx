import {
  ROnboardingSlideOne,
  ROnboardingSlideThree,
  ROnboardingSlideTwo,
} from '@rufferal-frontend/store';
import { View } from 'react-native';
import Swiper from 'react-native-web-swiper';
import tw from 'twrnc';

export const Onboarding = () => (
  <View style={tw`flex-1`}>
    <Swiper>
      <ROnboardingSlideOne />
      <ROnboardingSlideTwo />
      <ROnboardingSlideThree />
    </Swiper>
  </View>
);
