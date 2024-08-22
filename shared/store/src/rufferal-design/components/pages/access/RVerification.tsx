import * as React from 'react';
import tw from 'twrnc';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

import {
  moderateScaleTW,
  observableAccountStore,
  RButton,
  RLinkButton,
  RPrototypeTemplate,
  verticalScaleTW,
} from '../../../..';

type ResetPasswordProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateCreateProfile?: () => void;
  navigateLogin: () => void;
};

export const RVerification = observer(
  ({
    mobileBackIcon,
    mobileCloseIcon,
    navigateBack,
    navigateCreateProfile,
    navigateLogin,
  }: ResetPasswordProps): React.ReactElement => {
    // BLARG - todo -> update to websocket to handle keeping server open to listen if email is confirmed instead of inefficient polling

    useEffect(() => {
      if (observableAccountStore.verified) return;

      // // BLARG DEV/DEMO
      // const interval = setInterval(() => {
      //   // check if account verified
      //   observableAccountStore.setVerified();
      // }, 5000);

      // return () => clearInterval(interval);

      const interval = setInterval(() => {
        // check if account verified
        console.log(
          'BLARG todo: handle this request to backend to check if account verified'
        );
      }, 60000);

      return () => clearInterval(interval);
    }, [observableAccountStore.verified]);

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

    return (
      <RPrototypeTemplate
        header="Verify your account"
        backNavigation={navigateBack}
        mobileBackIcon={mobileBackIcon}
        mobileCloseIcon={mobileCloseIcon}
      >
        <View style={tw`justify-between h-full`}>
          <View>
            <Text style={tw`text-${moderateScaleTW(14)} text-gray-500`}>
              Check your email for the verification link.
            </Text>
            <Text
              style={tw`font-bold text-${moderateScaleTW(
                14
              )}  text-gray-500 mt-${verticalScaleTW(4)}`}
            >
              {observableAccountStore.email || 'blarg@blarg.com'}
            </Text>
            {/* PROFILE CREATION */}
            <View style={tw`mt-${verticalScaleTW(80)}`}>
              <RButton
                title="Done"
                onPress={navigateCreateProfile}
                state={observableAccountStore.verified ? 'default' : 'disabled'}
              />
            </View>
            {/* DISCLAIMER */}
            <Text
              style={tw`text-${moderateScaleTW(
                14
              )} text-gray-500 text-center mt-${verticalScaleTW(40)}`}
            >
              Confirmation email can take up to 15 minutes to arrive.
            </Text>
          </View>
          <View>
            {/* LOG IN */}
            <RLinkButton onPress={navigateLogin} customText={<LoginLink />} />
          </View>
        </View>
      </RPrototypeTemplate>
    );
  }
);
