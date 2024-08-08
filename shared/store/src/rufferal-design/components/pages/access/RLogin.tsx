import * as React from 'react';

import { Text } from 'react-native';
import tw from 'twrnc';
import { RAccessTemplate } from '../../templates';

export const RLogin = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      {/* Header */}
      <Text>Log in</Text>
      {/* Apple interaction button */}
      <Text>Log in with Apple</Text>
      {/* Google interaction button */}
      <Text>Log in with Google</Text>
      {/* Break */}
      <Text>------- or ---------</Text>
      {/* LOGIN FORM */}
      {/* Email field */}
      <Text>Email Address</Text>
      {/* Password field - needs hidden input and toggleable visibility on text */}
      <Text>Password</Text>
      {/* Forgot password navigation link */}
      <Text>Forgot password?</Text>
      {/* Error handling */}
      <Text>Conditional error display</Text>
      {/* Submit button and handler */}
      <Text>Continue</Text>
      {/* Sign up navigation link */}
      <Text>
        New to Rufferal? <Text style={tw`font-bold`}>Sign up</Text>
      </Text>
    </RAccessTemplate>
  );
};
