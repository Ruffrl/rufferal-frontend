import { observer } from 'mobx-react-lite';
import { StyleSheet } from 'react-native';
import { PageOne } from './components/navigation-testing/PageOne';

export const App = observer(() => {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>Rufferal</Text>
    //   <Text style={styles.instructions}>Authentication Playground</Text>
    //   <Counter />
    // </View>
    <PageOne />
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
