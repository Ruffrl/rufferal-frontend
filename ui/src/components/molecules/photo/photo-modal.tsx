import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { ruffwind } from '@rufferal/tailwind';
import { useCallback, useMemo, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PhotoModalProps {}

// ⚠️ USAGE - to use this you must wrap your page with BottomSheetModalProvider
export const PhotoModal = (props: PhotoModalProps) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={2} opacity={0.9} />
    ),
    []
  );

  // renders
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePresentModalPress}>
        <Text>Present Modal</Text>
      </Pressable>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        detached={true}
        bottomInset={46}
        style={ruffwind`m-4`}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Pressable
            style={styles.button}
            onPress={() => console.log('Photo Gallery')}
          >
            <Text>Photo Gallery</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => console.log('Camera')}
          >
            <Text>Camera</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              console.log('Cancel');
              handleDismissModalPress();
            }}
          >
            <Text>Cancel</Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'aqua',
    gap: 12,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'pink',
    height: 24,
    width: '100%',
    borderRadius: 12,
  },
});
