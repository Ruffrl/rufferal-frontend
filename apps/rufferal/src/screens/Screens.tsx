import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import { ManagePetsScreen } from '.';

const Stack = createNativeStackNavigator();

export const Screens = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen
            name="Manage Pets"
            component={gestureHandlerRootHOC(ManagePetsScreen)}
            // component={ManagePetsScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
});
