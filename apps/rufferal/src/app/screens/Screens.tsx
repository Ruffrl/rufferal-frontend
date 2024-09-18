import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  SearchScreen,
} from '.';

const Stack = createNativeStackNavigator();

export const Screens = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
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
        <Stack.Screen name="Dog Personality" component={DogPersonalityScreen} />
        <Stack.Screen name="Dog Careplan" component={DogCareplanScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { observableAccountStore } from '@rufferal/store';
// import { Bottomsheet } from '@rufferal/ui';
// import { observer } from 'mobx-react-lite';
// import { useEffect, useState } from 'react';
// import {
//   CreatePetCareplanScreen,
//   CreatePetDetailsScreen,
//   CreatePetPersonalityScreen,
//   CreateProfileAvatarScreen,
//   CreateProfileNameScreen,
//   CreateProfilePetsScreen,
//   CreateProfileTypeScreen,
//   Dashboard2,
//   DashboardScreen,
//   DevPlaygroundScreen,
//   ForgotPasswordScreen,
//   LoginScreen,
//   ManagePetsScreen,
//   OnboardingScreen,
//   ProfileScreen,
//   ResetPasswordScreen,
//   SignupScreen,
//   VerificationScreen,
// } from '.';

// function CatScreen() {
//   return <Bottomsheet />;
// }

// const Stack = createNativeStackNavigator();

// export const Screens = observer(() => {
//   // showOnboarding == true -> they have not interacted with Onboarding, do display
//   // showOnboarding == false -> they have interacted with Onboarding, do NOT display again
//   // showOnboarding will check AsyncStorage for key "showOnboarding"
//   // If a user hasn't interacted with Onboarding, getItem("showOnboarding") should be null
//   // If a user interacts with Onboarding, we setItem("showOnboarding", "true")
//   // At the Screens level, we just get AsyncStorage

//   /* BLARG - DEVELOPING/DEBUGGING */
//   const [showOnboarding, setShowOnboarding] = useState<boolean>(true);

//   useEffect(() => {
//     AsyncStorage.getItem('showOnboarding').then((value) => {
//       if (value === 'true') {
//         setShowOnboarding(false);
//       }
//     });
//   });

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Cat Facts" component={CatScreen} />
//         {observableAccountStore.isLoggedIn ? (
//           /* USER SCREENS */
//           <Stack.Group>
//             <Stack.Screen name="Dashboard" component={DashboardScreen} />
//             {/* BLARG handle conditionally rendering create profile */}
//             <Stack.Screen
//               name="Create Profile Name"
//               component={CreateProfileNameScreen}
//             />
//             <Stack.Screen
//               name="Create Profile Avatar"
//               component={CreateProfileAvatarScreen}
//             />
//             <Stack.Screen
//               name="Create Profile Type"
//               component={CreateProfileTypeScreen}
//             />
//             <Stack.Screen
//               name="Create Profile Pets"
//               component={CreateProfilePetsScreen}
//             />
//             <Stack.Screen name="Manage Pets" component={ManagePetsScreen} />
//             <Stack.Screen
//               name="Create Pet Details"
//               component={CreatePetDetailsScreen}
//             />
//             <Stack.Screen
//               name="Create Pet Personality"
//               component={CreatePetPersonalityScreen}
//             />
//             <Stack.Screen
//               name="Create Pet Careplan"
//               component={CreatePetCareplanScreen}
//             />
//             {/* BLARG - screens tbd */}
//             <Stack.Screen name="Dashboard2" component={Dashboard2} />
//             <Stack.Screen name="Profile" component={ProfileScreen} />
//             {/* <Stack.Screen name="Messaging" component={MessagingScreen} /> */}
//             {/* <Stack.Screen name="Bookings" component={BookingsScreen} /> */}
//             {/* <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} /> */}
//           </Stack.Group>
//         ) : (
//           /* GUEST SCREENS */
//           <Stack.Group>
//             {/* ⬇️⬇️⬇️ BLARG - FOR DEVELOPMENT - REMOVE AFTER TESTING ⬇️⬇️⬇️ */}
//             <Stack.Screen name="Manage Pets" component={ManagePetsScreen} />
//             <Stack.Screen
//               name="Create Pet Details"
//               component={CreatePetDetailsScreen}
//             />
//             <Stack.Screen
//               name="Create Pet Personality"
//               component={CreatePetPersonalityScreen}
//             />
//             <Stack.Screen
//               name="Create Pet Careplan"
//               component={CreatePetCareplanScreen}
//             />
//             {/* ⬆️⬆️⬆️ BLARG - FOR DEVELOPMENT - REMOVE AFTER TESTING ⬆️⬆️⬆️ */}
//             {showOnboarding && (
//               <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//             )}
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Verification" component={VerificationScreen} />
//             <Stack.Screen
//               name="Forgot Password"
//               component={ForgotPasswordScreen}
//             />
//             <Stack.Screen
//               name="Reset Password"
//               component={ResetPasswordScreen}
//             />
//             <Stack.Screen name="Signup" component={SignupScreen} />
//             <Stack.Screen name="Dashboard" component={DashboardScreen} />
//           </Stack.Group>
//         )}
//         {/* SHARED SCREENS */}
//         <Stack.Group
//           navigationKey={observableAccountStore.isLoggedIn ? 'user' : 'guest'}
//         >
//           {/* BLARG - todo */}
//           <Stack.Screen name="About" component={DevPlaygroundScreen} />
//           {/* BLARG - todo */}
//           <Stack.Screen name="Help" component={DevPlaygroundScreen} />
//         </Stack.Group>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// });
