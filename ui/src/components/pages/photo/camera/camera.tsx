import { ruffwind } from '@rufferal/tailwind';
import { CameraType, CameraView } from 'expo-camera';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

/* eslint-disable-next-line */
export interface CameraProps {}

export const Camera = (props: CameraProps) => {
  const [facing, setFacing] = useState<CameraType>('back');

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  return (
    <CameraView style={ruffwind`flex-1`} facing={facing}>
      <View style={ruffwind`flex-1 flex-row bg-transparent m-16`}>
        <Pressable
          style={ruffwind`flex-1 flex-end items-center`}
          onPress={toggleCameraFacing}
        >
          <Text style={ruffwind`text-2xl font-bold text-white`}>
            Flip Camera
          </Text>
        </Pressable>
      </View>
    </CameraView>
  );
};
