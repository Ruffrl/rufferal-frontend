import * as React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import tw from 'twrnc';
import { moderateScaleTW, verticalScaleTW } from '../../utils';

interface Props extends TextInputProps {
  label: string;
  labelStyle?: string;
}

const LABEL_STYLES = tw`
  text-gray-500
  text-${moderateScaleTW(14)}
  py-${verticalScaleTW(4)}
`;

export const RLabel = ({ label, labelStyle }: Props): React.ReactElement => {
  return (
    <View>
      <Text style={tw.style(LABEL_STYLES, labelStyle)}>{label}</Text>
    </View>
  );
};
