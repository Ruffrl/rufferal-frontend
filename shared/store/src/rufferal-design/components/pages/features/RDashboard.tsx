import * as React from 'react';

import { Text } from 'react-native';
import { RPrototypeTemplate } from '../..';

export const RDashboard = (): React.ReactElement => {
  return (
    <RPrototypeTemplate>
      {/* Navigation */}
      <Text>⬅️</Text>
      {/* Header */}
      <Text>Main Dashboard - search and browse</Text>
    </RPrototypeTemplate>
  );
};
