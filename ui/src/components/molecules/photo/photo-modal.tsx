import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ruffwind } from '@rufferal/tailwind';
import {
  moderateScaleTW,
  verticalScale,
  verticalScaleTW,
} from '@rufferal/utils';
import { useCameraPermissions } from 'expo-camera';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Platform, Pressable, Text } from 'react-native';
import { HorizontalDivider } from '../../atoms';
import { ScreenProps } from '../../pages';

export interface PhotoModalProps {
  handleModalDismiss: () => void;
  modalPresent: boolean;
}

// ⚠️ USAGE - to use this you must wrap your page with BottomSheetModalProvider
export const PhotoModal = ({
  handleModalDismiss,
  modalPresent,
}: PhotoModalProps) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const [permission, requestPermission] = useCameraPermissions();
  const navigation = useNavigation<NativeStackNavigationProp<ScreenProps>>();
  const isIOS = Platform.OS === 'ios';
  const snapPoints = useMemo(() => [verticalScale(1), verticalScale(194)], []);
  const buttonStyles = ruffwind`
    bg-[#ededed]
    justify-center
    h-${verticalScaleTW(61)}`;
  const buttonTextStyles = ruffwind`text-azureRadiance-700 text-[18px] leading-[21.48px] text-center`;

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    handleModalDismiss();
  }, [handleModalDismiss]);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    if (modalPresent) {
      handlePresentModalPress();
    }
  }, [handlePresentModalPress, modalPresent]);

  // renders
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        onPress={() => handleModalDismiss()}
        enableTouchThrough
        appearsOnIndex={2}
        opacity={0.6}
      />
    ),
    [handleModalDismiss]
  );

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      bottomInset={isIOS ? verticalScale(50) : verticalScale(25)}
      detached={true}
      index={1}
      name="Photo Gallery or Camera"
      onChange={handleSheetChanges}
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      style={ruffwind`m-2.5`}
      backgroundStyle={ruffwind`bg-transparent`}
      enableHandlePanningGesture={false}
      handleComponent={null}
    >
      <BottomSheetView style={ruffwind`flex-1`}>
        <Pressable
          style={ruffwind.style(
            buttonStyles,
            `rounded-t-${moderateScaleTW(10)}`
          )}
          onPress={() => {
            // handleImagePicker()
            console.log('Photo Gallery');
          }}
        >
          <Text style={ruffwind.style(buttonTextStyles, `font-body`)}>
            Photo Gallery
          </Text>
        </Pressable>
        <HorizontalDivider type="tertiary" />
        <Pressable
          style={ruffwind.style(
            buttonStyles,
            `rounded-b-${moderateScaleTW(10)}`
          )}
          onPress={() => {
            // handleCamera()
            if (!permission?.granted) {
              requestPermission();
            }
            navigation.navigate('Camera');
            console.log('Camera');
          }}
        >
          <Text style={ruffwind.style(buttonTextStyles, `font-body`)}>
            Camera
          </Text>
        </Pressable>
        <Pressable
          style={ruffwind.style(
            buttonStyles,
            `mt-${moderateScaleTW(10)} rounded-${moderateScaleTW(10)}`
          )}
          onPress={() => {
            console.log('Cancel');
            handleDismissModalPress();
          }}
        >
          <Text style={ruffwind.style(buttonTextStyles, `font-bodySemibold`)}>
            Cancel
          </Text>
        </Pressable>
      </BottomSheetView>
    </BottomSheetModal>
  );
};
