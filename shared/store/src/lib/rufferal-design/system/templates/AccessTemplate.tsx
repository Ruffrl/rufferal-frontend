import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export const AccessTemplate = ({ children }): React.JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    width: '100%',
    backgroundColor: 'aqua',
  },
});
