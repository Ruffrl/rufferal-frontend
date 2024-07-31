import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CounterStoreContext } from '../index';

export const App = observer(() => {
  const counterStore = useContext(CounterStoreContext);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Rufferal</Text>
      <Text style={styles.instructions}>Authentication Playground</Text>
      <Text style={styles.instructions}>{counterStore.count}</Text>
      <Button
        title="increment with store"
        onPress={() => counterStore.increaseCount()}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
