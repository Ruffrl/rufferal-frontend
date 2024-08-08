import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RSignup, ScreenProps } from '@rufferal-frontend/store';
import { Image } from 'react-native';
import tw from 'twrnc';

export const SignupScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();

  const navigateLogin = () => navigation.navigate('Login');
  // Service agreement and privacy policy
  const navigateAbout = () => navigation.navigate('About');

  const AndroidImageTwo = (
    <Image
      style={tw`w-1/5 h-1/10`}
      source={require('../../../android/app/src/main/res/google-assets/Web/png@4x/neutral/web_neutral_rd_na@4x.png')}
    />
  );

  return (
    <RSignup
      navigateLogin={navigateLogin}
      navigateAbout={navigateAbout}
      androidGoogleImage={AndroidImageTwo}
    />
  );
};
