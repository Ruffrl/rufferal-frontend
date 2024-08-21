import * as React from 'react';

import { Text } from 'react-native';
import { RAccessTemplate } from '../../templates';

export const RCreateProfileAvatar = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      {/* Navigation */}
      <Text>⬅️{'                                         '}Skip</Text>
      {/* Navigation */}
      <Text>🌑️🌑️🌑️🌕🌕🌕🌑️🌑️🌑️</Text>
      {/* Header */}
      <Text>Upload your profile photo</Text>
      {/* Disclaimer */}
      <Text>
        This helps identify who you are to the Rufferal pet caretakers and
        community.
      </Text>
      {/* AVATAR FORM */}
      {/* Image upload field */}
      <Text>⭕️</Text>
      {/* Error handling */}
      <Text>Conditional error display</Text>
      {/* Submit button and handler */}
      <Text>Add from library</Text>
      {/* Submit button and handler */}
      <Text>Take photo</Text>
    </RAccessTemplate>
  );
};
