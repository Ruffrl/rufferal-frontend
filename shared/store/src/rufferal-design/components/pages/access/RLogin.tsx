import * as React from 'react';
import tw from 'twrnc';

import { observer } from 'mobx-react-lite';
import { Platform, Text } from 'react-native';

import {
  AccessForm,
  FormErrorProps,
  moderateScaleTW,
  observableAccountStore,
  RAccessTemplate,
  RFormEmailPassword,
  RLinkButton,
  ROrDivider,
  RSocialOnboarding,
  User,
  verticalScaleTW,
} from '../../../..';

type LoginResponse = {
  data: {
    id: number;
    type: 'user';
    attributes: User;
  };
};

// BLARG - URGENT TODO - how to handle image assets in shared way so android can handle and we can prevent prop passing
// Current issue -> android assets exist in android folder (ios can use these too!), BUT andoid cannot hit shared assets the way web and ios can
// Currently passing images from android down from Screen level - some with massive prop passing
// Hopeful solution but needs research and testing - is there a way to design a library for image and icon assets that android can hit (and bundle) from?
// Fail -> you cannot import directly from apps/rufferal for shared
// Not successful, but willing to try again -> bundling shared/assets folder directly from android
type LoginProps = {
  appleIcon?: React.JSX.Element;
  googleIcon?: React.JSX.Element;
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  mobileIconHide?: React.JSX.Element;
  mobileIconView?: React.JSX.Element;
  navigateBack: () => void;
  navigateDashboard?: () => void;
  navigateForgotPassword: () => void;
  navigateSignup: () => void;
};

export const RLogin = observer(
  ({
    appleIcon,
    googleIcon,
    mobileBackIcon,
    mobileCloseIcon,
    mobileIconHide,
    mobileIconView,
    navigateBack,
    navigateDashboard,
    navigateForgotPassword,
    navigateSignup,
  }: LoginProps): React.ReactElement => {
    const isIos = Platform.OS === 'ios';

    const handleLogin = async (data: AccessForm) => {
      if (process.env['NODE_ENV'] === 'development') {
        console.log('BLARG Priya - handle login with your backend', data);
        navigateDashboard?.();
      } else {
        const url =
          Platform.OS === 'android'
            ? 'http://10.0.2.2:5000/login'
            : 'http://localhost:5000/login';

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
          const result: LoginResponse = await response.json();
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
            observableAccountStore.setUser(result.data.attributes);
          console.log('result is: ', JSON.stringify(result, null, 4));

          const authHeader = response.headers.get('Authorization') || undefined;
          // Mobile navigation will automatically happen if token status changes
          authHeader && observableAccountStore.setAuth(authHeader);
          // Web navigation only
          navigateDashboard?.();
        }
      }
    };

    const SignupLink = () => (
      <Text
        style={tw.style(
          `tracking-wide
          text-zinc-900
          mt-${verticalScaleTW(16)}
          text-${moderateScaleTW(12)}`,
          isIos && tw`mb-${verticalScaleTW(16)}`
        )}
      >
        New to Rufferal? <Text style={tw`font-bold`}>Sign up</Text>
      </Text>
    );

    return (
      <RAccessTemplate
        header="Log in"
        backNavigation={navigateBack}
        mobileBackIcon={mobileBackIcon}
        mobileCloseIcon={mobileCloseIcon}
      >
        {/* SOCIAL LOGIN */}
        <RSocialOnboarding appleIcon={appleIcon} googleIcon={googleIcon} />
        {/* DIVIDER */}
        <ROrDivider />
        {/* LOGIN FORM */}
        <RFormEmailPassword
          handleLogin={(data) => handleLogin(data)}
          optionalElement={
            <RLinkButton
              onPress={navigateForgotPassword}
              text="Forgot password?"
              alignRight
            />
          }
          mobileIconHide={mobileIconHide}
          mobileIconView={mobileIconView}
        />
        {/* SIGN UP */}
        <RLinkButton onPress={navigateSignup} customText={<SignupLink />} />
      </RAccessTemplate>
    );
  }
);
