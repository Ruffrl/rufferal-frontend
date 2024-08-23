import * as React from 'react';
import tw from 'twrnc';

import { useState } from 'react';
import { FieldError, RefCallBack } from 'react-hook-form';
import {
  Image,
  Pressable,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {
  GLOBAL_COLORS,
  GLOBAL_ICON_SIZE,
  horizontalScaleTW,
  moderateScaleTW,
} from '../../utils';

export type FieldSize =
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'half'
  | 'fit';
// | 'extra-small'
// | 'small'
// | 'medium'
// | 'padded-medium'
// | 'large'
// | 'half'
// | 'full';

interface Props extends Omit<TextInputProps, 'onChange'> {
  error?: FieldError | undefined;
  inputRef?: RefCallBack | React.MutableRefObject<null>;
  isPassword?: boolean;
  mobileIconHide?: React.JSX.Element;
  mobileIconView?: React.JSX.Element;
  onChange: ((text: string) => void) | undefined;
  onSubmit?: () => void;
  size?: FieldSize;
}

export const CONTAINER_STYLES = tw`
  border-solid
  border-gray-500
  flex-row
  w-full
  justify-center
  items-center
  border-${moderateScaleTW(1)}
  rounded-${moderateScaleTW(4)}
  h-${moderateScaleTW(48)}
  px-${moderateScaleTW(8)}
`;
export const FOCUSED_CONTAINER_STYLES = tw`
  border-zinc-900
  border-${moderateScaleTW(2)}
`;
export const ERROR_CONTAINER_STYLES = tw`
  border-red-500
  border-${moderateScaleTW(2)}
`;
export const INPUT_STYLES = tw`
  text-gray-500
  h-full
  w-full
  border-0
  text-${moderateScaleTW(16)}
`;

export const RInput = ({
  error,
  inputRef,
  isPassword = false,
  mobileIconView,
  mobileIconHide,
  onChange,
  onSubmit,
  size = 'fit',
  ...inputProps
}: Props): React.ReactElement => {
  /* STATE */
  // track container is focused
  const [focused, setFocused] = useState(false);
  // track password visibility
  const [showPassword, setShowPassword] = useState(false);

  let sizeStyle = 'w-full';
  switch (size) {
    case 'extra-small':
      sizeStyle = `w-${horizontalScaleTW(85)}`;
      break;
    case 'small':
      sizeStyle = `w-${horizontalScaleTW(114)}`;
      break;
    case 'medium':
      sizeStyle = `w-${horizontalScaleTW(171)}`;
      break;
    case 'large':
      sizeStyle = `w-${horizontalScaleTW(343)}`;
      break;
    case 'half':
      sizeStyle = `w-1/2`;
      break;
  }

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const IconEyeOpen = () => {
    return (
      <Pressable onPress={toggleShowPassword}>
        {mobileIconView || (
          <Image
            source={require('../../../assets/icons-512/eye.png')}
            resizeMode="contain"
            style={tw.style(GLOBAL_ICON_SIZE)}
            tintColor={GLOBAL_COLORS.primary.hex}
          />
        )}
      </Pressable>
    );
  };

  const IconEyeClose = () => {
    return (
      <Pressable onPress={toggleShowPassword}>
        {mobileIconHide || (
          <Image
            source={require('../../../assets/icons-512/eye-close.png')}
            resizeMode="contain"
            style={tw.style(GLOBAL_ICON_SIZE)}
            tintColor={GLOBAL_COLORS.primary.hex}
          />
        )}
      </Pressable>
    );
  };

  return (
    <View
      accessible={true}
      style={tw.style(
        CONTAINER_STYLES,
        sizeStyle,
        error && ERROR_CONTAINER_STYLES,
        focused && FOCUSED_CONTAINER_STYLES
      )}
    >
      <TextInput
        {...inputProps}
        // Set secureTextEntry prop to hide
        //password when showPassword is false
        secureTextEntry={isPassword && !showPassword}
        autoCapitalize="none"
        ref={inputRef}
        onChangeText={onChange}
        placeholderTextColor={GLOBAL_COLORS.disabled.hex}
        style={tw.style(INPUT_STYLES, { outlineStyle: 'none' })}
        onFocus={() => setFocused((prev) => !prev)}
        onBlur={() => setFocused((prev) => !prev)}
        onSubmitEditing={onSubmit}
      />
      {isPassword && showPassword && <IconEyeOpen />}
      {isPassword && !showPassword && <IconEyeClose />}
    </View>
  );
};
