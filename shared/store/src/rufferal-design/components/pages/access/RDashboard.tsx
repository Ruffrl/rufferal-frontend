import * as React from 'react';

import { Text, View } from 'react-native';
import tw from 'twrnc';
import { observableAuthStore } from '../../../../store';
import { RAccessTemplate } from '../../templates';

export const RDashboard = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      <View style={tw`mt-[30px] mb-[30px]`}>
        <Text>{observableAuthStore.user?.id}</Text>
      </View>
    </RAccessTemplate>
  );
};
