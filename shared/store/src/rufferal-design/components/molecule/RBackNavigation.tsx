import * as React from 'react';
import tw from 'twrnc';

import { Image, Pressable, Text, View } from 'react-native';
import {
  GLOBAL_COLORS,
  GLOBAL_ICON_SIZE,
  GLOBAL_MIN_PRESS_HEIGHT,
  GLOBAL_MIN_PRESS_SIZE,
  moderateScaleTW,
} from '../../utils';

export const RBackNavigation = ({
  backNavigation,
  mobileBackIcon,
  navigationHeader,
}: {
  backNavigation: () => void;
  mobileBackIcon?: React.JSX.Element;
  navigationHeader?: string;
}) => {
  return (
    <View
      style={tw.style(GLOBAL_MIN_PRESS_HEIGHT, tw`items-center justify-center`)}
    >
      <View style={tw`absolute top-0 left-0`}>
        <Pressable
          style={tw.style(GLOBAL_MIN_PRESS_SIZE, tw`justify-center`)}
          onPress={backNavigation}
        >
          {mobileBackIcon || (
            <Image
              source={require('../../../assets/icons-512/arrow-left.png')}
              resizeMode="contain"
              style={tw.style(GLOBAL_ICON_SIZE)}
              tintColor={GLOBAL_COLORS.quaternary.hex}
            />
          )}
        </Pressable>
      </View>
      {navigationHeader && (
        <Text
          style={tw`text-gray-500 text-${moderateScaleTW(16)} font-semibold`}
        >
          {navigationHeader}
        </Text>
      )}
    </View>
  );
};
