import * as React from 'react';
import { FieldError, RefCallBack } from 'react-hook-form';
import {
  DimensionValue,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';

export type ViewWidth = {
  width: DimensionValue;
};

export type FieldSize = 'small' | 'medium' | 'large';

interface Props extends Omit<TextInputProps, 'onChange'> {
  error?: FieldError | undefined;
  inputRef?: RefCallBack | React.MutableRefObject<null>;
  size?: FieldSize;
  onSubmit?: () => void;
  onChange: ((text: string) => void) | undefined;
}

export const RInput = ({
  error,
  inputRef,
  onChange,
  onSubmit,
  size = 'large',
  ...inputProps
}: Props): React.ReactElement => {
  const borderStyle = { borderColor: error ? '#fc6d47' : '#c0cbd3' };
  let sizeStyle: ViewWidth = { width: '40%' };
  switch (size) {
    case 'medium':
      sizeStyle = { width: '60%' };
      break;
    case 'large':
      sizeStyle = { width: '100%' };
      break;
  }

  return (
    <TextInput
      {...inputProps}
      autoCapitalize="none"
      ref={inputRef}
      onChangeText={onChange}
      style={[styles.input, borderStyle, sizeStyle]}
      onSubmitEditing={onSubmit}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingLeft: 5,
    fontSize: 16,
    height: 40,
    color: '#c0cbd3',
  },
});
