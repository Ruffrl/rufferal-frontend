import { Text, View } from 'react-native';
import { Link, useNavigate } from 'react-router-dom';
import tw from 'twrnc';
import { observableAccountStore } from '../../store';
import { RLogoutButton } from '../components';

export const WebNavigation = () => {
  const navigate = useNavigate();
  const navigateAfterLogout = () => navigate('/');

  return (
    <View style={tw`gap-1 w-full`}>
      <Text>WEB NAVIGATION</Text>
      {observableAccountStore.isLoggedIn ? (
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
          {observableAccountStore.isLoggedIn &&
            observableAccountStore?.user?.id && (
              <RLogoutButton
                id={observableAccountStore.user.id}
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
