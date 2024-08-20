import * as React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import {
  horizontalScaleTW,
  moderateScaleTW,
  verticalScaleTW,
} from '../../../utils';
import { ROnboardingButtons } from '../../organism';
import { RAccessTemplate } from '../../templates';

export type OnboardingNavigationProps = {
  navigateSignup: () => void;
  navigateLogin: () => void;
  navigateGuest: () => void;
};

type OnboardingProps = {
  swiper: React.ReactElement;
  navigation: OnboardingNavigationProps;
};

export const SWIPER_CONTAINER_STYLES = tw`
  flex-none
  items-center
  justify-center
  w-full
  h-${verticalScaleTW(350)}
  mt-${verticalScaleTW(44)}
`;
export const SWIPER_STYLES = tw`w-${horizontalScaleTW(225)}`;
export const SWIPER_SLIDE_STYLE = tw`w-${horizontalScaleTW(225)}`;
export const SWIPER_IMAGE_STYLES = tw`
  h-${verticalScaleTW(225)}
  w-${horizontalScaleTW(225)}
`;
export const SWIPER_TEXT_STYLES = tw`
  text-center
  font-semibold
  mt-${moderateScaleTW(24)}
  text-${moderateScaleTW(12)}
`;
export const SWIPER_NAVIGATION_STYLES = tw`
  text-gray-500 
  font-semibold
  text-${moderateScaleTW(14)}
`;

export const ROnboarding = ({ swiper, navigation }: OnboardingProps) => {
  return (
    <RAccessTemplate>
      <Text
        style={tw.style(
          `text-center
          font-bold
          text-gray-600
          text-${moderateScaleTW(48)}
          mt-${verticalScaleTW(96)}`
        )}
      >
        Rufferal
      </Text>
      <View style={tw.style(SWIPER_CONTAINER_STYLES)}>{swiper}</View>
      <ROnboardingButtons {...navigation} />
      {/* <View style={tw`justify-between h-full`}></View> */}
    </RAccessTemplate>
  );
};
