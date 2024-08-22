import * as React from 'react';

import { Text } from 'react-native';
import { RPrototypeTemplate } from '../../templates';

export const RManagePets = (): React.ReactElement => {
  return (
    <RPrototypeTemplate>
      {/* Navigation */}
      <Text>⬅️</Text>
      {/* Header */}
      <Text>Pets Dashboard</Text>
    </RPrototypeTemplate>
  );
};
