import * as React from 'react';

import { Image, Text } from 'react-native';
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
  appleIcon?: React.JSX.Element;
  // googleIcon: React.JSX.Element
};

export const RLogin = ({
  navigateForgotPassword,
  navigateSignup,
  appleIcon,
}: LoginProps): React.ReactElement => {
  const SignupLink = () => (
    <Text style={tw`text-xs tracking-wide text-gray-800`}>
      New to Rufferal? <Text style={tw`font-bold`}>Sign up</Text>
    </Text>
  );

  const AppleIcon = () => {
    return (
      appleIcon || (
        <Image
          source={require('../../../../assets/empty-image.png')}
          resizeMode="contain"
          style={tw`w-1/6 h-1/6`}
        />
      )
    );
    // shared/store/src/rufferal-design/components/pages/access/RLogin.tsx
    // apps/rufferal/android/app/src/main/res/empty-image.png
    // shared/store/src/assets/empty-image.png
  };

  return (
    <RAccessTemplate>
      {/* Header */}
      <PageHeader header="Log in" />
      {/* Apple interaction button */}
      <Text>BLARG</Text>
      <AppleIcon />
      <Text>BLARG</Text>
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
