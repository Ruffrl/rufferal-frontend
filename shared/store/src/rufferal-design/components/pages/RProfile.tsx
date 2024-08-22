import * as React from 'react';

import { Text, View } from 'react-native';
import tw from 'twrnc';
import { observableAccountStore } from '../../../store';
import { RPrototypeTemplate } from '../templates';

export const RProfile = (): React.ReactElement => {
  return (
    <RPrototypeTemplate>
      <View style={tw`mt-[30px] mb-[30px]`}>
        <Text>{observableAccountStore.user?.id}</Text>
        <Text>{observableAccountStore.user?.forename}</Text>
        <Text>{observableAccountStore.user?.surname}</Text>
        <Text>{observableAccountStore.user?.avatar}</Text>
        <Text>{observableAccountStore.user?.verified}</Text>
        <Text>{observableAccountStore.user?.email}</Text>
        <Text>{observableAccountStore.user?.species}</Text>
      </View>
    </RPrototypeTemplate>
  );
};
