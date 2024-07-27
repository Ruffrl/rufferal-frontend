import * as React from 'react';
import { FieldError } from 'react-hook-form';
import { StyleSheet, Text, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  error: FieldError;
}

export const RInputError = ({ error }: Props): React.JSX.Element => {
  return <Text style={styles.textError}>{error.message}</Text>;
};

const styles = StyleSheet.create({
  textError: {
    color: '#fc6d47',
    fontSize: 14,
  },
});
