```
origin  git@github.com:Ruffrl/rufferal-frontend.git (fetch)
origin  git@github.com:Ruffrl/rufferal-frontend.git (push)
```

// Create a new NX app with expo

```
npx create-nx-workspace@latest --preset=expo --appName=rufferal

✔ Where would you like to create your workspace? · rufferal-frontend
✔ Test runner to use for end to end (E2E) tests · cypress
✔ Which CI provider would you like to use? · github
```

// Reset git remote

```
git remote add origin https://github.com/Ruffrl/rufferal-frontend.git
```

// Create a library for shared components

```
npx nx generate @nx/expo:lib lib/ui
<!-- Add your own directory setup here -->
```

// Add base libraries

```
react-native-reanimated
react-native-gesture-handler
@react-navigation/native
react-native-safe-area-context
@react-native-community/masked-view
react-router-dom@6
@mui/material
@emotion/react
@emotion/styled
@gorhom/bottom-sheet
twrnc
expo-camera
mobx
mobx-persist-store
mobx-react-lite
@react-native-async-storage/async-storage
react-hook-form
yup
@hookform/resolvers
@ouroboros/react-native-picker
@react-native-assets/slider
react-native-swiper
```

// Missing from web

```
"@babel/plugin-proposal-export-namespace-from": "^7.18.9",
"react-native-web-swiper": "^2.2.4",
"react-native-web": "~0.19.11",
"react-webcam": "^7.2.0",
```

// Test components Test shared library

```
nx g @nx/expo:component rbottomsheet --directory lib/ui/src/components/atoms/rbottomsheet
<!-- CONVERT COMPONENT TO ARROW FUNCTION SYNTAX -->
// import React from 'react';
import { Text, View } from 'react-native';

/* eslint-disable-next-line */
export interface BottomsheetProps {}

export const RBottomsheet = (props: BottomsheetProps) => {
  return (
    <View>
      <Text>Welcome to bottomsheet!</Text>
    </View>
  );
};

<!-- lib/ui/src/components/atoms/index.ts -->
export { RBottomsheet } from './rbottomsheet/bottomsheet';

<!-- lib/ui/src/components/index.ts -->
export * from './atoms';

<!-- lib/ui/src/index.ts -->
export * from './components';
```

// Add a "store" library

```
npx nx generate @nx/expo:lib lib/store
<!-- Add your own directory setup here -->
```

// Add store component

```
nx g @nx/expo:component account-store --directory lib/store/src/account-store --export
```

// Add pet profile UI components

```
nx g @nx/expo:component create-pet-onboarding --directory lib/ui/src/components/pages/pets/create-pet-onboarding  --nameAndDirectoryFormat=as-provided --export=false

nx g @nx/expo:component create-pet-details --directory lib/ui/src/components/pages/pets/create-pet-details --nameAndDirectoryFormat=as-provided --export=false

nx g @nx/expo:component create-pet-photo --directory lib/ui/src/components/pages/pets/create-pet-photo --nameAndDirectoryFormat=as-provided --export=false

nx g @nx/expo:component create-pet-personality --directory lib/ui/src/components/pages/pets/create-pet-personality --nameAndDirectoryFormat=as-provided --export=false

nx g @nx/expo:component create-pet-careplan --directory lib/ui/src/components/pages/pets/create-pet-careplan --nameAndDirectoryFormat=as-provided --export=false

 nx g @nx/expo:component manage-pets --directory lib/ui/src/components/pages/pets/manage-pets --nameAndDirectoryFormat=as-provided --export=false
```

// Add an "assets" library

```
npx nx generate @nx/expo:lib lib/assets
<!-- Add your own directory setup here -->
```

// Install assets
```
npx expo install expo-asset
```