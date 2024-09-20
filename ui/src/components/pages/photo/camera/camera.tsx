import { ruffwind } from '@rufferal/tailwind';
import { GLOBAL_MIN_PRESS_SIZE, moderateScaleTW } from '@rufferal/utils';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { Image } from 'expo-image';
import { useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

/* eslint-disable-next-line */
export interface CameraProps {}

export const Camera = (props: CameraProps) => {
  // ref
  const cameraRef = useRef<CameraView>(null);
  // const cameraRef = useRef(null);

  // variables
  const [facing, setFacing] = useState<CameraType>('back');
  const [photoUri, setPhotoUri] = useState<string>();
  const [permission] = useCameraPermissions();

  // behaviors
  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
    console.log('REVERSE');
  };
  const takePhoto = async () => {
    console.log('TAKE PHOTO');
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      console.log(photo?.uri);
      setPhotoUri(photo?.uri);
    }
  };

  return (
    <CameraView
      style={ruffwind`flex-1 bg-black`}
      facing={facing}
      ref={cameraRef}
    >
      {permission?.granted ? (
        <View
          style={ruffwind`flex-1 flex-row bg-transparent m-16 items-end justify-between`}
        >
          {photoUri ? (
            <View style={ruffwind`flex-1 items-start`}>
              <Image
                source={{ uri: photoUri }}
                style={ruffwind`h-${moderateScaleTW(60)}
                w-${moderateScaleTW(60)}`}
              />
            </View>
          ) : (
            <View style={ruffwind`flex-1`} />
          )}
          <Pressable style={ruffwind`flex-1 items-center`} onPress={takePhoto}>
            <View
              style={ruffwind`
                bg-white
                rounded-full
                h-${moderateScaleTW(60)}
                w-${moderateScaleTW(60)}`}
            />
          </Pressable>
          <Pressable
            style={ruffwind`flex-1 items-end`}
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
        </View>
      ) : (
        <View style={ruffwind`flex-1 flex-row bg-transparent items-end m-16`}>
          <Text style={ruffwind`text-2xl font-bold text-white text-center`}>
            Camera requires permissions
          </Text>
        </View>
      )}
    </CameraView>
  );
};
