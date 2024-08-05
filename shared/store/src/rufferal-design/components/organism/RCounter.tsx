import { observer } from 'mobx-react-lite';
import * as React from 'react';
// import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
// import { CounterStoreContext } from '../../../store';
import { observableCounterStore } from '../../../store';

export const RCounter = observer((): React.ReactElement => {

  return (
    <View>
      <Text style={styles.instructions}>{observableCounterStore.count}</Text>
      <Button
        title="increment with store"
        onPress={() => observableCounterStore.increaseCount()}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
