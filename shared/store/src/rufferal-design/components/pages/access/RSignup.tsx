import * as React from 'react';

import { Text } from 'react-native';
import tw from 'twrnc';
import { RAccessTemplate } from '../../templates';

export const RSignup = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      {/* Header */}
      <Text>Create an account</Text>
      {/* Apple interaction button */}
      <Text>Sign up with Apple</Text>
      {/* Google interaction button */}
      <Text>Sign up with Google</Text>
      {/* Break */}
      <Text>------- or ---------</Text>
      {/* SIGNUP FORM */}
      {/* Email field */}
      <Text>Email Address</Text>
      {/* Password field - needs hidden input and toggleable visibility on text */}
      <Text>Password</Text>
      {/* Forgot password navigation link */}
      <Text>
        Your password needs to be at least 8 characters long and include a
        number.
      </Text>
      {/* Error handling */}
      <Text>Conditional error display</Text>
      {/* Submit button and handler */}
      <Text>Sign up</Text>
      {/* Sign up navigation link */}
      <Text>
        By clicking Sign up, you are agreeing to our{' '}
        <Text style={tw`font-bold underline`}>Service Agreement</Text>{' '}and{' '}
        <Text style={tw`font-bold underline`}>Privacy Policy</Text>
      </Text>
      {/* Sign up navigation link */}
      <Text>
        Already have an account? <Text style={tw`font-bold `}>Log in</Text>
      </Text>
    </RAccessTemplate>
  );
};
