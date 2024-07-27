import * as React from 'react';
import { useRef } from 'react';
import { FieldError } from 'react-hook-form';
import { StyleSheet, TextInputProps, TextStyle, View } from 'react-native';
import { FieldSize, RInput, RInputError, RLabel } from '../atom';

interface Props extends TextInputProps {
  error?: FieldError | undefined;
  label: string;
  labelStyle?: TextStyle;
  size?: FieldSize;
}

export const RFormInput = (props: Props): React.JSX.Element => {
  const { label, labelStyle, size, error } = props;
  const inputRef = useRef(null);

  return (
    <View style={styles.container}>
      <RLabel label={label} labelStyle={labelStyle} />
      <RInput inputRef={inputRef} size={size} />
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
