import * as React from 'react';
import { Text } from 'react-native';
import tw from 'twrnc';

export interface FormErrorProps {
  error: string;
}

export const RFormError = ({ error }: FormErrorProps): React.ReactElement => {
  return (
    <Text style={tw`text-red-600 font-semibold text-sm py-2`}>{error}</Text>
  );
};
