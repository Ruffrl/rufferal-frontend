import * as React from 'react';
import { FieldError, RefCallBack } from 'react-hook-form';
import { TextInput, TextInputProps } from 'react-native';
import tw from 'twrnc';

export type FieldSize = 'small' | 'medium' | 'large';

interface Props extends Omit<TextInputProps, 'onChange'> {
  error?: FieldError | undefined;
  inputRef?: RefCallBack | React.MutableRefObject<null>;
  size?: FieldSize;
  onSubmit?: () => void;
  onChange: ((text: string) => void) | undefined;
}

const INPUT_STYLES =
  'border border-solid rounded px-1 py-1 text-base h-10 text-black';

export const RInput = ({
  error,
  inputRef,
  onChange,
  onSubmit,
  size = 'large',
  ...inputProps
}: Props): React.ReactElement => {
  const borderStyle = error ? 'border-[#fc6d47]' : 'border-[#c0cbd3]';
  let sizeStyle = 'w-2/5';
  switch (size) {
    case 'medium':
      sizeStyle = 'w-3/5';
      break;
    case 'large':
      sizeStyle = 'w-full';
      break;
  }

  return (
    <TextInput
      {...inputProps}
      autoCapitalize="none"
      ref={inputRef}
      onChangeText={onChange}
      style={tw.style(INPUT_STYLES, borderStyle, sizeStyle)}
      onSubmitEditing={onSubmit}
    />
  );
};
