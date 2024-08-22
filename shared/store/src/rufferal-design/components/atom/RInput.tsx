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
import { GLOBAL_COLORS, GLOBAL_ICON_SIZE, moderateScaleTW } from '../../utils';

export type FieldSize =
  | 'extra-small'
  | 'small'
  | 'medium'
  | 'padded-medium'
  | 'large'
  | 'half'
  | 'full';

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

const CONTAINER_STYLES = tw`
  border 
  border-solid
border-gray-500
  flex-row
  w-full
  justify-center
  items-center
  rounded-${moderateScaleTW(4)}
  h-${moderateScaleTW(48)}
  px-${moderateScaleTW(8)}
`;
const INPUT_STYLES = tw`
  text-gray-500
  h-full
  flex-1
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
  size = 'full',
  ...inputProps
}: Props): React.ReactElement => {
  let sizeStyle = 'w-full';
  switch (size) {
    case 'extra-small':
      sizeStyle = 'w-1/5';
      break;
    case 'small':
      sizeStyle = 'w-2/5';
      break;
    case 'padded-medium':
      sizeStyle = 'w-[45%]';
      break;
    case 'medium':
      sizeStyle = 'w-3/5';
      break;
    case 'large':
      sizeStyle = 'w-4/5';
      break;
    case 'half':
      sizeStyle = 'w-1/2';
      break;
  }

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

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
      style={tw.style(CONTAINER_STYLES, sizeStyle, error && tw`border-red-500`)}
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
        onSubmitEditing={onSubmit}
      />
      {isPassword && showPassword && <IconEyeOpen />}
      {isPassword && !showPassword && <IconEyeClose />}
    </View>
  );
};
