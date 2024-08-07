import * as React from 'react';
import { Text, View } from 'react-native';

export const ROnboardingButtons = () => {
  return (
    <View>
      {/* Takes you to /signup */}
      <Text>Sign up</Text>
      {/* Takes you to /login */}
      <Text>Log in</Text>
      {/* Takes you to / */}
      <Text>Continue as guest</Text>
    </View>
  );
};
