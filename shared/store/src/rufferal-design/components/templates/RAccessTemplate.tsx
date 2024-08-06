import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';
import { RFormError } from '..';
import { ToastStoreContext } from '../../../store';
import { MobileNavigation, WebNavigation } from '../../navigation';

export const RAccessTemplate = observer(
  ({ children }: React.PropsWithChildren): React.ReactElement => {
    const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
    const toastStore = useContext(ToastStoreContext);
    // console.log('BLARG toastStore', toastStore);
    // console.log(
    //   'BLARG toastStore.messages.toString()',
    //   toastStore.messages.toString()
    // );

    return (
      <View
        style={tw.style(
          'items-center mx-2 my-3 flex-1',
          // isMobile ? tw`bg-amber-400 h-full w-full` : tw`bg-purple-400 flex-1`
          isMobile ? tw`bg-amber-400` : tw`bg-purple-400`
        )}
      >
        <Text style={tw`text-2xl mb-4`}>Rufferal</Text>
        <Text style={tw`text-xl mb-4`}>Access Playground</Text>
        {toastStore.messages.length > 0 && (
          <RFormError error={toastStore.messages.toString()} />
        )}
        <ScrollView style={tw`w-full`}>{children}</ScrollView>
        {isMobile ? <MobileNavigation /> : <WebNavigation />}
      </View>
    );
  }
);
