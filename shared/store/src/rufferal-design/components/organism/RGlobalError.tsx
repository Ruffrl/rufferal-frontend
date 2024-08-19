import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Dimensions, Image, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';
import { ToastStoreContext } from '../../..';

export const RGlobalError = observer(() => {
  // We have access to ToastStore
  // which can return an array of toasts
  const toastStore = useContext(ToastStoreContext);
  const windowWidth = Dimensions.get('window').width;

  // Can display errors stacked and in an absolute position
  //  -> after timeout, remove the string from array
  /* HANDLE TOAST REMOVAL
   * This does not find and remove expired toasts as soon as expiration hits
   * But instead look for any expired toasts every 10 seconds
   * and remove all expired toasts as a block
   */
  setTimeout(() => {
    // if any toasts exist, try to remove expired
    if (toastStore.toasts.length > 0) {
      console.log('HIT TIMEOUT');
      console.log(toastStore.toasts.map((t) => t.message));
      toastStore.removeExpired();
      console.log(toastStore.toasts.map((t) => t.message));
    }
    // if (toastStore.toasts.filter((t) => t.status === 'expired').length > 0) {
    //   console.log('HIT TIMEOUT');
    //   toastStore.removeExpired();
    //   console.log(toastStore.toasts.map((t) => t.message));
    // }
    // if (messages.length > 0) {
    //   console.log('HIT TIMEOUT');
    //   console.log(toastStore.toasts.map((t) => t.message));
    //   messages.map((message) => toastStore.removeToast(message));
    //   console.log(toastStore.toasts.map((t) => t.message));
    // }
  }, 10000);

  // Errors can be dismissed
  //  -> if user dismisses, remove the string from array
  /* HANDLE MANUAL TOAST REMOVAL */
  const handleToastRemoval = (message: string) => {
    toastStore.removeToast(message);
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
                // { boxShadow: '8px 12px 5px 0px rgba(24,24,27,0.3)' }
              )}
            >
              {/* Display a string */}
              <Text>{toast.message}</Text>
              {/* Dismiss an error manually */}
              <Pressable
                onPress={() => handleToastRemoval(toast.message)}
                // ACCESIBILITY [TOUCH TARGETS] STANDARD - provide a minimum touch target sizes on mobile of 44×44px - we will do 48x48
                style={tw`h-12 w-12 items-center justify-center`}
              >
                <Image
                  source={require('../../../assets/icons-16/close.png')}
                  style={tw`h-6 w-6`}
                />
                {/* {closeIcon || <Image source={require('../../../assets/icons-16/close.png')} />} */}
              </Pressable>
            </View>
          );
        })}
    </>
  );
});
