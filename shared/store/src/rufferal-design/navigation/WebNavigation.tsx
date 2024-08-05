import { useContext } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-dom';
import { AuthStoreContext } from '../../store';
import { RLogoutButton } from '../components';

export const WebNavigation = () => {
  const authStore = useContext(AuthStoreContext);

  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 30,
        gap: 10,
      }}
    >
      <Text>WEB NAVIGATION</Text>
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
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">My Profile</Link>
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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </>
      )}
    </View>
  );
};
