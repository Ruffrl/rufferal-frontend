import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import { ToastStoreContext } from '../../../store';
import { MobileNavigation, WebNavigation } from '../../navigation';
import { RFormError } from '../atom';

// BLARG - update with this: https://reactnavigation.org/docs/navigating-without-navigation-prop and MobX
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
      // <View style={isMobile ? styles.containerMobile : styles.containerWeb}>
      //   {toastStore.messages.length > 0 && (
      //     <RFormError error={toastStore.messages.toString()} />
      //   )}
      //   <Text style={styles.welcome}>Rufferal</Text>
      //   <Text style={styles.instructions}>Access Playground</Text>
      //   <ScrollView>
      //   {children}
      //   </ScrollView>
      //   {isMobile ? <MobileNavigation /> : <WebNavigation />}
      // </View>
      <View style={isMobile ? tw`bg-black` : tw`bg-orange-900`}>
        {/* <View style={tw`ios:bg-black android:bg-black bg-orange-900`}> */}
        {toastStore.messages.length > 0 && (
          <RFormError error={toastStore.messages.toString()} />
        )}
        {/* <Text style={styles.welcome}>Rufferal</Text> */}
        <Text style={tw`text-2xl text-white`}>Rufferal</Text>
        {/* <Text style={styles.instructions}>Access Playground</Text> */}
        <Text style={tw`text-xl`}>Access Playground</Text>
        <ScrollView>{children}</ScrollView>
        {isMobile ? <MobileNavigation /> : <WebNavigation />}
      </View>
    );
  }
);

// const styles = StyleSheet.create({
//   containerWeb: {
//     marginHorizontal: 4,
//     marginVertical: 8,
//     backgroundColor: 'aqua',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   containerMobile: {
//     marginHorizontal: 4,
//     marginVertical: 8,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'aqua',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 20,
//   },
// });
