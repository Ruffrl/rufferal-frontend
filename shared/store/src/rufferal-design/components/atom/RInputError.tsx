import * as React from 'react';
import { FieldError } from 'react-hook-form';
import { Text, TextInputProps } from 'react-native';
import tw from 'twrnc';

interface Props extends TextInputProps {
  error: FieldError;
}

export const RInputError = ({ error }: Props): React.ReactElement => {
  return (
    <Text style={tw`text-red-600 font-semibold text-sm py-2`}>
      {error.message}
    </Text>
  );
};
