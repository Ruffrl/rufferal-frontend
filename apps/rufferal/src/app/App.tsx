import 'react-native-gesture-handler'

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Screens } from '../screens';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screens />
    </GestureHandlerRootView>
  );
};

export default App;
