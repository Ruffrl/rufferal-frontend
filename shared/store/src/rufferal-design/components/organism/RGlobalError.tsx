import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import tw from 'twrnc';
import { ToastStoreContext } from '../../..';
import {
  GLOBAL_ANDROID_SHADOW,
  GLOBAL_PROTOTYPE_COLORS,
  GLOBAL_ICON_SIZE,
  GLOBAL_IOS_SHADOW,
  GLOBAL_MIN_PRESS_SIZE,
  GLOBAL_WEB_SHADOW,
  GLOBAL_X_PADDING,
  horizontalScale,
  horizontalScaleTW,
  verticalScaleTW,
} from '../../utils';

const ERROR_CONTAINER_STYLES = tw`
  absolute
  border-2
  z-10
  rounded
  flex-row
  justify-between
  items-center
  top-${verticalScaleTW(20)}
  left-${horizontalScaleTW(GLOBAL_X_PADDING)}
  h-${verticalScaleTW(48)}
  pl-${verticalScaleTW(16)}
  py-${verticalScaleTW(8)}
`;

/* BLARG - how to optimize later
 * OPTION 1:
 * Rather than poll (https://en.wikipedia.org/wiki/Polling_(computer_science)) for updates
 * it would be more efficient to modify the server API to accept long-lasting connections
 * and stream (https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams)
 * updates to the client. Even though ReadableStreams are now standardized, you'll probably
 * find more discussion around WebSocket implementations at this point in time.
 * OPTION 2:
 * tbd
 */
export const RGlobalError = observer(
  ({ mobileCloseIcon }: { mobileCloseIcon?: React.JSX.Element }) => {
    /* DEVISE INFORMATION */
    const windowWidth = Dimensions.get('window').width;
    const isIos = Platform.OS === 'ios';
    const isAndroid = Platform.OS === 'android';

    /* GLOBAL VALUES */
    const toastStore = useContext(ToastStoreContext);

    /* HANDLE TOAST REMOVAL */
    useEffect(() => {
      if (toastStore.toasts.length === 0) return;
      const countdownInterval = setInterval(() => {
        toastStore.removeExpired();
      }, 3000);

      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(countdownInterval);
    }, [toastStore.toasts.length]);

    /* HANDLE MANUAL TOAST REMOVAL */
    const handleToastRemoval = (message: string) => {
      toastStore.removeToast({ message });
    };

    return (
      <>
        {toastStore.toasts.length > 0 &&
          toastStore.toasts.map((toast) => {
            let statusPrefix = '';
            let backgroundColor = tw`bg-green-500`;
            let borderColor = tw`border-green-700`;
            switch (toast.type) {
              case 'error':
                statusPrefix = 'ERROR: ';
                backgroundColor = tw`bg-red-500`;
                borderColor = tw`border-red-700`;
                break;
              case 'warning':
                statusPrefix = 'WARN: ';
                backgroundColor = tw`bg-yellow-300`;
                borderColor = tw`border-yellow-500`;
                break;
            }
            return (
              <View
                key={`${Date.now().toString(36)}#
            ${Math.random().toString().slice(2, 11)}-${toast.message}`}
                style={tw.style(
                  ERROR_CONTAINER_STYLES,
                  // Absolute width size calculated by subtracting scaled Xpadding
                  tw`w-[${
                    windowWidth - horizontalScale(GLOBAL_X_PADDING) * 2
                  }px]`,
                  backgroundColor,
                  borderColor,
                  // IOS requires a taller top padding/margin due to status bar height
                  isIos && tw`absolute top-${verticalScaleTW(40)}`,
                  // Shadows
                  isIos && GLOBAL_IOS_SHADOW,
                  isAndroid && GLOBAL_ANDROID_SHADOW,
                  !isIos && !isAndroid && GLOBAL_WEB_SHADOW
                )}
              >
                <Text style={tw`text-zinc-900 font-semibold`}>
                  {statusPrefix}
                  {toast.message}
                </Text>
                {/* Dismiss an error manually */}
                <Pressable
                  onPress={() => handleToastRemoval(toast.message)}
                  // ACCESIBILITY [TOUCH TARGETS] STANDARD - provide a minimum touch target sizes on mobile of 44×44px - we will do 48x48
                  style={tw.style(
                    GLOBAL_MIN_PRESS_SIZE,
                    tw`items-center justify-center`
                  )}
                >
                  {mobileCloseIcon || (
                    <Image
                      source={require('../../../assets/icons-512/close.png')}
                      style={tw.style(GLOBAL_ICON_SIZE)}
                      resizeMode="contain"
                      tintColor={GLOBAL_PROTOTYPE_COLORS.tertiary.hex}
                    />
                  )}
                </Pressable>
              </View>
            );
          })}
      </>
    );
  }
);
