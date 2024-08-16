import * as React from 'react';

import { Text } from 'react-native';
import { RAccessTemplate, RPageHeader } from '../..';

export const RResetPassword = (): React.ReactElement => {
  // BLARG - you can only reach this page with a valid email link - HOW?

  return (
    <RAccessTemplate>
      {/* Navigation */}
      <Text>⬅️</Text>
      {/* Header */}
      <RPageHeader header="Update your password" />
      {/* RESET PASSWORD FORM */}
      {/* Password field */}
      <Text>New Password</Text>
      {/* Submit button and handler */}
      <Text>Save</Text>
    </RAccessTemplate>
  );
};
