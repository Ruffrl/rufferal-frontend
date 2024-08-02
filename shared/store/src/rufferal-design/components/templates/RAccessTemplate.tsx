import { useContext } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { AuthStoreContext, ToastStoreContext } from '../../../store';
import { RFormError } from '../atom';
import { RLogoutButton } from '../organism';

export const RAccessTemplate = ({
  children,
}: React.PropsWithChildren): React.ReactElement => {
  const web = Platform.OS === 'web';
  const userStore = useContext(AuthStoreContext);
  const toastStore = useContext(ToastStoreContext);
  // console.log('BLARG toastStore', toastStore);
  // console.log(
  //   'BLARG toastStore.messages.toString()',
  //   toastStore.messages.toString()
  // );

  return (
    <View style={web ? styles.containerWeb : styles.containerMobile}>
      {toastStore.messages.length > 0 && (
        <RFormError error={toastStore.messages.toString()} />
      )}
      <Text style={styles.welcome}>Rufferal</Text>
      <Text style={styles.instructions}>Access Playground</Text>
      {children}
      {userStore.bearerToken && userStore?.user?.id && (
        <RLogoutButton id={userStore.user.id} />
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
