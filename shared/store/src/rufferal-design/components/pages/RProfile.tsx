import * as React from 'react';

import { Text, View } from 'react-native';
import { observableAuthStore } from '../../../store';
import { RAccessTemplate } from '../templates';

export const RProfile = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      <View
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
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
