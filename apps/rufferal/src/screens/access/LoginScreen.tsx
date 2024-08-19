import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RLogin, ScreenProps } from '@rufferal-frontend/store';
import { Image } from 'react-native';
import tw from 'twrnc';

export const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateSignup = () => navigation.navigate('Signup');
  const navigateForgotPassword = () => navigation.navigate('Forgot Password');

  const AppleIcon = () => {
    // BLARG - handle check if apple png exists
    return (
      <Image
        source={require('../../../android/app/src/main/res/empty-image.png')}
        resizeMode="contain"
        style={tw`w-[24px] h-[24px]`}
        tintColor="#6b7280"
      />
    );
  };

  const GoogleIcon = () => {
    // BLARG - handle check if apple png exists
    return (
      <Image
        source={require('../../../android/app/src/main/res/empty-image.png')}
        resizeMode="contain"
        style={tw`w-[24px] h-[24px]`}
        tintColor="#6b7280"
      />
    );
  };

  const MobileIconView = () => (
    <Image
      source={require('../../../android/app/src/main/res/icons-512/eye.png')}
      resizeMode="contain"
      style={tw`w-[24px] h-[24px]`}
      tintColor="#6b7280"
    />
  );

  const MobileIconHide = () => (
    <Image
      source={require('../../../android/app/src/main/res/icons-512/eye-close.png')}
      resizeMode="contain"
      style={tw`w-[24px] h-[24px]`}
      tintColor="#6b7280"
    />
  );

  const MobileBackIcon = () => (
    <Image
      source={require('../../../android/app/src/main/res/icons-512/arrow-left.png')}
      resizeMode="contain"
      style={tw`w-[24px] h-[24px]`}
      tintColor="#18181b"
    />
  );

  const CloseIcon = () => (
    <Image
      source={require('../../../android/app/src/main/res/icons-512/close.png')}
      resizeMode="contain"
      style={tw`w-[24px] h-[24px]`}
      tintColor="#18181b"
    />
  );

  return (
    <RLogin
      navigateSignup={navigateSignup}
      navigateForgotPassword={navigateForgotPassword}
      appleIcon={<AppleIcon />}
      googleIcon={<GoogleIcon />}
      mobileIconHide={<MobileIconHide />}
      mobileIconView={<MobileIconView />}
      mobileBackIcon={<MobileBackIcon />}
      mobileCloseIcon={<CloseIcon/>}
    />
  );
};
