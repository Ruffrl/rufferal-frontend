import * as React from 'react';

import { Text } from 'react-native';
import { RAccessTemplate } from '../../templates';

export const RForgotPassword = (): React.ReactElement => {
  // BLARG - this is based on if they clicked Continue
  const submittedRequest = false;
  return (
    <RAccessTemplate>
      {/* Header */}
      <Text>Reset your password</Text>
      {submittedRequest ? (
        <>
          {/* Password image? */}
          <Text>IMAGE</Text>
          {/* Disclaimer */}
          <Text>
            Thanks! If you have a Rufferal account, we've sent you an email
          </Text>
          {/* What does this button do? */}
          <Text>Done</Text>
          {/* Resend request */}
          <Text>Resend email</Text>
          {/* Disclaimer */}
          <Text>Didn't get an email? Wait a few minutes and try again.</Text>
        </>
      ) : (
        <>
          {/* Helper text */}
          <Text>Check your email for instructions</Text>
          {/* REQUEST RESET FORM */}
          {/* Email field */}
          <Text>Email Address</Text>
          {/* Submit button and handler */}
          <Text>Continue</Text>
          {/* Resend request */}
          <Text>Resend email</Text>
          {/* Disclaimer */}
          <Text>Didn't get an email? Wait a few minutes and try again.</Text>
        </>
      )}
    </RAccessTemplate>
  );
};
