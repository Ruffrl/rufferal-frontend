import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';
import { ToastStoreContext } from '../../..';

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
    const toastStore = useContext(ToastStoreContext);
    const windowWidth = Dimensions.get('window').width;

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
            let backgroundColor = tw`bg-green-500`;
            let borderColor = tw`border-green-700`;
            switch (toast.type) {
              case 'error':
                backgroundColor = tw`bg-red-500`;
                borderColor = tw`border-red-700`;
                break;
              case 'warning':
                backgroundColor = tw`bg-yellow-300`;
                borderColor = tw`border-yellow-400`;
                break;
            }
            return (
              <View
                key={`${Date.now().toString(36)}#
            ${Math.random().toString().slice(2, 11)}-${toast.message}`}
                style={tw.style(
                  tw`absolute top-5 left-4 border-2 elevation-3 h-12 z-10 rounded pl-4 py-2 flex-row justify-between items-center`,
                  tw`w-[${windowWidth - 32}px]`,
                  backgroundColor,
                  borderColor,
                  { boxShadow: '4px 4px 0px 0px #d4d4d8' }
                )}
              >
                <Text>{toast.message}</Text>
                {/* Dismiss an error manually */}
                <Pressable
                  onPress={() => handleToastRemoval(toast.message)}
                  // ACCESIBILITY [TOUCH TARGETS] STANDARD - provide a minimum touch target sizes on mobile of 44×44px - we will do 48x48
                  style={tw`h-12 w-12 items-center justify-center`}
                >
                  {mobileCloseIcon || (
                    <Image
                      source={require('../../../assets/icons-512/close.png')}
                      style={tw`h-6 w-6`}
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
