import { ruffwind } from '@rufferal/tailwind';
import { Image } from 'expo-image';
import { Platform, Text, View } from 'react-native';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GLOBAL_ICON_SIZE_MEDIUM_SMALL } from '@rufferal/utils';
import { PageNavigationProps } from '../../../..';
import { Button, H3, ProgressBar, Tag } from '../../../../../atoms';
import { Photo } from '../../../../../molecules';
import { FeatureTemplate } from '../../../../../templates';

/* eslint-disable-next-line */
export interface CatAvatarProps extends PageNavigationProps {}

export const CatAvatar = ({ navigation }: CatAvatarProps) => {
  const isIOS = Platform.OS === 'ios';

  return (
    <FeatureTemplate
      backNavigation={() => navigation.navigate('Cat Details')}
      skipNavigation={() => navigation.navigate('Cat Personality')}
      overrideSafe
    >
      <BottomSheetModalProvider>
        <View style={ruffwind`flex-1 justify-between`}>
          <View style={ruffwind`gap-6`}>
            <View style={ruffwind`mt-6`}>
              <ProgressBar step={2} total={4} />
            </View>
            <View style={ruffwind`gap-2`}>
              <Tag
                Icon={() => (
                  <Image
                    style={ruffwind.style(
                      GLOBAL_ICON_SIZE_MEDIUM_SMALL,
                      'items-center justify-center'
                    )}
                    source={require('@rufferal/assets/src/icons/cat.png')}
                  />
                )}
                text="Gavin"
              />
              <H3 text="Upload a profile photo" />
              <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
                This helps identify your cat to Rufferal pet caretakers
              </Text>
            </View>
            <View style={ruffwind``}>
              <Photo />
            </View>
          </View>
          <View style={ruffwind.style(`gap-2`, !isIOS && `mb-4`)}>
            <Button
              text="Next"
              onPress={() => navigation.navigate('Cat Personality')}
            />
            <Button
              text="Cancel"
              type="transparent"
              size="standard-short"
              onPress={() => navigation.navigate('Manage Pets')}
            />
          </View>
        </View>
      </BottomSheetModalProvider>
    </FeatureTemplate>
  );
};

// import {
//   BottomSheetBackdrop,
//   BottomSheetBackdropProps,
//   BottomSheetModal,
//   BottomSheetModalProvider,
//   BottomSheetView,
// } from '@gorhom/bottom-sheet';
// import { ruffwind } from '@rufferal/tailwind';
// import { useCallback, useMemo, useRef } from 'react';
// import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
// import { PageNavigationProps } from '../../../../../pages/types/page-props';

// export const CatAvatar = ({ navigation }: PageNavigationProps) => {
//   // ref
//   const bottomSheetModalRef = useRef<BottomSheetModal>(null);

//   // variables
//   const snapPoints = useMemo(() => ['25%', '50%'], []);

//   // callbacks
//   const handlePresentModalPress = useCallback(() => {
//     bottomSheetModalRef.current?.present();
//   }, []);
//   const handleDismissModalPress = useCallback(() => {
//     bottomSheetModalRef.current?.dismiss();
//   }, []);
//   const handleSheetChanges = useCallback((index: number) => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   const renderBackdrop = useCallback(
//     (props: BottomSheetBackdropProps) => (
//       <BottomSheetBackdrop {...props} appearsOnIndex={2} opacity={0.9} />
//     ),
//     []
//   );

//   // renders
//   return (
//     <BottomSheetModalProvider>
//       <View style={styles.container}>
//         <Button
//           onPress={handlePresentModalPress}
//           title="Present Modal"
//           color="black"
//         />
//         <BottomSheetModal
//           ref={bottomSheetModalRef}
//           index={1}
//           snapPoints={snapPoints}
//           onChange={handleSheetChanges}
//           backdropComponent={renderBackdrop}
//           detached={true}
//           bottomInset={46}
//           style={ruffwind`m-4`}
//         >
//           <BottomSheetView style={styles.contentContainer}>
//             <Text>Awesome 🎉</Text>
//             <Pressable onPress={() => console.log('Photo Gallery')}>
//               <Text>Photo Gallery</Text>
//             </Pressable>
//             <Pressable onPress={() => console.log('Camera')}>
//               <Text>Camera</Text>
//             </Pressable>
//             <Pressable
//               onPress={() => {
//                 console.log('Cancel');
//                 handleDismissModalPress();
//               }}
//             >
//               <Text>Cancel</Text>
//             </Pressable>
//           </BottomSheetView>
//         </BottomSheetModal>
//       </View>
//     </BottomSheetModalProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     justifyContent: 'center',
//     backgroundColor: 'aqua',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });
