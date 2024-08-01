import { Platform, StyleSheet, Text, View } from 'react-native';

export const RAccessTemplate = ({
  children,
}: React.PropsWithChildren): React.ReactElement => {
  const web = Platform.OS === 'web';

  return (
    <View style={web ? styles.containerWeb : styles.containerMobile}>
      <Text style={styles.welcome}>Rufferal</Text>
      <Text style={styles.instructions}>Access Playground</Text>
      {children}
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
