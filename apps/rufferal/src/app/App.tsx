import React from 'react';

import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Screens } from './screens/Screens';

const App = () => {
  // Loading font
  const [loaded] = useFonts({
    'Proxima Nova Bold': require('../../../../assets/src/fonts/proxima-nova/proximanova_bold.otf'),
    'Proxima Nova Semibold': require('../../../../assets/src/fonts/proxima-nova/proximanova_semibold.otf'),
    'Proxima Nova Extrabold': require('../../../../assets/src/fonts/proxima-nova/proximanova_extrabold.otf'),
    'Inter Regular': require('../../../../assets/src/fonts/inter/inter_regular.otf'),
    'Inter Regular Italic': require('../../../../assets/src/fonts/inter/inter_regular_italic.otf'),
    'Inter Medium': require('../../../../assets/src/fonts/inter/inter_medium.otf'),
    'Inter Bold': require('../../../../assets/src/fonts/inter/inter_bold.otf'),
    'Inter Semibold': require('../../../../assets/src/fonts/inter/inter_semibold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screens />
    </GestureHandlerRootView>
  );
};

export default App;
