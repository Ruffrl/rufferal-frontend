import * as React from 'react';

import { Text } from 'react-native';
import { RAccessTemplate } from '../../templates';

export const RCreatePetCareplan = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      {/* Navigation */}
      <Text>⬅️</Text>
      {/* Header */}
      <Text>Create pet careplan</Text>
    </RAccessTemplate>
  );
};
