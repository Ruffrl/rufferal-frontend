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

type LoginProps = {
  navigateForgotPassword: () => void;
  navigateSignup: () => void;
};

export const RLogin = ({
  navigateForgotPassword,
  navigateSignup,
}: LoginProps): React.ReactElement => {
  const SignupLink = () => (
    <Text style={tw`text-xs tracking-wide text-gray-800`}>
      New to Rufferal? <Text style={tw`font-bold`}>Sign up</Text>
    </Text>
  );

  return (
    <RAccessTemplate>
      {/* Header */}
      <PageHeader header="Log in" />
      {/* Apple interaction button */}
      <RButton title="🍎 Log in with Apple" type="secondary" />
      {/* Google interaction button */}
      <RButton title="🇬 Log in with Google" type="secondary" />
      {/* Break */}
      <Text>------- or ---------</Text>
      {/* LOGIN FORM */}
      <RFormEmailPassword
        optionalElement={
          <RLinkButton
            onPress={navigateForgotPassword}
            text="Forgot password?"
          />
        }
      />
      {/* Sign up navigation link */}
      <RLinkButton onPress={navigateSignup} text={<SignupLink />} />
    </RAccessTemplate>
  );
};
