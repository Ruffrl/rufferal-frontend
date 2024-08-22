import * as React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { observableAccountStore } from '../../../store';
import { RAccount, RAllAccounts } from '../organism';
import { RAccessTemplate } from '../templates';

export const RDash = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      <Text style={tw`mt-[30px] mb-[30px]`}>
        {/* BLARG - what will ProfileStore hold? If it holds profile data then why save any of it in AccountStore - this can just be the store for handling tokens, login status, etc */}
        CONGRATS {observableAccountStore.user?.forename.toUpperCase()}! - You
        are logged in
      </Text>
      <View style={tw`mb-[10px] border-[2px] border-black`}>
        <Text style={tw`m-[10px]`}>
          Testing get all users - authorization required
        </Text>
        <RAllAccounts />
      </View>
      <View style={tw`mb-[10px] border-[2px] border-black`}>
        <Text style={tw`m-[10px]`}>
          Testing get single user - authorization required
        </Text>
        <RAccount userId={1} />
      </View>
    </RAccessTemplate>
  );
};
