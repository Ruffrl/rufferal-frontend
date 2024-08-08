import { Text, View } from 'react-native';
import tw from 'twrnc';
import { RButton, RLinkButton } from '../atom';
import { OnboardingNavigationProps } from '../pages';

export const ROnboardingButtons = ({
  navigateSignup,
  navigateLogin,
  navigateGuest,
}: OnboardingNavigationProps) => {
  const ContinueGuestLink = () => (
    <Text style={tw`text-xs tracking-wide text-gray-800`}>
      Continue as <Text style={tw`font-bold`}>Guest</Text>
    </Text>
  );

  return (
    <View style={tw`gap-2 items-center`}>
      {/* Takes you to /signup */}
      <RButton title="Sign up" onPress={navigateSignup} />
      {/* Takes you to /login */}
      <RButton title="Log in" onPress={navigateLogin} type="secondary" />
      {/* Takes you to / */}
      <RLinkButton text={<ContinueGuestLink />} onPress={navigateGuest} />
    </View>
  );
};
