import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { ToastStoreContext } from '../../../store';
import { MobileNavigation, WebNavigation } from '../../navigation';
import { RFormError } from '../atom';

export const RAccessTemplate = observer(
  ({ children }: React.PropsWithChildren): React.ReactElement => {
    const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
    useDeviceContext(tw);
    const toastStore = useContext(ToastStoreContext);
    // console.log('BLARG toastStore', toastStore);
    // console.log(
    //   'BLARG toastStore.messages.toString()',
    //   toastStore.messages.toString()
    // );

    return (
      <View
        style={tw.style(
          'my-4 mx-2 flex-1 justify-center items-center',
          isMobile ? tw`bg-amber-400` : tw`bg-purple-400`
        )}
      >
        {toastStore.messages.length > 0 && (
          <RFormError error={toastStore.messages.toString()} />
        )}
        <Text style={tw`text-2xl mb-4`}>Rufferal</Text>
        <Text style={tw`text-xl mb-4`}>Access Playground</Text>
        <ScrollView>{children}</ScrollView>
        {isMobile ? <MobileNavigation /> : <WebNavigation />}
      </View>
    );
  }
);
