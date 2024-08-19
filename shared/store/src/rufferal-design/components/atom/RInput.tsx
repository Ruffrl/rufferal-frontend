import * as React from 'react';
import { useState } from 'react';
import { FieldError, RefCallBack } from 'react-hook-form';
import {
  Image,
  Pressable,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import tw from 'twrnc';

export type FieldSize = 'small' | 'medium' | 'large';

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

const CONTAINER_STYLES =
  'border border-solid border-gray-500 rounded h-12 flex-row w-full justify-center items-center px-2';
const INPUT_STYLES = 'text-base text-gray-500 h-full flex-1 px-0';

export const RInput = ({
  error,
  inputRef,
  isPassword = false,
  mobileIconView,
  mobileIconHide,
  onChange,
  onSubmit,
  size = 'large',
  ...inputProps
}: Props): React.ReactElement => {
  const borderStyle = error && 'border-red-800';

  let sizeStyle = 'w-2/5';
  switch (size) {
    case 'medium':
      sizeStyle = 'w-3/5';
      break;
    case 'large':
      sizeStyle = 'w-full';
      break;
  }

  // State variable to hold the password
  // const [password, setPassword] = useState('');

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
            source={require('../../../assets/icons-16/eye.png')}
            resizeMode="contain"
            style={tw`w-[24px] h-[24px]`}
            tintColor="#6b7280"
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
            source={require('../../../assets/icons-16/eye-close.png')}
            resizeMode="contain"
            style={tw`w-[24px] h-[24px]`}
            tintColor="#6b7280"
          />
        )}
      </Pressable>
    );
  };

  return (
    <View style={tw.style(CONTAINER_STYLES, borderStyle, sizeStyle)}>
      <TextInput
        {...inputProps}
        // Set secureTextEntry prop to hide
        //password when showPassword is false
        secureTextEntry={isPassword && !showPassword}
        autoCapitalize="none"
        ref={inputRef}
        onChangeText={onChange}
        placeholderTextColor="#d4d4d8"
        style={tw.style(INPUT_STYLES, { outlineStyle: 'none' })}
        onSubmitEditing={onSubmit}
      />
      {isPassword && showPassword && <IconEyeOpen />}
      {isPassword && !showPassword && <IconEyeClose />}
    </View>
  );
};
