import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RLogin, ScreenProps } from '@rufferal-frontend/store';
import { Image } from 'react-native';

export const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateSignup = () => navigation.navigate('Signup');
  const navigateForgotPassword = () => navigation.navigate('Forgot Password');

  const AppleImage = () => {
    // BLARG - handle check if apple png exists
    // apps/rufferal/android/app/src/main/res/empty-image.png
    // apps/rufferal/src/screens/access/LoginScreen.tsx
    return (
      <Image
        source={require('../../../android/app/src/main/res/empty-image.png')}
        resizeMode="contain"
      />
    );
  };

  return (
    <RLogin
      navigateSignup={navigateSignup}
      navigateForgotPassword={navigateForgotPassword}
      appleIcon={<AppleImage />}
      // googleIcon={GoogleImage}
    />
  );
};
