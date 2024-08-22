import { View } from 'react-native';
import Swiper from 'react-native-web-swiper';
import tw from 'twrnc';
import {
  ROnboardingSlideOne,
  ROnboardingSlideThree,
  ROnboardingSlideTwo,
} from '..';

export const ROnboardingWeb = () => (
  <View style={tw`flex-1`}>
    <Swiper>
      <ROnboardingSlideOne />
      <ROnboardingSlideTwo />
      <ROnboardingSlideThree />
    </Swiper>
  </View>
);
