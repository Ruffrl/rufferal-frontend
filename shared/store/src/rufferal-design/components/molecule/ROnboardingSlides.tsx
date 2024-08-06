import { Text, View } from 'react-native';
import tw from 'twrnc';

const CONTAINER_STYLE = 'flex-1 items-center justify-center';

export const ROnboardingSlideOne = () => (
  <View style={tw.style(CONTAINER_STYLE, 'bg-[#1414c84d]')}>
    <Text>Welcome to Rufferal</Text>
  </View>
);
export const ROnboardingSlideTwo = () => (
  <View style={tw.style(CONTAINER_STYLE, 'bg-[#14c8144d]')}>
    <Text>Something is explained here</Text>
  </View>
);
export const ROnboardingSlideThree = () => (
  <View style={tw.style(CONTAINER_STYLE, 'bg-[#c814144d]')}>
    <Text>Cute little wrap up</Text>
  </View>
);
