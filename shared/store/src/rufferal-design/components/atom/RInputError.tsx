import * as React from 'react';
import { FieldError } from 'react-hook-form';
import { Text, TextInputProps } from 'react-native';
import tw from 'twrnc';
import { moderateScaleTW, verticalScaleTW } from '../../utils';

interface Props extends TextInputProps {
  error: FieldError;
}

export const RInputError = ({ error }: Props): React.ReactElement => {
  return (
    <Text
      style={tw`
      text-red-500 
      font-semibold 
      text-${moderateScaleTW(14)} 
      py-${verticalScaleTW(8)}
    `}
    >
      {error.message}
    </Text>
  );
};
