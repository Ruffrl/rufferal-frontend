import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observableAuthStore } from '@rufferal-frontend/store';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { OnboardingScreen } from './access/OnboardingScreen';
import { DevPlaygroundScreen } from './onboarding/DevPlaygroundScreen';
import { HomeScreen } from './onboarding/HomeScreen';
import { DashboardScreen } from './user-account/DashboardScreen';
import { ProfileScreen } from './user-account/ProfileScreen';

const Stack = createNativeStackNavigator();

export const Screens = observer(() => {
  // showOnboarding == true -> they have not interacted with Onboarding, do display
  // showOnboarding == false -> they have interacted with Onboarding, do NOT display again
  // showOnboarding will check AsyncStorage for key "showOnboarding"
  // If a user hasn't interacted with Onboarding, getItem("showOnboarding") should be null
  // If a user interacts with Onboarding, we setItem("showOnboarding", "true")
  // At the Screens level, we just get AsyncStorage
  const [showOnboarding, setShowOnboarding] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem('showOnboarding').then((value) => {
      if (value === 'true') {
        setShowOnboarding(false);
      }
    });
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
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
            {showOnboarding && (
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            )}
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* BLARG - new Screen */}
            <Stack.Screen name="Signup" component={HomeScreen} />
            {/* BLARG - new Screen */}
            <Stack.Screen name="Login" component={HomeScreen} />
            {/* BLARG - guest version */}
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="About" component={DevPlaygroundScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});
