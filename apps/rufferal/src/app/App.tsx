import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Screens } from './screens';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screens />
    </GestureHandlerRootView>
  );
};

export default App;
