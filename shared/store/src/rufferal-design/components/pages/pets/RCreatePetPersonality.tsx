import * as React from 'react';

import { Text } from 'react-native';
import { RAccessTemplate } from '../../templates';

export const RCreatePetPersonality = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      {/* Navigation */}
      <Text>⬅️</Text>
      {/* Header */}
      <Text>Create pet personality</Text>
    </RAccessTemplate>
  );
};
