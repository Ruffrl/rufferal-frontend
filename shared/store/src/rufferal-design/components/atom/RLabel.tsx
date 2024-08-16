import * as React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import tw from 'twrnc';

interface Props extends TextInputProps {
  label: string;
  labelStyle?: string;
}

const LABEL_STYLES = 'text-sm text-gray-500 font-bold py-[5px]';

export const RLabel = ({ label, labelStyle }: Props): React.ReactElement => {
  return (
    <View>
      <Text style={tw.style(LABEL_STYLES, labelStyle)}>{label}</Text>
    </View>
  );
};
