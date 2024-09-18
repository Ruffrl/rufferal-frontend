// import React from 'react';
import { ruffwind } from '@rufferal/tailwind';
import {
  horizontalScaleTW,
  moderateScale,
  moderateScaleTW,
} from '@rufferal/utils';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  View,
} from 'react-native';
import { ButtonType, FieldSize, FieldState } from '../types/field-types';

interface Props extends PressableProps {
  loading?: boolean;
  rounded?: boolean;
  size?: FieldSize;
  state?: FieldState;
  text?: string;
  iconRight?: React.JSX.Element;
  iconLeft?: React.JSX.Element;
  type?: ButtonType;
}

const BUTTON_STYLES = ruffwind`
  w-full
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
  size = 'standard',
  state = 'default',
  text = 'Continue',
  iconRight,
  iconLeft,
  type = 'primary',
}: Props) => {
  // Primary && Default theme
  let colorStyle = 'bg-seance-800';
  let textColor = 'text-wildSand-50';
  let height = `h-${moderateScaleTW(56)}`;
  let width = `w-full`;
  let fontStyles = 'font-bodyBold text-b4';
  let shadow = false;

  switch (size) {
    case 'standard-short':
      height = `h-${moderateScaleTW(36)}`;
      fontStyles = 'font-bodyBold text-b3';
      break;
    case 'small':
      width = `w-${horizontalScaleTW(150)}`;
      break;
    case 'small-short':
      width = `w-${horizontalScaleTW(150)}`;
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
        <ActivityIndicator size={moderateScale(36)} color="white" />
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
