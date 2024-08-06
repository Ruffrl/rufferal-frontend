import { Text, View } from 'react-native';
import { Link, useNavigate } from 'react-router-dom';
import tw from 'twrnc';
import { observableAuthStore } from '../../store';
import { RLogoutButton } from '../components';

export const WebNavigation = () => {
  const navigate = useNavigate();
  const navigateAfterLogout = () => navigate('/');

  return (
    <View style={tw`gap-1 w-full`}>
      <Text>WEB NAVIGATION</Text>
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
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">My Profile</Link>
          {observableAuthStore.isLoggedIn && observableAuthStore?.user?.id && (
            <RLogoutButton
              id={observableAuthStore.user.id}
              navigateAfterLogout={navigateAfterLogout}
            />
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
