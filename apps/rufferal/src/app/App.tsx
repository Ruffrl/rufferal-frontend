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

// ERROR STATE
/* 
 *  Executing task: npx nx run rufferal:run-ios 


> nx run rufferal:run-ios

> react-native run-ios

info A dev server is already running for this project on port 8081.
info Found Xcode workspace "Rufferal.xcworkspace"
info No booted devices or simulators found. Launching first available simulator...
info Launching Blarg (iOS 17.5)
info Building (using "xcodebuild -workspace Rufferal.xcworkspace -configuration Debug -scheme Rufferal -destination id=9973BF89-405C-4819-B670-784C8E1B8C99")

info 💡 Tip: Make sure that you have set up your development environment correctly, by running npx react-native doctor. To read more about doctor command visit: https://github.com/react-native-community/cli/blob/main/packages/cli-doctor/README.md#doctor 

error Failed to build ios project. "xcodebuild" exited with error code '65'. To debug build logs further, consider building your app with Xcode.app, by opening 'Rufferal.xcworkspace'.
Command line invocation:
    /Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild -workspace Rufferal.xcworkspace -configuration Debug -scheme Rufferal -destination id=9973BF89-405C-4819-B670-784C8E1B8C99

User defaults from command line:
    IDEPackageSupportUseBuiltinSCM = YES

Prepare packages

ComputeTargetDependencyGraph
note: Building targets in dependency order
note: Target dependency graph (1 target)
    Target 'Rufferal' in project 'Rufferal' (no dependencies)

GatherProvisioningInputs

CreateBuildDescription

ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/usr/bin/ibtool --version --output-format xml1

ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -v -E -dM -arch x86_64 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk -x c -c /dev/null

ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -v -E -dM -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk -x c -c /dev/null

ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -v -E -dM -arch x86_64 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk -x objective-c++ -c /dev/null

ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/clang -v -E -dM -arch x86_64 -isysroot /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator17.5.sdk -x objective-c -c /dev/null

ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/usr/bin/actool --print-asset-tag-combinations --output-format xml1 /Users/priyapower/Documents/Work/rufferal-frontend/apps/rufferal/ios/Rufferal/Images.xcassets

ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/usr/bin/actool --version --output-format xml1

ExecuteExternalTool /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/ld -version_details

Build description signature: 4aa5b75cf9c628ee963c59950794a10e
Build description path: /Users/priyapower/Library/Developer/Xcode/DerivedData/Rufferal-gkhhmiihabseujbehzstavrkvlyg/Build/Intermediates.noindex/XCBuildData/4aa5b75cf9c628ee963c59950794a10e.xcbuilddata
/Users/priyapower/Documents/Work/rufferal-frontend/apps/rufferal/ios/Rufferal.xcodeproj:1:1: error: Unable to open base configuration reference file '/Users/priyapower/Documents/Work/rufferal-frontend/apps/rufferal/ios/Pods/Target Support Files/Pods-Rufferal/Pods-Rufferal.debug.xcconfig'. (in target 'Rufferal' from project 'Rufferal')
warning: Unable to read contents of XCFileList '/Target Support Files/Pods-Rufferal/Pods-Rufferal-resources-Debug-output-files.xcfilelist' (in target 'Rufferal' from project 'Rufferal')
warning: Unable to read contents of XCFileList '/Target Support Files/Pods-Rufferal/Pods-Rufferal-frameworks-Debug-output-files.xcfilelist' (in target 'Rufferal' from project 'Rufferal')
error: Unable to load contents of file list: '/Target Support Files/Pods-Rufferal/Pods-Rufferal-resources-Debug-input-files.xcfilelist' (in target 'Rufferal' from project 'Rufferal')
warning: Run script build phase 'Bundle React Native code and images' will be run during every build because it does not specify any outputs. To address this warning, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'Rufferal' from project 'Rufferal')
error: Unable to load contents of file list: '/Target Support Files/Pods-Rufferal/Pods-Rufferal-frameworks-Debug-input-files.xcfilelist' (in target 'Rufferal' from project 'Rufferal')
error: Unable to load contents of file list: '/Target Support Files/Pods-Rufferal/Pods-Rufferal-resources-Debug-output-files.xcfilelist' (in target 'Rufferal' from project 'Rufferal')
error: Unable to load contents of file list: '/Target Support Files/Pods-Rufferal/Pods-Rufferal-frameworks-Debug-output-files.xcfilelist' (in target 'Rufferal' from project 'Rufferal')
warning: Run script build phase '[CP] Copy Pods Resources' will be run during every build because it does not specify any outputs. To address this warning, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'Rufferal' from project 'Rufferal')
warning: Run script build phase '[CP] Embed Pods Frameworks' will be run during every build because it does not specify any outputs. To address this warning, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'Rufferal' from project 'Rufferal')

** BUILD FAILED **
*/
