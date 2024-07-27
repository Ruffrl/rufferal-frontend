import * as React from 'react';
import { FieldError } from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import { RButton, RFormInput } from '..';

interface LogInProps extends TextInputProps {
  error?: FieldError | undefined;
  name?: string;
}

export const RLogInForm = ({ error }: LogInProps): React.JSX.Element => {
  return (
    <View style={{ width: '100%' }}>
      <RFormInput label="Email" error={error} />
      <RFormInput label="Password" error={error} />
      <RButton />
    </View>
  );
};
