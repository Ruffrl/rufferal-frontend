import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import tw from 'twrnc';
import { observableCounterStore } from '../../../store';

export const RCounter = observer((): React.ReactElement => {
  return (
    <View>
      <Text style={tw`text-center text-slate-800 mb-[5px]`}>
        {observableCounterStore.count}
      </Text>
      <Button
        title="increment with store"
        onPress={() => observableCounterStore.increaseCount()}
      />
    </View>
  );
});
