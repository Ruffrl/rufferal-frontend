import { ruffwind } from '@rufferal/tailwind';
import { InputPhotoProps } from '@rufferal/types';
import { GLOBAL_ICON_SIZE_LARGE, moderateScaleTW } from '@rufferal/utils';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useCameraPermissions } from 'expo-camera';
import { PhotoModal } from './photo-modal';
import { permissionAlert } from './photo-permission-alert';

// ⚠️ USAGE - to use this you must wrap your page with BottomSheetModalProvider
export const InputPhoto = ({
  cameraNavPath,
  errorMessage,
  label = 'Tap to change or add photo',
  onChange,
  uri,
}: InputPhotoProps) => {
  const [modalPresent, setModalPresent] = useState(false);
  const handleModalDismiss = () => setModalPresent(false);
  const [permission, requestPermission] = useCameraPermissions();

  const handlePress = async () => {
    if (!permission?.canAskAgain && permission?.status === 'denied') {
      permissionAlert();
    } else if (!permission?.granted) {
      requestPermission();
    }

    setModalPresent(true);
  };

  const circleFrameStyles = ruffwind`
    items-center
    justify-center
    h-${moderateScaleTW(100)}
    rounded-${moderateScaleTW(100)}
    w-${moderateScaleTW(100)}`;

  const EmptyState = () => (
    <View
      style={ruffwind.style(
        circleFrameStyles,
        `border-electricViolet-600 border-${moderateScaleTW(2)}`
      )}
    >
      <Image
        style={ruffwind.style(
          GLOBAL_ICON_SIZE_LARGE,
          'items-center justify-center'
        )}
        source={require('@rufferal/assets/src/icons/image.png')}
      />
    </View>
  );

  const PetImage = () => (
    <Image style={ruffwind.style(circleFrameStyles)} source={uri} />
  );

  return (
    <View style={ruffwind`gap-3 items-center justify-center`}>
      <Pressable onPress={handlePress}>
        {uri ? <PetImage /> : <EmptyState />}
      </Pressable>
      <Text style={ruffwind`text-balticSea-950 font-bodySemibold text-b2`}>
        {label}
      </Text>
      <PhotoModal
        handleModalDismiss={handleModalDismiss}
        modalPresent={modalPresent}
        navPath={cameraNavPath}
        onChange={onChange}
      />
    </View>
  );
};
