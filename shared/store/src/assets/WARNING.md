# Warning
Make sure you add any assets needed by mobile (android) to `apps/rufferal/android/app/src/main/res` and then run `bundle`

If the nx `bundle` fails, try
```
# With Assets
cd apps/rufferal
npx react-native bundle --platform android --dev false --reset-cache --entry-file src/main.tsx --bundle-output android/app/build/generated/assets/createBundleReleaseJsAndAssets/index.android.bundle --assets-dest android/app/src/main/res
```