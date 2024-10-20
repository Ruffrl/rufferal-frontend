import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenProps } from '@rufferal/types';
import { observer } from 'mobx-react-lite';
import {
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
  ProfileSplashScreen,
  SearchDashboardScreen,
  SearchFiltersScreen,
  SearchResultsScreen,
} from '.';

const Stack = createNativeStackNavigator<ScreenProps>();

export const Screens = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* ⬇️⬇️⬇️ CURRENT DEVELOPMENT PAGE ⬇️⬇️⬇️ */}
        <Stack.Screen name="Search Filters" component={SearchFiltersScreen} />
        <Stack.Screen
          name="Search Dashboard"
          component={SearchDashboardScreen}
        />
        {/* ⬆️⬆️⬆️ CURRENT DEVELOPMENT PAGE ⬆️⬆️⬆️ */}

        <Stack.Screen name="Pet Splash" component={PetSplashScreen} />
        <Stack.Screen name="Pets Dashboard" component={ManagePetsScreen} />
        <Stack.Screen name="Cat Details" component={CatDetailsScreen} />
        <Stack.Screen name="Cat Avatar" component={CatAvatarScreen} />
        <Stack.Screen name="Cat Personality" component={CatPersonalityScreen} />
        <Stack.Screen name="Cat Careplan" component={CatCareplanScreen} />
        <Stack.Screen name="Dog Details" component={DogDetailsScreen} />
        <Stack.Screen name="Dog Avatar" component={DogAvatarScreen} />
        <Stack.Screen name="Dog Personality" component={DogPersonalityScreen} />
        <Stack.Screen name="Dog Careplan" component={DogCareplanScreen} />
        {/* <Stack.Screen
          name="Search Dashboard"
          component={SearchDashboardScreen}
        /> */}
        {/* <Stack.Screen name="Search Filters" component={SearchFiltersScreen} /> */}
        <Stack.Screen name="Search Results" component={SearchResultsScreen} />
        <Stack.Screen name="Profile Splash" component={ProfileSplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
