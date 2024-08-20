import * as React from 'react';

import { Platform, Text } from 'react-native';
import tw from 'twrnc';
import {
  AccessForm,
  FormErrorProps,
  moderateScaleTW,
  observableAuthStore,
  RAccessTemplate,
  RFormEmailPassword,
  RLinkButton,
  ROrDivider,
  RSocialOnboarding,
  verticalScaleTW,
  User,
} from '../../../..';

type SignupResponse = {
  data: {
    id: number;
    type: 'user';
    attributes: User;
  };
};

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
  navigateVerification?: () => void;
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
  navigateVerification,
}: SignupProps): React.ReactElement => {
  const AboutLink = () => (
    <Text
      style={tw`
        text-center
        tracking-wide
        text-gray-500
        mt-${verticalScaleTW(8)}
        text-${moderateScaleTW(12)} 
      `}
    >
      By clicking Sign up, you are agreeing to our{' '}
      <Text style={tw`font-bold underline`}>Service Agreement</Text> and{' '}
      <Text style={tw`font-bold underline`}>Privacy Policy</Text>
    </Text>
  );

  const LoginLink = () => (
    <Text
      style={tw`
      tracking-wide
      text-zinc-900
      mt-${verticalScaleTW(32)}
      text-${moderateScaleTW(12)} 
    `}
    >
      Already have an account? <Text style={tw`font-bold `}>Log in</Text>
    </Text>
  );

  const handleSignup = async (data: AccessForm) => {
    if (process.env['NODE_ENV'] === 'development') {
      console.log('BLARG Priya handle signup with your backend', data);
      navigateVerification?.();
    } else {
      // TBD
      const url =
        Platform.OS === 'android'
          ? 'http://10.0.2.2:5000/signup'
          : 'http://localhost:5000/signup';
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            // email: 'rock@gmail.com',
            // password: 'password',
            email: data.email,
            password: data.password,
          },
        }),
      });
  
      if (!response.ok) {
        const error: FormErrorProps = await response.json();
        throw new Error(error.error);
      } else {
        const result: SignupResponse = await response.json();
        // result
        // =>
        // {
        //   "data": {
        //       "id": "1",
        //       "type": "user",
        //       "attributes": {
        //           "id": 1,
        //           "email": "rock@gmail.com",
        //           "verified": true,
        //           "forename": "Sam",
        //           "surname": "Thomas",
        //           "avatar": null,
        //           "species": "OWNER"
        //         }
        //     }
        // }
        result.data.attributes &&
          observableAuthStore.setUser(result.data.attributes);
        console.log('result is: ', JSON.stringify(result, null, 4));
  
        const authHeader = response.headers.get('Authorization') || undefined;
        // Mobile navigation will automatically happen if token status changes
        authHeader && observableAuthStore.setAuth(authHeader);
        // Web navigation only
        navigateVerification?.();
      }
    }
  };

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
        handleSignup={(data) => handleSignup(data)}
        mobileIconHide={mobileIconHide}
        mobileIconView={mobileIconView}
        passwordShouldValidate
        submitTitle="Sign up"
      />
      {/* Sign up navigation link */}
      <RLinkButton onPress={navigateAbout} customText={<AboutLink />} />
      {/* Sign up navigation link */}
      <RLinkButton onPress={navigateLogin} customText={<LoginLink />} />
    </RAccessTemplate>
  );
};
