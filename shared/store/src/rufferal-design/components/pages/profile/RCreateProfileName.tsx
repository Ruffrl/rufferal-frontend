import * as React from 'react';

import { Text } from 'react-native';
import { RAccessTemplate } from '../../templates';

export const RCreateProfileName = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      {/* Navigation */}
      <Text>⬅️</Text>
      {/* Navigation */}
      <Text>🌕🌕🌕🌑️🌑️🌑️🌑️🌑️🌑️</Text>
      {/* Header */}
      <Text>What's your name?</Text>
      {/* Disclaimer */}
      <Text>
        Rufferal will only identify you by your first name and last initial.
      </Text>
      {/* NAME FORM */}
      {/* Forename field */}
      <Text>First name</Text>
      {/* Surname field */}
      <Text>Last name</Text>
      {/* Error handling */}
      <Text>Conditional error display</Text>
      {/* Submit button and handler */}
      <Text>Continue</Text>
    </RAccessTemplate>
  );
};
