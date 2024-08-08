import * as React from 'react';

import { Text } from 'react-native';
import tw from 'twrnc';
import {
  RAccessTemplate,
  RButton,
  RFormEmailPassword,
  RLinkButton,
} from '../..';
import { PageHeader } from '../../templates/RAccessTemplate';

type SignupProps = {
  navigateAbout: () => void;
  navigateLogin: () => void;
};

export const RSignup = ({
  navigateAbout,
  navigateLogin,
}: SignupProps): React.ReactElement => {
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
      <RButton title="🍎 Log in with Apple" type="secondary" />
      {/* Google interaction button */}
      <RButton title="🇬 Log in with Google" type="secondary" />
      {/* Break */}
      <Text>------- or ---------</Text>
      {/* SIGNUP FORM */}
      <RFormEmailPassword submitTitle="Sign up" passwordShouldValidate />
      {/* Sign up navigation link */}
      <RLinkButton onPress={navigateAbout} text={<AboutLink />} />
      {/* Sign up navigation link */}
      <RLinkButton onPress={navigateLogin} text={<LoginLink />} />
    </RAccessTemplate>
  );
};
