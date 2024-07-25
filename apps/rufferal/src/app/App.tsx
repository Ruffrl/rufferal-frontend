/*
 * ❌ MOBILE ERROR STATE ❌
 * CAUSED BY LACK OF LAPTOP SPACE FOR IOS BUILD
 * WILL TEST AGAIN WHEN NEW LAPTOP ARRIVES
 */

// ******************************
// TESTING SHARED STORE COMPONENT
// ******************************
import { store } from '@rufferal-frontend/store';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const App = () => {
  return (
    <>
      <SafeAreaView />
      <View>
        <Text style={styles.textLg}>Welcome Mobile</Text>
        <Text style={styles.textLg}>{'From shared module -> ' + store()}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  textLg: {
    fontSize: 24,
    padding: 24,
  },
});

export default App;
// ******************************

// ******************************
// TESTING FULL APP SHARED
// ******************************
// import { App } from '@rufferal-frontend/store';

// export default App;
