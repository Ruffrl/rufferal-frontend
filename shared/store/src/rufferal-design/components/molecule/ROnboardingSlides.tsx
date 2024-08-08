import { Image, Platform, Text, View } from 'react-native';
import tw from 'twrnc';
import { SWIPER_IMAGE_STYLES } from '..';

const CONTAINER_STYLE = 'flex-1 items-center justify-center h-1/2 w-full';

export const ROnboardingSlideOne = ({
  image,
}: {
  image?: React.JSX.Element;
}) => {
  const isAndroid = Platform.OS === 'android';

  return (
    <View style={tw.style(CONTAINER_STYLE)}>
      {isAndroid ? (
        image
      ) : (
        <Image
          style={SWIPER_IMAGE_STYLES}
          source={require('../../../assets/pikisuperstar/onboarding-community/onboarding-community.jpg')}
          resizeMode="contain"
        />
      )}
      <Text style={tw`mt-8 text-center`}>
        Pet care recommended{`\n`}by people near you
      </Text>
    </View>
  );
};
export const ROnboardingSlideTwo = ({
  image,
}: {
  image?: React.JSX.Element;
}) => {
  const isAndroid = Platform.OS === 'android';

  return (
    <View style={tw.style(CONTAINER_STYLE)}>
      {isAndroid ? (
        image
      ) : (
        <Image
          style={SWIPER_IMAGE_STYLES}
          source={require('../../../assets/pikisuperstar/onboarding-booking/onboarding-booking.jpg')}
          resizeMode="contain"
        />
      )}
      <Text style={tw`mt-8 text-center`}>
        View frequently{`\n`}booked caregivers
      </Text>
    </View>
  );
};
export const ROnboardingSlideThree = ({
  image,
}: {
  image?: React.JSX.Element;
}) => {
  const isAndroid = Platform.OS === 'android';

  return (
    <View style={tw.style(CONTAINER_STYLE)}>
      {isAndroid ? (
        image
      ) : (
        <Image
          style={SWIPER_IMAGE_STYLES}
          source={require('../../../assets/pikisuperstar/onboarding-messaging/onboarding-messaging.jpg')}
          resizeMode="contain"
        />
      )}
      <Text style={tw`mt-8 text-center`}>
        Connect with{`\n`}in-app messaging
      </Text>
    </View>
  );
};
