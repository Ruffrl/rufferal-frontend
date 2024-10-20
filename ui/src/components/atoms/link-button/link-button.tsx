// import React from 'react';
import { ruffwind } from '@rufferal/tailwind';
import { LinkButtonProps } from '@rufferal/types';
import { horizontalScaleTW, moderateScaleTW } from '@rufferal/utils';
import { Pressable, Text, View } from 'react-native';

export const LinkButton = ({
  containerStyles = `items-center`,
  iconLeft,
  iconRight,
  onPress,
  state = 'default',
  text = 'Continue',
  textStyles = `font-bodySemibold text-b3 text-saltBox-700`,
  underlineStyles = `border-b-saltBox-700 border-b-${moderateScaleTW(1)}`,
}: LinkButtonProps) => {
  // Manage state themes
  if (state === 'errored') {
    textStyles = 'text-red-900';
  } else if (state === 'disabled') {
    textStyles = 'text-iron-500';
  }

  return (
    <Pressable
      style={ruffwind.style(containerStyles)}
      onPress={onPress}
      disabled={state === 'disabled'}
    >
      <View
        style={ruffwind`
          w-full
          flex-row
          items-center
          justify-center
          gap-${horizontalScaleTW(4)}
        `}
      >
        {iconLeft && iconLeft}
        <Text style={ruffwind.style(textStyles, underlineStyles)}>{text}</Text>
        {iconRight && iconRight}
      </View>
    </Pressable>
  );
};
