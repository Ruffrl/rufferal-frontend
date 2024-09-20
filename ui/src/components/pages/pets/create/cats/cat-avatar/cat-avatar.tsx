// import { ruffwind } from '@rufferal/tailwind';
// import { Image } from 'expo-image';
// import { Platform, Text, View } from 'react-native';

// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// import { GLOBAL_ICON_SIZE_MEDIUM_SMALL } from '@rufferal/utils';
// import { Button, H3, ProgressBar, Tag } from '../../../../../atoms';
// import { Photo } from '../../../../../molecules';
import { FeatureTemplate } from '../../../../../templates';
import { PageNavigationProps } from '../../../..';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/* eslint-disable-next-line */
export interface CatAvatarProps extends PageNavigationProps {}

export const CatAvatar = ({ navigation }: CatAvatarProps) => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
  // const isIOS = Platform.OS === 'ios';

  // return (
  //   <FeatureTemplate
  //     backNavigation={() => navigation.navigate('Cat Details')}
  //     skipNavigation={() => navigation.navigate('Cat Personality')}
  //     overrideSafe
  //   >
  //     <BottomSheetModalProvider>
  //       <View style={ruffwind`flex-1 justify-between`}>
  //         <View style={ruffwind`gap-6`}>
  //           <View style={ruffwind`mt-6`}>
  //             <ProgressBar step={2} total={4} />
  //           </View>
  //           <View style={ruffwind`gap-2`}>
  //             <Tag
  //               Icon={() => (
  //                 <Image
  //                   style={ruffwind.style(
  //                     GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  //                     'items-center justify-center'
  //                   )}
  //                   source={require('@rufferal/assets/src/icons/cat.png')}
  //                 />
  //               )}
  //               text="Gavin"
  //             />
  //             <H3 text="Upload a profile photo" />
  //             <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
  //               This helps identify your cat to Rufferal pet caretakers
  //             </Text>
  //           </View>
  //           <View style={ruffwind``}>
  //             <Photo />
  //           </View>
  //         </View>
  //         <View style={ruffwind.style(`gap-2`, !isIOS && `mb-4`)}>
  //           <Button
  //             text="Next"
  //             onPress={() => navigation.navigate('Cat Personality')}
  //           />
  //           <Button
  //             text="Cancel"
  //             type="transparent"
  //             size="standard-short"
  //             onPress={() => navigation.navigate('Manage Pets')}
  //           />
  //         </View>
  //       </View>
  //     </BottomSheetModalProvider>
  //   </FeatureTemplate>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});