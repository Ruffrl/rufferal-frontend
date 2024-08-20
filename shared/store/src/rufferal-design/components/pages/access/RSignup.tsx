import * as React from 'react';

import { Image, Platform, Text } from 'react-native';
import tw from 'twrnc';
import {
  RAccessTemplate,
  RButton,
  RFormEmailPassword,
  RLinkButton,
  RPageHeader,
} from '../..';

type SignupProps = {
  appleIcon?: React.JSX.Element;
  googleIcon?: React.ReactNode;
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
      {/* Header */}
      <RPageHeader header="Create an account" />
      {/* Apple interaction button */}
      {isAndroid ? (
        googleIcon
      ) : (
        <Image
          style={tw`w-1/5 h-1/5`}
          source={require('../../../../assets/google-assets/Web/png@4x/neutral/web_neutral_rd_na@4x.png')}
        />
      )}
      <RButton title="🍎 Log in with Apple" type="secondary" />
      {/* Google interaction button */}
      <RButton title="🇬 Log in with Google" type="secondary" />
      {/* Break */}
      <Text>------- or ---------</Text>
      {/* SIGNUP FORM */}
      <RFormEmailPassword submitTitle="Sign up" passwordShouldValidate />
      {/* Sign up navigation link */}
      <RLinkButton onPress={navigateAbout} customText={<AboutLink />} />
      {/* Sign up navigation link */}
      <RLinkButton onPress={navigateLogin} customText={<LoginLink />} />
    </RAccessTemplate>
  );
};
