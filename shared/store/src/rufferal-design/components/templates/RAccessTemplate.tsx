import { useContext } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ToastStoreContext } from '../../../store';
import { MobileNavigation, WebNavigation } from '../../navigation';
import { RFormError } from '../atom';

type AccessTemplateProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
};

// BLARG - update with this: https://reactnavigation.org/docs/navigating-without-navigation-prop and MobX
export const RAccessTemplate = ({
  navigation,
  children,
}: React.PropsWithChildren<AccessTemplateProps>): React.ReactElement => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  const toastStore = useContext(ToastStoreContext);
  // console.log('BLARG toastStore', toastStore);
  // console.log(
  //   'BLARG toastStore.messages.toString()',
  //   toastStore.messages.toString()
  // );

  return (
    <View style={isMobile ? styles.containerMobile : styles.containerWeb}>
      {toastStore.messages.length > 0 && (
        <RFormError error={toastStore.messages.toString()} />
      )}
      <Text style={styles.welcome}>Rufferal</Text>
      <Text style={styles.instructions}>Access Playground</Text>
      {children}
     
      {isMobile ? (
        <MobileNavigation navigation={navigation} />
      ) : (
        <WebNavigation />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerWeb: {
    marginHorizontal: 4,
    marginVertical: 8,
    backgroundColor: 'aqua',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMobile: {
    marginHorizontal: 4,
    marginVertical: 8,
    width: '100%',
    height: '100%',
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
});
