import * as React from 'react';

import { Platform, Text } from 'react-native';
import tw from 'twrnc';
import {
  RAccessTemplate,
  RFormEmailPassword,
  RLinkButton,
  ROrDivider,
  RSocialOnboarding,
} from '../..';

type SignupProps = {
  appleIcon?: React.JSX.Element;
  googleIcon?: React.JSX.Element;
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  mobileIconHide?: React.JSX.Element;
  mobileIconView?: React.JSX.Element;
  navigateAbout: () => void;
  navigateBack?: () => void;
  navigateLogin: () => void;
};

export const RSignup = ({
  appleIcon,
  googleIcon,
  mobileBackIcon,
  mobileCloseIcon,
  mobileIconHide,
  mobileIconView,
  navigateAbout,
  navigateBack,
  navigateLogin,
}: SignupProps): React.ReactElement => {
  const isAndroid = Platform.OS === 'android';
  const AboutLink = () => (
    <Text style={tw`text-xs tracking-wide text-gray-800`}>
      By clicking Sign up, you are agreeing to our{' '}
      <Text style={tw`font-bold underline`}>Service Agreement</Text> and{' '}
      <Text style={tw`font-bold underline`}>Privacy Policy</Text>
    </Text>
  );

  const LoginLink = () => (
    <Text style={tw`text-xs tracking-wide text-gray-800`}>
      Already have an account? <Text style={tw`font-bold `}>Log in</Text>
    </Text>
  );

  return (
    <RAccessTemplate
      header="Create an account"
      backNavigation={navigateBack}
      mobileBackIcon={mobileBackIcon}
      mobileCloseIcon={mobileCloseIcon}
    >
      {/* SOCIAL LOGIN */}
      <RSocialOnboarding
        isSigningUp
        appleIcon={appleIcon}
        googleIcon={googleIcon}
      />
      {/* DIVIDER */}
      <ROrDivider />
      {/* SIGNUP FORM */}
      <RFormEmailPassword
        submitTitle="Sign up"
        passwordShouldValidate
        mobileIconHide={mobileIconHide}
        mobileIconView={mobileIconView}
      />
      {/* Sign up navigation link */}
      <RLinkButton onPress={navigateAbout} customText={<AboutLink />} />
      {/* Sign up navigation link */}
      <RLinkButton onPress={navigateLogin} customText={<LoginLink />} />
    </RAccessTemplate>
  );
};
