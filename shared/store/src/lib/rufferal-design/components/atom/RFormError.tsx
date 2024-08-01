import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export interface FormErrorProps {
  error: string;
}

export const RFormError = ({ error }: FormErrorProps): React.ReactElement => {
  return <Text style={styles.textError}>{error}</Text>;
};

const styles = StyleSheet.create({
  textError: {
    color: '#fc6d47',
    fontSize: 14,
    paddingVertical: 10,
  },
});
