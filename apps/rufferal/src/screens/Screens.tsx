import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { AuthStoreContext } from '@rufferal-frontend/store';
import { observableAuthStore } from '@rufferal-frontend/store';
import { observer } from 'mobx-react-lite';
// import { useContext } from 'react';
import { AboutScreen } from './onboarding/AboutScreen';
import { HomeScreen } from './onboarding/HomeScreen';
import { DashboardScreen } from './user-account/DashboardScreen';
import { ProfileScreen } from './user-account/ProfileScreen';

const Stack = createNativeStackNavigator();

export const Screens = observer(() => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
      <Stack.Navigator>
        {observableAuthStore.isLoggedIn ? (
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
});
