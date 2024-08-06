import { StyleSheet, Text, View } from 'react-native';
// import tw from 'twrnc';

export const ROnboardingSlideOne = () => (
  <View style={[styles.slideContainer, styles.slide1]}>
    <Text>Slide 1</Text>
  </View>
);
export const ROnboardingSlideTwo = () => (
  <View style={[styles.slideContainer, styles.slide2]}>
    <Text>Slide 2</Text>
  </View>
);
export const ROnboardingSlideThree = () => (
  <View style={[styles.slideContainer, styles.slide3]}>
    <Text>Slide 3</Text>
  </View>
);

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)',
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)',
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)',
  },
});
