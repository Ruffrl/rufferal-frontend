import * as React from 'react';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthStoreContext } from '../../../store';
import { RAccount, RAllAccounts } from '../organism';
import { RAccessTemplate } from '../templates';

export const RDashboard = ({
  navigation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation?: any;
}): React.ReactElement => {
  const authStore = useContext(AuthStoreContext);

  return (
    <RAccessTemplate navigation={navigation}>
      <Text
        style={{
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        {/* BLARG - what will ProfileStore hold? If it holds profile data then why save any of it in authStore - this can just be the store for handling tokens, login status, etc */}
        CONGRATS {authStore.user?.forename.toUpperCase()}! - You are logged in
      </Text>
      <View
        style={{
          marginBottom: 10,
          borderColor: 'black',
          borderWidth: 2,
          width: '100%',
        }}
      >
        <Text style={{ margin: 10 }}>
          Testing get all users - authorization required
        </Text>
        <RAllAccounts />
      </View>
      <View
        style={{
          marginBottom: 10,
          borderColor: 'black',
          borderWidth: 2,
          width: '100%',
        }}
      >
        <Text style={{ margin: 10 }}>
          Testing get single user - authorization required
        </Text>
        <RAccount userId={1} />
      </View>
    </RAccessTemplate>
  );
};
