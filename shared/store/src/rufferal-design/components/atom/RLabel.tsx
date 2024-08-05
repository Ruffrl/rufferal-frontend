import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

interface Props extends TextInputProps {
  label: string;
  labelStyle?: TextStyle;
}

export const RLabel = ({ label, labelStyle }: Props): React.ReactElement => {
  return (
    <View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#c0cbd3',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});
