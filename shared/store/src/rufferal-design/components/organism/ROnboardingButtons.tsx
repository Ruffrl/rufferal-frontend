import { Text, View } from 'react-native';
import tw from 'twrnc';
import { moderateScaleTW, verticalScaleTW } from '../../utils';
import { RButton, RLinkButton } from '../atom';
import { OnboardingNavigationProps } from '../pages';

export const ROnboardingButtons = ({
  navigateSignup,
  navigateLogin,
  navigateGuest,
}: OnboardingNavigationProps) => {
  const ContinueGuestLink = () => (
    <Text
      style={tw`text-${moderateScaleTW(
        12
      )} tracking-wide text-zinc-900 mt-${verticalScaleTW(16)}`}
    >
      Continue as <Text style={tw`font-bold`}>Guest</Text>
    </Text>
  );

  return (
    <View
      style={tw`gap-${moderateScaleTW(8)} items-center mt-${verticalScaleTW(
        32
      )}`}
    >
      <>
        {/* Takes you to /signup */}
        <RButton title="Sign up" onPress={navigateSignup} />
      </>
      <>
        {/* Takes you to /login */}
        <RButton title="Log in" onPress={navigateLogin} type="secondary" />
        {/* Takes you to / */}
        <RLinkButton
          customText={<ContinueGuestLink />}
          onPress={navigateGuest}
        />
      </>
    </View>
  );
};
