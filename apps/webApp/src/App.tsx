// import * as ReactDOM from 'react-dom/client';

// import { StrictMode } from 'react';
// import { RouterProvider } from 'react-router-dom';

// import { router } from './router';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//     <StrictMode>
//       <RouterProvider router={router} />
//     </StrictMode>
// );

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { RBottomSheet } from '@rufferal-frontend/store';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { StatusBar } from 'react-native';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RBottomSheet />
      <StatusBar translucent={true} />
    </GestureHandlerRootView>
  </StrictMode>
);
