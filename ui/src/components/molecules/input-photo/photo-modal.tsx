import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { ruffwind } from '@rufferal/tailwind';
import { PhotoModalProps } from '@rufferal/types';
import {
  GLOBAL_MIN_PRESS_SIZE,
  moderateScaleTW,
  verticalScale,
  verticalScaleTW,
} from '@rufferal/utils';
import {
  CameraCapturedPicture,
  CameraType,
  CameraView,
  useCameraPermissions,
} from 'expo-camera';
import { Image } from 'expo-image';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Modal, Platform, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HorizontalDivider } from '../../atoms';
import { permissionAlert } from './photo-permission-alert';

// ⚠️ USAGE - to use this you must wrap your page with BottomSheetModalProvider
export const PhotoModal = ({
  handleModalDismiss,
  modalPresent,
  onChange,
}: PhotoModalProps) => {
  /* STATE */
  const isIOS = Platform.OS === 'ios';
  const snapPoints = useMemo(() => [verticalScale(1), verticalScale(194)], []);
  const insets = useSafeAreaInsets();

  /* IMAGE PICKER HANDLING */
  const pickerModalRef = useRef<BottomSheetModal>(null);

  const handleImagePicker = async () => {
    // No permissions request is necessary for launching the image library
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
    handleDismissModalPress();
  };

  /* CAMERA HANDLING */
  const [cameraView, setCameraView] = useState(false);
  const [facing, setFacing] = useState<CameraType>('back');
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();

  const handleCamera = async () => {
    if (!permission?.canAskAgain && permission?.status === 'denied') {
      permissionAlert();
    } else if (!permission?.granted) {
      requestPermission();
    } else if (permission?.granted) {
      setCameraView((prev) => !prev);
    }
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const takePhoto = async () => {
    let photo: CameraCapturedPicture | undefined;

    if (cameraRef.current) {
      photo = await cameraRef.current.takePictureAsync();
    }

    if (photo?.uri) {
      onChange(photo.uri);
    }
    setCameraView(false);
    handleDismissModalPress();
  };

  /* CALLBACKS */
  const handlePresentModalPress = useCallback(() => {
    pickerModalRef.current?.present();
  }, []);
  const handleDismissModalPress = useCallback(() => {
    pickerModalRef.current?.dismiss();
    handleModalDismiss();
  }, [handleModalDismiss]);
  // // BLARG:TODO: determine best way to replace or remove this
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  // BLARG:TODO: how can I remove this?
  useEffect(() => {
    if (modalPresent) {
      handlePresentModalPress();
    }
  }, [handlePresentModalPress, modalPresent]);

  /* STYLES */
  const cameraPaddingX = `px-${moderateScaleTW(16)}`;
  let cameraPaddingY = `py-${verticalScaleTW(16)}`;
  switch (Platform.OS) {
    case 'android':
      cameraPaddingY = `py-${verticalScaleTW(24)}`;
      break;
    case 'ios':
      cameraPaddingY = `pt-[${insets.top}px] pb-[${insets.bottom}px]`;
      break;
  }
  const buttonStyles = ruffwind`
      bg-[#ededed]
      justify-center
      h-${verticalScaleTW(61)}`;
  const buttonTextStyles = ruffwind`text-azureRadiance-700 text-[18px] leading-[21.48px] text-center`;

  /* RENDERS */
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        onPress={handleDismissModalPress}
        enableTouchThrough
        appearsOnIndex={2}
        opacity={0.6}
      />
    ),
    [handleDismissModalPress]
  );

  return (
    <>
      <Modal animationType="slide" visible={cameraView}>
        <View
          style={ruffwind.style(
            `flex-1 bg-black`,
            cameraPaddingX,
            cameraPaddingY
          )}
        >
          {permission?.granted ? (
            <View style={ruffwind`flex-1`}>
              <View
                style={ruffwind.style(
                  `bg-black flex-row justify-between`,
                  `pb-${moderateScaleTW(4)}`
                )}
              >
                <Pressable
                  style={ruffwind`flex-1 items-start`}
                  onPress={toggleCameraFacing}
                >
                  <Image
                    style={ruffwind.style(
                      GLOBAL_MIN_PRESS_SIZE,
                      'items-center justify-center'
                    )}
                    source={require('@rufferal/assets/src/icons/camera-flip.png')}
                    tintColor={'#FFFFFF'}
                  />
                </Pressable>
                <Pressable
                  style={ruffwind`flex-1 items-end`}
                  onPress={() => setCameraView(false)}
                >
                  <Image
                    style={ruffwind.style(
                      GLOBAL_MIN_PRESS_SIZE,
                      'items-center justify-center'
                    )}
                    source={require('@rufferal/assets/src/icons/close-circle.png')}
                    tintColor={'#FFFFFF'}
                  />
                </Pressable>
              </View>
              <CameraView
                style={ruffwind`flex-1`}
                facing={facing}
                ref={cameraRef}
              />
              <View
                style={ruffwind.style(`bg-black`, `pt-${moderateScaleTW(4)}`)}
              >
                <Pressable
                  style={ruffwind`flex-1 items-center`}
                  onPress={takePhoto}
                >
                  <View
                    style={ruffwind`
                        bg-white
                        rounded-full
                        h-${moderateScaleTW(60)}
                        w-${moderateScaleTW(60)}`}
                  />
                </Pressable>
              </View>
            </View>
          ) : (
            <View
              style={ruffwind`flex-1 bg-black justify-center px-${moderateScaleTW(
                24
              )} gap-${moderateScaleTW(12)}`}
            >
              <Text
                style={ruffwind`font-headerSemibold text-h3 text-white text-center`}
              >
                Camera requires permissions
              </Text>
              <Text
                style={ruffwind`font-bodySemibold text-b4 text-white text-center`}
              >
                {'Go Settings --> Rufferal --> Update camera settings'}
              </Text>
            </View>
          )}
        </View>
      </Modal>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        bottomInset={isIOS ? verticalScale(50) : verticalScale(25)}
        detached={true}
        index={1}
        name="Photo Gallery or Camera"
        // onChange={handleSheetChanges}
        ref={pickerModalRef}
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
            onPress={handleImagePicker}
          >
            <Text style={ruffwind.style(buttonTextStyles, `font-body`)}>
              Photo Gallery
            </Text>
          </Pressable>
          <HorizontalDivider color="border-iron-200" />
          <Pressable
            style={ruffwind.style(
              buttonStyles,
              `rounded-b-${moderateScaleTW(10)}`
            )}
            onPress={handleCamera}
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
              handleDismissModalPress();
            }}
          >
            <Text style={ruffwind.style(buttonTextStyles, `font-bodySemibold`)}>
              Cancel
            </Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};
