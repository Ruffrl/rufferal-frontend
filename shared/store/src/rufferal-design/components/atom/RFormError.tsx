import * as React from 'react';
import { Text } from 'react-native';
import tw from 'twrnc';
import { moderateScaleTW, verticalScaleTW } from '../../utils';

export interface FormErrorProps {
  error: string;
}

export const RFormError = ({ error }: FormErrorProps): React.ReactElement => {
  return (
    <Text
      style={tw`
        text-red-500 
        font-semibold 
        text-${moderateScaleTW(14)} 
        py-${verticalScaleTW(8)}
      `}
    >
      {error}
    </Text>
  );
};
