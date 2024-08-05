import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStoreContext } from '@rufferal-frontend/store';
import { useContext } from 'react';
import { AboutScreen } from '../screens/AboutScreen';
import { DashboardScreen } from '../screens/DashboardScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const authStore = useContext(AuthStoreContext);

  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
      <Stack.Navigator>
        {authStore.isLoggedIn ? (
          <>
            {/* My Profile - Owner */}
            {/* AuthedSearchServices */}
            {/* Pet Profiles + Care Plans */}
            {/* Bookings */}
            {/* Messaging */}
            {/* Account Settings */}
            {/* My Profile - Caretaker */}
            {/* AuthedSearchGigs */}
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        ) : (
          <>
            {/* Onboarding */}
            {/* Login + Social Login */}
            {/* SearchServices */}
            {/* Sign Up */}
            {/* SearchGigs */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
