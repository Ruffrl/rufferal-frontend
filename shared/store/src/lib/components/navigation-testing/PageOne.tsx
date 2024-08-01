import * as React from 'react';
import { Text } from 'react-native';
import { AccessTemplate } from '../../rufferal-design/components/templates/AccessTemplate';

export const PageOne = (): React.ReactElement => {
  return (
    <AccessTemplate>
      <Text>Page One</Text>
    </AccessTemplate>
  );
};
