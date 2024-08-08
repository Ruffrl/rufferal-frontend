import * as React from 'react';

import { Text } from 'react-native';
import tw from 'twrnc';
import { RAccessTemplate } from '../../templates';

export const REmailVerification = (): React.ReactElement => {
  return (
    <RAccessTemplate>
      {/* Header */}
      <Text>Verify your account</Text>
      {/* Helper test */}
      <Text>Check your email for the verification link.</Text>
      <Text style={tw`font-bold`}>someemail@mailio.com</Text>
      {/* Done should only show up if verification is successful? */}
      <Text>Done</Text>
      {/* Helper test */}
      <Text>Didn't get a link? Wait a few minutes and try again.</Text>
      {/* Log in navigation link */}
      <Text>
        Already have an account? <Text style={tw`font-bold`}>Log in</Text>
      </Text>
    </RAccessTemplate>
  );
};
