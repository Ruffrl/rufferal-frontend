import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observableAccountStore } from '@rufferal-frontend/store';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import {
  CreatePetCareplanScreen,
  CreatePetDetailsScreen,
  CreatePetPersonalityScreen,
  CreateProfileAvatarScreen,
  CreateProfileNameScreen,
  CreateProfilePetsScreen,
  CreateProfileTypeScreen,
  Dashboard2,
  DashboardScreen,
  DevPlaygroundScreen,
  ForgotPasswordScreen,
  LoginScreen,
  ManagePetsScreen,
  OnboardingScreen,
  ProfileScreen,
  ResetPasswordScreen,
  SignupScreen,
  VerificationScreen,
} from '.';

const Stack = createNativeStackNavigator();

export const Screens = observer(() => {
  // showOnboarding == true -> they have not interacted with Onboarding, do display
  // showOnboarding == false -> they have interacted with Onboarding, do NOT display again
  // showOnboarding will check AsyncStorage for key "showOnboarding"
  // If a user hasn't interacted with Onboarding, getItem("showOnboarding") should be null
  // If a user interacts with Onboarding, we setItem("showOnboarding", "true")
  // At the Screens level, we just get AsyncStorage

  // const [showOnboarding, setShowOnboarding] = useState<boolean>(true);
  /* BLARG - DEVELOPING/DEBUGGING */
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
        {observableAccountStore.isLoggedIn ? (
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
            <Stack.Screen name="Dashboard2" component={Dashboard2} />
            <Stack.Screen
              name="Create Profile Name"
              component={CreateProfileNameScreen}
            />
            <Stack.Screen
              name="Create Profile Avatar"
              component={CreateProfileAvatarScreen}
            />
            <Stack.Screen
              name="Create Profile Type"
              component={CreateProfileTypeScreen}
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
            {/* ⬇️⬇️⬇️ BLARG - FOR DEVELOPMENT - REMOVE AFTER TESTING ⬇️⬇️⬇️ */}
            <Stack.Screen
              name="Create Profile Name"
              component={CreateProfileNameScreen}
            />
            <Stack.Screen
              name="Create Profile Avatar"
              component={CreateProfileAvatarScreen}
            />
            <Stack.Screen
              name="Create Profile Type"
              component={CreateProfileTypeScreen}
            />
            <Stack.Screen
              name="Create Profile Pets"
              component={CreateProfilePetsScreen}
            />
            <Stack.Screen name="Manage Pets" component={ManagePetsScreen} />
            <Stack.Screen
              name="Create Pet Details"
              component={CreatePetDetailsScreen}
            />
            <Stack.Screen
              name="Create Pet Personality"
              component={CreatePetPersonalityScreen}
            />
            <Stack.Screen
              name="Create Pet Careplan"
              component={CreatePetCareplanScreen}
            />
            {/* ⬆️⬆️⬆️ BLARG - FOR DEVELOPMENT - REMOVE AFTER TESTING ⬆️⬆️⬆️ */}
            {showOnboarding && (
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            )}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Verification" component={VerificationScreen} />
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
            {/* BLARG - convert this GuestDashboard2 */}
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Dashboard2" component={Dashboard2} />
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          </Stack.Group>
        )}
        {/* SHARED SCREENS */}
        <Stack.Group
          navigationKey={observableAccountStore.isLoggedIn ? 'user' : 'guest'}
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
