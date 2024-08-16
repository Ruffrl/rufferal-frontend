import * as React from 'react';
import { Text, TextInputProps, View } from 'react-native';
import tw from 'twrnc';

interface Props extends TextInputProps {
  label: string;
  labelStyle?: string;
}

/* 
font-feature-settings: 'calt' off;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: -0.28px;
*/
const LABEL_STYLES = 'text-sm text-gray-500 font-bold py-[5px]';

export const RLabel = ({ label, labelStyle }: Props): React.ReactElement => {
  return (
    <View>
      <Text style={tw.style(LABEL_STYLES, labelStyle)}>{label}</Text>
    </View>
  );
};
