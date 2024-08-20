import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import tw from 'twrnc';
import { observableAuthStore } from '../../store';
import { RLogoutButton } from '../components';

// import { useNavigation } from '@react-navigation/native';
// import { ScreenProps } from '../Screens';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

// export type ProtectedScreens = {
//   Dashboard: undefined;
//   Profile: undefined;
//   // Profile: { userId: string};
// };

// export type UnprotectedScreens = {
//   Home: undefined;
//   About: undefined;
// };

export type ScreenProps = {
  Onboarding: undefined;
  Home: undefined;
  About: undefined;
  Dashboard: undefined;
  Profile: undefined;
  Signup: undefined;
  Login: undefined;
  'Forgot Password': undefined;
  // Profile: { userId: string};
};

export const MobileNavigation = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  return (
    <View style={tw`gap-1 w-full`}>
      <Text>MOBILE NAVIGATION</Text>
      {observableAuthStore.isLoggedIn ? (
        <>
          <Text>🔑 Protected Routes 🔑</Text>
          {/* My Profile - Owner */}
          {/* AuthedSearchServices */}
          {/* Pet Profiles + Care Plans */}
          {/* Bookings */}
          {/* Messaging */}
          {/* Account Settings */}
          {/* My Profile - Caretaker */}
          {/* AuthedSearchGigs */}
          <Button
            title="Dashboard"
            onPress={() => navigation.navigate('Dashboard')}
          />
          <Button
            title="My Profile"
            onPress={() => navigation.navigate('Profile')}
          />
          {observableAuthStore.isLoggedIn && observableAuthStore?.user?.id && (
            <RLogoutButton id={observableAuthStore.user.id} />
          )}
        </>
      ) : (
        <>
          <Text>✅ Unprotected Routes ✅</Text>
          {/* Onboarding */}
          {/* Login + Social Login */}
          {/* SearchServices */}
          {/* Sign Up */}
          {/* SearchGigs */}
          <Button title="Home" onPress={() => navigation.navigate('Home')} />
          <Button title="About" onPress={() => navigation.navigate('About')} />
        </>
      )}
    </View>
  );
};
