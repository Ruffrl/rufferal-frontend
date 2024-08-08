import {
  ROnboardingSlideOne,
  ROnboardingSlideThree,
  ROnboardingSlideTwo,
  SWIPER_CONTAINER_STYLES,
} from '@rufferal-frontend/store';
import Swiper from 'react-native-web-swiper';
import tw from 'twrnc';

/* 
 * DEPRECATION WARNING from react-native-web-swiper
 * TouchableOpacity is deprecated. Please use Pressable.
warnOnce @ index.js:24
TouchableOpacity @ index.js:28
renderWithHooks @ react-dom.development.js:16141
updateForwardRef @ react-dom.development.js:19968
beginWork @ react-dom.development.js:22391
beginWork$1 @ react-dom.development.js:27219
performUnitOfWork @ react-dom.development.js:26395
workLoopSync @ react-dom.development.js:26303
renderRootSync @ react-dom.development.js:26271
performConcurrentWorkOnRoot @ react-dom.development.js:25577
workLoop @ scheduler.development.js:266
flushWork @ scheduler.development.js:239
performWorkUntilDeadline @ scheduler.development.js:533
Show 13 more frames
Show lessUnderstand this warning
index.js:24 focusable is deprecated.
 * Maybe setup an issue: https://github.com/reactrondev/react-native-web-swiper/issues
 */

export const WebOnboardingSwiper = () => {
  return (
    <Swiper
      containerStyle={SWIPER_CONTAINER_STYLES}
      controlsProps={{
        dotsTouchable: true,
        prevTitleStyle: tw`text-gray-600 font-semibold`,
        nextTitleStyle: tw`text-gray-600 font-semibold`,
        dotActiveStyle: tw`bg-gray-600`,
        dotProps: { badgeStyle: tw`bg-gray-300` },
      }}
    >
      <ROnboardingSlideOne />
      <ROnboardingSlideTwo />
      <ROnboardingSlideThree />
    </Swiper>
  );
};
