import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';
import { ToastStoreContext } from '../../..';

export const RGlobalError = observer(
  ({ mobileCloseIcon }: { mobileCloseIcon?: React.JSX.Element }) => {
    const toastStore = useContext(ToastStoreContext);
    const windowWidth = Dimensions.get('window').width;

    /* HANDLE TOAST REMOVAL
     * This does not find and remove expired toasts as soon as expiration hits
     * But instead look for any expired toasts every 10 seconds
     * and remove all expired toasts as a block
     */
    setTimeout(() => {
      // if any toasts exist, try to remove expired (any toast from more than 10 seconds ago)
      if (toastStore.toasts.length > 0) {
        console.log('HIT TIMEOUT');
        console.log(toastStore.toasts.map((t) => t.message));
        toastStore.removeExpired();
        console.log(toastStore.toasts.map((t) => t.message));
      }
    }, 10000);

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
