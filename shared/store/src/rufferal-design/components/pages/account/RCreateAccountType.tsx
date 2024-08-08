import * as React from 'react';

import { Text } from 'react-native';
import { RAccessTemplate } from '../../templates';

export const RCreateAccountType = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      {/* Navigation */}
      <Text>🔙</Text>
      {/* Navigation */}
      <Text>🌑️🌑️🌑️🌑️🌑️🌑️🌕🌕🌕</Text>
      {/* Header */}
      <Text>What interested you in Rufferal?</Text>
      {/* Disclaimer */}
      <Text>Choose one or more.</Text>
      {/* TYPE FORM */}
      {/* Radio Card - multiselect */}
      <Text>I'm looking for pet care</Text>
      {/* Radio Card - multiselect */}
      <Text>I want to be a pet caretaker</Text>
      {/* Error handling */}
      <Text>Conditional error display</Text>
      {/* Submit button and handler */}
      <Text>Continue</Text>
    </RAccessTemplate>
  );
};
