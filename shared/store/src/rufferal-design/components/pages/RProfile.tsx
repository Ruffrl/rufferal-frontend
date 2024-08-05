import * as React from 'react';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthStoreContext } from '../../../store';
import { RAccessTemplate } from '../templates';

export const RProfile = ({
  navigation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation?: any;
}): React.ReactElement => {
  const authStore = useContext(AuthStoreContext);

  return (
    <RAccessTemplate navigation={navigation}>
      <View
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <Text>{authStore.user?.id}</Text>
        <Text>{authStore.user?.forename}</Text>
        <Text>{authStore.user?.surname}</Text>
        <Text>{authStore.user?.avatar}</Text>
        <Text>{authStore.user?.verified}</Text>
        <Text>{authStore.user?.email}</Text>
        <Text>{authStore.user?.species}</Text>
      </View>
    </RAccessTemplate>
  );
};
