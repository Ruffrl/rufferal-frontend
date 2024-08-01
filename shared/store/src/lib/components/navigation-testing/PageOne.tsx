import * as React from 'react';
import { Text, View } from 'react-native';
import { AccessTemplate } from '../../rufferal-design/system/templates/AccessTemplate';

export const PageOne = (): React.ReactElement => {
  return (
    <AccessTemplate>
      <View>
        <Text>Page One</Text>
      </View>
    </AccessTemplate>
  );
};
