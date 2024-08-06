import * as React from 'react';

import { Text, View } from 'react-native';
import { observableAuthStore } from '../../../store';
import { RAccessTemplate } from '../templates';
import tw from 'twrnc';

export const RProfile = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      <View style={tw`mt-[30px] mb-[30px]`}>
        <Text>{observableAuthStore.user?.id}</Text>
        <Text>{observableAuthStore.user?.forename}</Text>
        <Text>{observableAuthStore.user?.surname}</Text>
        <Text>{observableAuthStore.user?.avatar}</Text>
        <Text>{observableAuthStore.user?.verified}</Text>
        <Text>{observableAuthStore.user?.email}</Text>
        <Text>{observableAuthStore.user?.species}</Text>
      </View>
    </RAccessTemplate>
  );
};
