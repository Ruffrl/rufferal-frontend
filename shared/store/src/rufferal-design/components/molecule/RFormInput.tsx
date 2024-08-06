import * as React from 'react';
import { useRef } from 'react';
import { FieldError, RefCallBack } from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import tw from 'twrnc';
import { FieldSize, RInput, RInputError, RLabel } from '../atom';

interface Props extends Omit<TextInputProps, 'onChange'> {
  error?: FieldError | undefined;
  formRef?: RefCallBack;
  label: string;
  labelStyle?: string;
  onSubmit: () => Promise<void>;
  placeholder?: string;
  size?: FieldSize;
  onChange: ((text: string) => void) | undefined;
  // (e: NativeSyntheticEvent<TextInputChangeEventData>) => void) | undefined
}

export const RFormInput = ({
  error,
  formRef,
  label,
  labelStyle,
  onBlur,
  onChange,
  onSubmit,
  placeholder,
  size,
  value,
}: Props): React.ReactElement => {
  const inputRef = formRef || useRef(null);

  return (
    <View style={tw`my-2 w-full`}>
      <RLabel label={label} labelStyle={labelStyle} />
      <RInput
        inputRef={inputRef}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder || label}
        size={size}
        value={value}
        onSubmit={onSubmit}
      />
      {error && <RInputError error={error} />}
    </View>
  );
};
