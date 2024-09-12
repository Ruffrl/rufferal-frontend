# Em dash

–

# My Todo

FRONTEND

- Add my pets dashboard
- pet create - details
- pet create - personality
- pet create - careplan
- current pets management
- Add a menu/navigation
- Add draft dashboard
- Handle "logged in" vs "non logged in" dashboard

FRONTEND - NEXT

- Test fixing keyboard covering/moving components https://reactnative.dev/docs/keyboardavoidingview
- Connect login to backend
- Connect signup to backend
- Connect forgotpassword to backend - dependent on passwordless login though
- Connect get account to backend
- Connect get profile to backend
- Connect update profile to backend
- Research android image assets
- Manage onboarding seen "once"

BACKEND

- Manage passwordless login and verification
- Setup refresh vs access tokens
- Setup whitelisting for JWT tokens
- Begin generating very simple and basic search functionality (more likely, setup DBs, tables, queries, etc)

# Draft workflows

Page 0

- "/onboarding"
- Splash/Onboarding
- should only be shown once per user
  Page 1
- "/login"
- Login
  Page 2
- "/signup"
- Sign up
  Page 3
- "/verification"
- Email verification
  Page 5
- "/create-account"
- Create account
  Page 4 (ROOT)
- "/"
- Search and Browse [Dashboard]
- (logged in) -> can see profiles, accounts, messages, bookings, etc
- (guest)
  -> can search and browse caretakers, can see rufferals, but cannot book;
  -> does not see profiles or accounts; messages, bookings, and other features go straight to sign up screen
  Page 6
- "/my-profile"
- See your own profile
  Page 7
- "/profiles/:id"
- Others seeing your profile
  Page 8
- "/caretakers/:id"
- Seeing a caretaker profile
  Page 9
- "/profiles/:id/pets"
- Manage pet profiles
  Page 10
- "/profiles/:id/pets/:id"
- Manage a single pet's profiles OR see a pet profile

# Second draft workflow

Mobile workflow (guest) - Download and open app - Land on onboarding - Can skip to /login - Can skip to /signup - Can skip to / (GuestDashboard) - DATA NOTE: If they click away to any of these screens - globally update onboarding_seen value to ensure they can't see onboarding again - Exit app and reopen should skip onboarding - Lands you on one of the following: - Access Dashboard (signed in) - Login (can hit sign up and guest dashboard from here)

    - Guest dashboard
        - can hit sign up if interact with certain features
        - can hit sign up if select option from... menu?

    - Login
        - If not verified, takes you to email verification
        - If no profile, takes you to create account
        - Takes you to Access Dashboard
    - Forgot password
        - If not verified, takes you to email verification
        - If no profile, takes you to create account
        - Takes you through reset flow, then login, then access dashboard
    - Sign up
        - Email/Password
        - Email verification
        - Takes you to create account

Mobile workflow (access) - Create Account - name, photo, user type(s) - Access Dashboard - search and browse - can navigate to bookings, messages, profiles, etc - Bookings - Your Profile - Your pet profiles - Caretaker profiles - Other user profiles - Other pet profiles - Notifications - Messages - Account Settings
Web-mobile workflow (guest) - Visit site - app "ad" at top - main view is search and browse - scroll down is all the onboarding education - menu lets you sign in or sign up - hitting access features sends you to sign in or sign up "to access more features" - Login - If not verified, takes you to email verification - If no profile, takes you to create account - Takes you to Access Dashboard - Forgot password - If not verified, takes you to email verification - If no profile, takes you to create account - Takes you through reset flow, then login, then access dashboard - Sign up - Email/Password - Email verification - Takes you to create account
Web-desktop workflow (guest) - Same as mobile but not mobile screen designed

# Boilerplate - component

```javascript
import * as React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

type BlargProps = {
  mobileBackIcon?: React.JSX.Element,
  mobileCloseIcon?: React.JSX.Element,
  navigateBack: () => void,
  navigateCreatePet?: () => void,
};

export const Blarg = ({ mobileBackIcon, mobileCloseIcon, navigateBack, navigateCreatePet }: BlargProps) => {
  return <View style={tw``}></View>;
};
```

# Dev playground

```javascript
import { useContext } from 'react';
import { ToastStoreContext } from './';
import { Button, View } from 'react-native';

const toastStore = useContext(ToastStoreContext);

export const DevPlayground = () => (
  <View>
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
  </View>
);
```

# React and React Native Upgrade and errors (needed for react-camera-pro)

// ERROR///

"react": "18.2.0",
"react-dom": "18.0.0",
"react-hook-form": "^7.52.1",
"react-native": "0.74.1",

"react": "^18.3.1",
"react-camera-pro": "^1.4.0",
"react-dom": "^18.3.1",
"react-hook-form": "^7.52.1",
"react-native": "^0.75.0-rc.7",

"@types/react": "18.3.1",
"@types/react-dom": "18.3.0",

I'm having the same problem with "react-native 0.74.3"

I have followed the below steps and able to build application successfully.

Step-1 Update package.json file for "react-native": "0.74.3" to "react-native": "0.74.4"

Step-2 Update the distributionUrl inside the gradle-wrapper.properties file
distributionUrl=https://services.gradle.org/distributions/gradle-8.7-bin.zip

Step-3 Add autolinkLibrariesWithApp() within the app/build.gradle file.
react {
autolinkLibrariesWithApp()
}

Step-4 Remove below lines from app/build.gradle file.
apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle")
applyNativeModulesAppBuildGradle(project)

Step-5 Remove below line from settings.gradle file.
apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)

Step-6 Add below lines above the rootProject.name property.
pluginManagement { includeBuild("../node_modules/@react-native/gradle-plugin") }
plugins { id("com.facebook.react.settings") }
extensions.configure(com.facebook.react.ReactSettingsExtension){ ex -> ex.autolinkLibrariesFromCommand() }

rootProject.name = 'ProjectName'

Step-7 Delete the .build, .gradle folder from android

Step-8 Remove node_modules, yarn.lock file and run yarn android command to build the application

Thanks!!

# Next

- slider (form)
  - can default to middle (3)
  - can know if it is untouched
  - 1 2 3 4 5

/\*

- TESTING gesture handler and reanimated libraries
- react-native-gesture-handler
- react-native-reanimated
- https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/
- "@babel/plugin-proposal-export-namespace-from",
- "react-native-reanimated/plugin"
- presets: [
  ['module:@react-native/babel-preset', { useTransformReactJSX: true }],
  ],
- <!-- apps/webApp/webpack.config.js -->
- const webpack = require('webpack');
- new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(
  process.env.NODE_ENV || 'development'
  ),
  **DEV**: process.env.NODE_ENV !== 'production' || true,
  }),
  \*/

* bottom sheet modal with keyboard (form)
* date picker (form)
* boolean (form)
* multiline input (form)
* toggleable section

// I should refactor to ensure form inputs can be agnostic of your form management and shouldn't assume that we have access to react-hook-form

BottomSheet
MultilineInput
RangeSlider
SingleSlider
DatePicker
Toggle
Section
UploadAvatar

Input - text vs number (should prompt number keyboard)
Radio
RadioCard
Checkbox
CheckboxCard

import React, {useState, useEffect} from 'react';
import {Keyboard, Text, TextInput, StyleSheet, View} from 'react-native';

const Example = () => {
const [keyboardStatus, setKeyboardStatus] = useState('');

useEffect(() => {
const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
setKeyboardStatus('Keyboard Shown');
});
const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
setKeyboardStatus('Keyboard Hidden');
});

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };

}, []);

return (
<View style={style.container}>
<TextInput
        style={style.input}
        placeholder="Click here…"
        onSubmitEditing={Keyboard.dismiss}
      />
<Text style={style.status}>{keyboardStatus}</Text>
</View>
);
};

const style = StyleSheet.create({
container: {
flex: 1,
padding: 36,
},
input: {
padding: 10,
borderWidth: 0.5,
borderRadius: 4,
},
status: {
padding: 10,
textAlign: 'center',
},
});

export default Example;

I have a button and when it is pressed I would like it to open the keyboard and focus on a text input component.

For a minimal code example what I am trying to do is this-

      <View>
          <AddSomething
            textChange={textInput => this.setState({ textInput })}
            addNewItem={this.addItem.bind(this)}
            textInput={this.state.textInput}
            ref={not sure what goes here} //passing these as props to a text input
          />
          <FloatingButton tapToAddHandler={this.onFloatingButtonPress.bind(this)} />
      </View>

then some helper function where I handle the button press(this.onFloatingButtonPress);

First declare your AddSomething as below :

const AddSomething = React.forwardRef((props, ref) => (
<TextInput
ref={ref}
//your other code
/>
));
Now you can use ref and able to focus your AddSomething component as below:

      <View>
          <AddSomething
            textChange={textInput => this.setState({ textInput })}
            addNewItem={this.addItem.bind(this)}
            textInput={this.state.textInput}
            ref={(ref) => { this.textInputField = ref }}
          />
          <FloatingButton tapToAddHandler={this.onFloatingButtonPress.bind(this)} />
      </View>

Here is your onFloatingButtonPress method :

onFloatingButtonPress() {
this.textInputField.focus();
}

module.exports = function (api) {
api.cache(true);

    if (
      process.env.NX_TASK_TARGET_TARGET === 'build' ||
      process.env.NX_TASK_TARGET_TARGET?.includes('storybook')
    ) {
      return {
        presets: [
          [
            '@nx/react/babel',
            {
              runtime: 'automatic',
            },
          ],
        ],
      };
    }

    return {
      presets: ['module:@react-native/babel-preset'],
      plugins: [],
    };

};
