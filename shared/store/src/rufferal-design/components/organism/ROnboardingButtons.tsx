import { Text, View } from 'react-native';
import tw from 'twrnc';
import { RButton, RLinkButton } from '../atom';
import { OnboardingNavigationProps } from '../pages';

export const ROnboardingButtons = ({
  onSignup,
  onLogin,
  onGuest,
}: OnboardingNavigationProps) => {
  const GuestText = () => (
    <Text style={tw`text-xs tracking-wide text-gray-800`}>
      Continue as <Text style={tw`font-bold`}>Guest</Text>
    </Text>
  );

  return (
    <View style={tw`gap-2 items-center`}>
      {/* Takes you to /signup */}
      <RButton title="Sign up" onPress={onSignup} />
      {/* Takes you to /login */}
      <RButton title="Log in" onPress={onLogin} type="secondary" />
      {/* Takes you to / */}
      <RLinkButton text={<GuestText />} onPress={onGuest} />
    </View>
  );
};
