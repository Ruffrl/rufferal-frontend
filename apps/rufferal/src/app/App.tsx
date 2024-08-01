// import { App } from '@rufferal-frontend/store';

// export default App;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { PageOne, PageTwo } from '@rufferal-frontend/store';
import { observer } from 'mobx-react-lite';
import { Button, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Page One</Text>
      {/* <PageOne /> */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// function DetailsScreen({ navigation }) {
function DetailsScreen() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Page Two</Text>
      {/* <PageTwo /> */}
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  );
}

const App = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;
