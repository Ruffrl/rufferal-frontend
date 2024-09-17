import React from 'react';

import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Screens } from './screens/Screens';

const App = () => {
  // Loading font
  const [loaded] = useFonts({
    'Proxima Nova Bold': require('../../../../lib/assets/fonts/proxima-nova/proximanova_bold.otf'),
    'Proxima Nova Semibold': require('../../../../lib/assets/fonts/proxima-nova/proximanova_semibold.otf'),
    'Proxima Nova Extrabold': require('../../../../lib/assets/fonts/proxima-nova/proximanova_extrabold.otf'),
    'Inter Regular': require('../../../../lib/assets/fonts/inter/inter_regular.otf'),
    'Inter Regular Italic': require('../../../../lib/assets/fonts/inter/inter_regular_italic.otf'),
    'Inter Bold': require('../../../../lib/assets/fonts/inter/inter_bold.otf'),
    'Inter Semibold': require('../../../../lib/assets/fonts/inter/inter_semibold.otf'),
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
