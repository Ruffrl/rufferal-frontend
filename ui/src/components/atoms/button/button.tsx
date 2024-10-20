// import React from 'react';
import { ruffwind } from '@rufferal/tailwind';
import { ButtonProps } from '@rufferal/types';
import {
  horizontalScaleTW,
  moderateScale,
  moderateScaleTW,
} from '@rufferal/utils';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

const BUTTON_STYLES = ruffwind`
  justify-center 
  items-center 
`;
const BUTTON_TEXT_STYLES = ruffwind`
  text-center
`;

export const Button = ({
  loading,
  onPress,
  rounded = true,
  size = 'default',
  state = 'default',
  text = 'Continue',
  iconRight,
  iconLeft,
  type = 'primary',
}: ButtonProps) => {
  // Primary && Default theme
  let colorStyle = 'bg-seance-800';
  let textColor = 'text-wildSand-50';
  let height = `h-${moderateScaleTW(56)}`;
  let width = `w-full`;
  let fontStyles = 'font-bodyBold text-b4';
  let shadow = false;
  let loadingColor = 'white';

  switch (size) {
    case 'xsmall':
      width = `w-${horizontalScaleTW(150)}`;
      height = `h-${moderateScaleTW(36)}`;
      fontStyles = 'font-bodyBold text-b3';
      break;
    case 'small':
      width = `w-${horizontalScaleTW(150)}`;
      break;
    case 'medium':
      height = `h-${moderateScaleTW(36)}`;
      fontStyles = 'font-bodyBold text-b3';
      break;
  }

  // Manage type themes
  if (type === 'secondary') {
    colorStyle = 'bg-electricViolet-100';
    textColor = 'text-seance-800';
  } else if (type === 'transparent') {
    colorStyle = 'bg-transparent';
    textColor = 'text-electricViolet-700';
    loadingColor = '#9525CB';
  } else if (type === 'socialBlack') {
    shadow = true;
    colorStyle = 'bg-black';
    textColor = 'text-white';
    fontStyles = 'font-bodyMedium text-[0.938rem] leading-[1.119rem]';
  } else if (type === 'socialWhite') {
    shadow = true;
    colorStyle = 'bg-white';
    textColor = 'text-[#0000008a]';
    fontStyles = 'font-bodyMedium text-[0.938rem] leading-[1.119rem]';
    loadingColor = 'black';
  }

  // Manage state themes
  if (state === 'errored') {
    colorStyle = 'bg-red-600';
    textColor = 'text-red-900';
  } else if (state === 'disabled') {
    colorStyle = 'bg-iron-200';
    textColor = 'text-iron-500';
  }

  return (
    <Pressable
      style={[
        shadow && {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 1,
        },
        ruffwind.style(
          BUTTON_STYLES,
          colorStyle,
          height,
          width,
          rounded && `rounded-${moderateScaleTW(30)}`
        ),
      ]}
      onPress={onPress}
      disabled={state === 'disabled'}
    >
      {loading ? (
        <ActivityIndicator size={moderateScale(36)} color={loadingColor} />
      ) : (
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
          <Text
            style={ruffwind.style(BUTTON_TEXT_STYLES, fontStyles, textColor)}
          >
            {text}
          </Text>
          {iconRight && iconRight}
        </View>
      )}
    </Pressable>
  );
};
