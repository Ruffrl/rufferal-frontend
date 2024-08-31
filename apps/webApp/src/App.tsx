// import { GestureHandlerRootView } from 'react-native-gesture-handler';

import * as ReactDOM from 'react-dom/client';

import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {/* <GestureHandlerRootView> */}
    <RouterProvider router={router} />
    {/* </GestureHandlerRootView> */}
  </StrictMode>
);
