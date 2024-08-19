import * as React from 'react';

import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Button, Image, Text, View } from 'react-native';
import tw from 'twrnc';
import {
  RAccessTemplate,
  RButton,
  RFormEmailPassword,
  RLinkButton,
} from '../..';
import { ToastStoreContext } from '../../../..';

type LoginProps = {
  appleIcon?: React.JSX.Element;
  googleIcon?: React.JSX.Element;
  // BLARG - URGENT TODO - how to handle image assets in shared way so android can handle and we can prevent prop passing
  // Current issue -> android assets exist in android folder (ios can use these too!), BUT andoid cannot hit shared assets the way web and ios can
  // Currently passing images from android down from Screen level - some with massive prop passing
  // Hopeful solution but needs research and testing - is there a way to design a library for image and icon assets that android can hit (and bundle) from?
  // Fail -> you cannot import directly from apps/rufferal for shared
  // Not successful, but willing to try again -> bundling shared/assets folder directly from android
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element
  mobileIconHide?: React.JSX.Element;
  mobileIconView?: React.JSX.Element;
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
    navigateForgotPassword,
    navigateSignup,
  }: LoginProps): React.ReactElement => {
    const toastStore = useContext(ToastStoreContext);

    const SignupLink = () => (
      <Text style={tw`text-sm tracking-wide text-zinc-900`}>
        New to Rufferal? <Text style={tw`font-bold`}>Sign up</Text>
      </Text>
    );

    const AppleIcon = () => {
      return (
        appleIcon || (
          <Image
            source={require('../../../../assets/empty-image.png')}
            resizeMode="contain"
            style={tw`w-[24px] h-[24px]`}
            tintColor="#6b7280"
          />
        )
      );
    };

    const GoogleIcon = () => {
      return (
        googleIcon || (
          <Image
            source={require('../../../../assets/empty-image.png')}
            resizeMode="contain"
            style={tw`w-[24px] h-[24px]`}
            tintColor="#6b7280"
          />
        )
      );
    };

    return (
      <RAccessTemplate
        header="Log in"
        backNavigation={() =>
          console.log(
            'BLARG priya add navigation to appropriate page with mobile and web handled'
          )
        }
        mobileBackIcon={mobileBackIcon}
        mobileCloseIcon={mobileCloseIcon}
      >
        <Button
          title="error"
          onPress={() =>
            toastStore.addToast({
              type: 'error',
              message: 'This is an error',
            })
          }
        />
        <Button
          title="warning"
          onPress={() =>
            toastStore.addToast({
              type: 'warning',
              message: 'This is a warning',
            })
          }
        />
        <Button
          title="success"
          onPress={() =>
            toastStore.addToast({
              type: 'success',
              message: 'This is a success',
            })
          }
        />
        {/* SOCIAL LOGIN */}
        <View style={tw`py-5 gap-3`}>
          {/* Apple interaction button */}
          <RButton
            titleIcon={<AppleIcon />}
            title="Log in with Apple"
            type="secondary"
          />
          {/* Google interaction button */}
          <RButton
            titleIcon={<GoogleIcon />}
            title="Log in with Google"
            type="secondary"
          />
        </View>
        {/* DIVIDER */}
        <View style={tw`justify-evenly flex-row items-center py-4`}>
          <View style={tw`border-b border-gray-200 w-[150px]`} />
          <Text style={tw`text-gray-500 text-xs`}>OR</Text>
          <View style={tw`border-b border-gray-200 w-[150px]`} />
        </View>
        {/* LOGIN FORM */}
        <RFormEmailPassword
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
