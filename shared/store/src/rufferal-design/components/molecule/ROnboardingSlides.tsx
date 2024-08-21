import { Image, Platform, Text, View } from 'react-native';
import tw from 'twrnc';
import {
  SWIPER_IMAGE_STYLES,
  SWIPER_SLIDE_STYLE,
  SWIPER_TEXT_STYLES,
} from '..';

export const ROnboardingSlideOne = ({
  image,
}: {
  image?: React.JSX.Element;
}) => {
  const isAndroid = Platform.OS === 'android';

  return (
    <View style={tw.style(SWIPER_SLIDE_STYLE)}>
      {isAndroid ? (
        image
      ) : (
        <Image
          style={SWIPER_IMAGE_STYLES}
          source={require('../../../assets/pikisuperstar/onboarding-community/onboarding-community.jpg')}
          resizeMode="cover"
        />
      )}
      <Text style={tw.style(SWIPER_TEXT_STYLES)}>
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
    <View style={tw.style(SWIPER_SLIDE_STYLE)}>
      {isAndroid ? (
        image
      ) : (
        <Image
          style={SWIPER_IMAGE_STYLES}
          source={require('../../../assets/pikisuperstar/onboarding-booking/onboarding-booking.jpg')}
          resizeMode="cover"
        />
      )}
      <Text style={tw.style(SWIPER_TEXT_STYLES)}>
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
    <View style={tw.style(SWIPER_SLIDE_STYLE)}>
      {isAndroid ? (
        image
      ) : (
        <Image
          style={SWIPER_IMAGE_STYLES}
          source={require('../../../assets/pikisuperstar/onboarding-messaging/onboarding-messaging.jpg')}
          resizeMode="cover"
        />
      )}
      <Text style={tw.style(SWIPER_TEXT_STYLES)}>
        Connect with{`\n`}in-app messaging
      </Text>
    </View>
  );
};
