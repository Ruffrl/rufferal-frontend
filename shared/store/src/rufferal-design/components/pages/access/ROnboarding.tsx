import * as React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { ROnboardingButtons } from '../../organism';

type OnboardingProps = {
  swiper: React.ReactElement;
};

export const SWIPER_CONTAINER_STYLES = tw`w-full h-1/2`;
export const SWIPER_IMAGE_STYLES = tw`h-3/5 w-4/5`;

export const ROnboarding = ({ swiper }: OnboardingProps) => {
  return (
    <View style={tw`flex-1`}>
      <Text style={tw`text-3xl font-bold text-center mt-12`}>Rufferal</Text>
      {swiper}
      <ROnboardingButtons />
    </View>
  );
};
