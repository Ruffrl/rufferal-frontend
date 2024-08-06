import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-web-swiper';

// import tw from 'twrnc';
// import { observableAuthStore } from '../../../../store';
// import { RAccessTemplate } from '../../templates';

export const ROnboarding = ({
  mobile = false,
}: {
  mobile?: boolean;
  }): React.ReactElement => {
  const SlideOne = () => (
    <View style={[styles.slideContainer, styles.slide1]}>
      <Text>Slide 1</Text>
    </View>
  );
  const SlideTwo = () => (
    <View style={[styles.slideContainer, styles.slide2]}>
      <Text>Slide 2</Text>
    </View>
  );
  const SlideThree = () => (
    <View style={[styles.slideContainer, styles.slide3]}>
      <Text>Slide 3</Text>
    </View>
  );

  const MobileSwiper = () => (
    <>
      <SlideOne />
      <SlideTwo />
      <SlideThree />
    </>
  );
  const WebSwiper = () => (
    <Swiper>
      <SlideOne />
      <SlideTwo />
      <SlideThree />
    </Swiper>
  );

  return (
    <View style={styles.container}>
      {mobile ? <MobileSwiper /> : <WebSwiper />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
