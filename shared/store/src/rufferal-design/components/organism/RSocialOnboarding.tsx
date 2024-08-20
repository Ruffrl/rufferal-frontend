import * as React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import { RAppleIcon, RButton, RGoogleIcon } from '../';
import { verticalScaleTW } from '../../utils';

type SocialOnboardingProps = {
  appleIcon?: React.JSX.Element;
  googleIcon?: React.JSX.Element;
  isSigningUp?: boolean;
};

export const RSocialOnboarding = ({
  appleIcon,
  googleIcon,
  isSigningUp = false,
}: SocialOnboardingProps) => {
  const AppleIcon = () => {
    return appleIcon || <RAppleIcon />;
  };

  const GoogleIcon = () => {
    return googleIcon || <RGoogleIcon />;
  };

  const handleApple = () => {
    if (isSigningUp) {
      console.log('BLARG: Priya you need to connect apple sign up');
    } else {
      console.log('BLARG: Priya you need to connect apple login');
    }
  };

  const handleGoogle = () => {
    if (isSigningUp) {
      console.log('BLARG: Priya you need to connect google sign up');
    } else {
      console.log('BLARG: Priya you need to connect google login');
    }
  };

  return (
    <View style={tw`py-${verticalScaleTW(20)} gap-${verticalScaleTW(12)}`}>
      {/* Apple interaction button */}
      <RButton
        onPress={handleApple}
        titleIcon={<AppleIcon />}
        title={isSigningUp ? 'Sign up with Apple' : 'Log in with Apple'}
        type="secondary"
      />
      {/* Google interaction button */}
      <RButton
        onPress={handleGoogle}
        titleIcon={<GoogleIcon />}
        title={isSigningUp ? 'Sign up with Google' : 'Log in with Google'}
        type="secondary"
      />
    </View>
  );
};
