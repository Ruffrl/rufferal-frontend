import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import {
  CameraScreen,
  CatAvatarScreen,
  CatCareplanScreen,
  CatDetailsScreen,
  CatPersonalityScreen,
  DogAvatarScreen,
  DogCareplanScreen,
  DogDetailsScreen,
  DogPersonalityScreen,
  ManagePetsScreen,
  PetSplashScreen,
  SearchScreen,
} from '.';

const Stack = createNativeStackNavigator();

export const Screens = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* ⬇️⬇️⬇️ CURRENT DEVELOPMENT PAGE ⬇️⬇️⬇️ */}
        <Stack.Screen name="Dog Personality" component={DogPersonalityScreen} />
        {/* ⬆️⬆️⬆️ CURRENT DEVELOPMENT PAGE ⬆️⬆️⬆️ */}

        <Stack.Screen
          name="Create Pets Onboarding"
          component={PetSplashScreen}
        />
        <Stack.Screen name="Manage Pets" component={ManagePetsScreen} />
        <Stack.Screen name="Cat Details" component={CatDetailsScreen} />
        <Stack.Screen name="Cat Avatar" component={CatAvatarScreen} />
        <Stack.Screen name="Cat Personality" component={CatPersonalityScreen} />
        <Stack.Screen name="Cat Careplan" component={CatCareplanScreen} />
        <Stack.Screen name="Dog Details" component={DogDetailsScreen} />
        <Stack.Screen name="Dog Avatar" component={DogAvatarScreen} />
        {/* <Stack.Screen name="Dog Personality" component={DogPersonalityScreen} /> */}
        <Stack.Screen name="Dog Careplan" component={DogCareplanScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />

        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});