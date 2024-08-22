import * as React from 'react';

import { Text } from 'react-native';
import { RPrototypeTemplate } from '../../templates';

export const RCreatePetDetails = (): React.ReactElement => {
  return (
    <RPrototypeTemplate>
      {/* Navigation */}
      <Text>⬅️</Text>
      {/* Header */}
      <Text>Create pet details</Text>
    </RPrototypeTemplate>
  );
};
