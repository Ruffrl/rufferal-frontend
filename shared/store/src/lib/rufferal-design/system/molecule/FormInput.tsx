import * as React from 'react';
import { useRef } from 'react';
import { FieldError, RefCallBack } from 'react-hook-form';
import { StyleSheet, TextInputProps, TextStyle, View } from 'react-native';
import { FieldSize, RInput, RInputError, RLabel } from '../atom';

interface Props extends TextInputProps {
  error?: FieldError | undefined;
  formRef?: RefCallBack;
  label: string;
  labelStyle?: TextStyle;
  onSubmit: () => Promise<void>;
  placeholder?: string;
  size?: FieldSize;
}

export const FormInput = ({
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
}: Props): React.JSX.Element => {
  const inputRef = formRef || useRef(null);

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
  },
});
