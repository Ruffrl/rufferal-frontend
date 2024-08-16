import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { ToastStoreContext } from '../../..';

export const RGlobalError = observer(() => {
  // We have access to ToastStore
  //  which can return an array of toasts
  const toastStore = useContext(ToastStoreContext);

  // Display a string

  // Can display errors stacked and in an absolute position
  //  -> after timeout, remove the string from array
  setTimeout(() => {
    if (toastStore.toasts.filter((t) => t.status === 'expired').length > 0) {
      console.log('HIT TIMEOUT');
      toastStore.removeExpired();
      console.log(toastStore.toasts.map((t) => t.message));
    }
  }, 10000);

  // Errors can be dismissed
  //  -> if user dismisses, remove the string from array

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
          toast.status = 'expired';
          return (
            <View
              key={`${Date.now().toString(36)}-${toast.message}`}
              style={tw.style(
                tw`absolute top-20 right-4 border-2 w-5/6 elevation-3 h-[50px] z-10 rounded-sm`,
                backgroundColor,
                borderColor,
                { boxShadow: '8px 12px 5px 0px rgba(24,24,27,0.3)' }
              )}
            >
              <Text>{toast.message}</Text>
            </View>
          );
        })}
    </>
  );
});
