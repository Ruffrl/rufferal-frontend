import {
  ROnboardingSlideOne,
  ROnboardingSlideThree,
  ROnboardingSlideTwo,
} from '@rufferal-frontend/store';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import tw from 'twrnc';

export const OnboardingScreen = () => (
  <View style={tw`flex-1`}>
    <Swiper>
      <ROnboardingSlideOne />
      <ROnboardingSlideTwo />
      <ROnboardingSlideThree />
    </Swiper>
  </View>
);
