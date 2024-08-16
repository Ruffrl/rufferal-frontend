import * as React from 'react';

import { Image, Platform, Text } from 'react-native';
import tw from 'twrnc';
import {
  RAccessTemplate,
  RButton,
  RFormEmailPassword,
  RLinkButton,
} from '../..';
import { PageHeader } from '../../templates/RAccessTemplate';

type SignupProps = {
  androidGoogleImage?: React.ReactNode;
  navigateAbout: () => void;
  navigateLogin: () => void;
};

export const RSignup = ({
  androidGoogleImage,
  navigateAbout,
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
    <RAccessTemplate>
      {/* Header */}
      <PageHeader header="Create an account" />
      {/* Apple interaction button */}
      {isAndroid ? (
        androidGoogleImage
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
