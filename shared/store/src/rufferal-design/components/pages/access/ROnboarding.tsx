import * as React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { ROnboardingButtons } from '../../organism';

type OnboardingProps = {
  swiper: React.ReactElement;
};

export const ROnboarding = ({ swiper }: OnboardingProps) => {
  return (
    <View style={tw`flex-1`}>
      <Text>Rufferal</Text>
      {swiper}
      <ROnboardingButtons />
    </View>
  );
};
