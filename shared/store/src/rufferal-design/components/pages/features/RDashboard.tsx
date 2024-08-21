import * as React from 'react';

import { Text } from 'react-native';
import { RAccessTemplate } from '../..';

export const RDashboard = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      {/* Navigation */}
      <Text>⬅️</Text>
      {/* Header */}
      <Text>Main Dashboard - search and browse</Text>
    </RAccessTemplate>
  );
};
