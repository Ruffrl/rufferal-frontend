import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observableAuthStore } from '@rufferal-frontend/store';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import {
  CreateAccountAvatarScreen,
  CreateAccountNameScreen,
  CreateAccountTypeScreen,
  DashboardScreen,
  DevPlaygroundScreen,
  ForgotPasswordScreen,
  LoginScreen,
  OnboardingScreen,
  ProfileScreen,
  ResetPasswordScreen,
  SignupScreen,
} from '.';

const Stack = createNativeStackNavigator();

export const Screens = observer(() => {
  // showOnboarding == true -> they have not interacted with Onboarding, do display
  // showOnboarding == false -> they have interacted with Onboarding, do NOT display again
  // showOnboarding will check AsyncStorage for key "showOnboarding"
  // If a user hasn't interacted with Onboarding, getItem("showOnboarding") should be null
  // If a user interacts with Onboarding, we setItem("showOnboarding", "true")
  // At the Screens level, we just get AsyncStorage

  /* DEVELOPING/DEBUGGING */
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

  // const [showOnboarding, setShowOnboarding] = useState<boolean>(true);

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
          /* USER SCREENS */
          <Stack.Group>
            {/* Create Account */}
            {/* Pet Profiles + Care Plans */}
            {/* SearchServices [dashboard] */}
            {/* My Profile - Owner */}
            {/* Bookings */}
            {/* Messaging */}
            {/* Account Settings */}
            {/* My Profile - Caretaker */}
            {/* SearchGigs */}
            {/* BLARG - convert this to authenticated only dashboard */}
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen
              name="Create Account Name"
              component={CreateAccountNameScreen}
            />
            <Stack.Screen
              name="Create Account Avatar"
              component={CreateAccountAvatarScreen}
            />
            <Stack.Screen
              name="Create Account Type"
              component={CreateAccountTypeScreen}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Group>
        ) : (
          /* GUEST SCREENS */
          <Stack.Group>
            {/* Onboarding */}
            {/* Login + Social Login */}
            {/* Sign Up */}
            {/* Forgot Password */}
            {/* SearchServices [guest dashboard] */}
            {showOnboarding && (
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            )}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="Forgot Password"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name="Reset Password"
              component={ResetPasswordScreen}
            />
            <Stack.Screen name="Signup" component={SignupScreen} />
            {/* BLARG - guest version */}
            {/* BLARG - convert this GuestDashboardScreen */}
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          </Stack.Group>
        )}
        {/* SHARED SCREENS */}
        <Stack.Group
          navigationKey={observableAuthStore.isLoggedIn ? 'user' : 'guest'}
        >
          {/* BLARG - todo */}
          <Stack.Screen name="About" component={DevPlaygroundScreen} />
          {/* BLARG - todo */}
          <Stack.Screen name="Help" component={DevPlaygroundScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
});
