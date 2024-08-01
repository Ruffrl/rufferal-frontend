import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RHome } from '@rufferal-frontend/store';
import { observer } from 'mobx-react-lite';

import { RAbout } from '@rufferal-frontend/store';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return <RHome mobile navigation={navigation} />;
};

const AboutScreen = ({ navigation }) => {
  return <RAbout mobile navigation={navigation} />;
};

const App = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;
