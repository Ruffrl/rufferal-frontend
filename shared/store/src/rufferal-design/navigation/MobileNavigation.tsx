import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthStoreContext } from '../../store';
import { RLogoutButton } from '../components';

// BLARG - update with this: https://reactnavigation.org/docs/navigating-without-navigation-prop and MobX
export const MobileNavigation = ({
  navigation,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation?: any;
}) => {
  const authStore = useContext(AuthStoreContext);

  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 30,
        gap: 10,
      }}
    >
      <Text>MOBILE NAVIGATION</Text>
      {authStore.isLoggedIn ? (
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
          {authStore.isLoggedIn && authStore?.user?.id && (
            <RLogoutButton id={authStore.user.id} />
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
