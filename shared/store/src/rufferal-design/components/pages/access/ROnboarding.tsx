import * as React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { ROnboardingButtons } from '../../organism';

export type OnboardingNavigationProps = {
  onSignup: () => void;
  onLogin: () => void;
  onGuest: () => void;
};

type OnboardingProps = {
  swiper: React.ReactElement;
  navigation: OnboardingNavigationProps;
};

export const SWIPER_CONTAINER_STYLES = tw`w-4/5 items-center justify-center flex`;
export const SWIPER_SLIDE_STYLE = 'flex-1 justify-start items-center';
export const SWIPER_IMAGE_STYLES = tw`h-3/5 w-full`;
export const SWIPER_ANDROID_IMAGE_STYLES = tw`h-3/5 w-3/5`;

export const ROnboarding = ({ swiper, navigation }: OnboardingProps) => {
  return (
    <View style={tw`flex-1 pt-16 pb-8 px-2`}>
      <Text style={tw`text-3xl font-bold text-gray-600 text-center`}>
        Rufferal
      </Text>
      <View style={tw`flex-none w-full h-3/5 items-center my-6`}>{swiper}</View>
      <ROnboardingButtons {...navigation} />
    </View>
  );
};
