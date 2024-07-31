import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CounterStoreContext } from '../../../index';

export const Counter = observer((): React.JSX.Element => {
  const counterStore = useContext(CounterStoreContext);

  return (
    <View>
      <Text style={styles.instructions}>{counterStore.count}</Text>
      <Button
        title="increment with store"
        onPress={() => counterStore.increaseCount()}
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
