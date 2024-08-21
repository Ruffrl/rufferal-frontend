// import * as React from 'react'
import tw from 'twrnc';

import { useRef, useState } from 'react';
import {
  ControllerRenderProps,
  FieldError,
  useFormContext,
} from 'react-hook-form';
import { Image, Platform, Pressable, TextInput, View } from 'react-native';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

import { Camera, CameraType } from 'react-camera-pro';
import {
  GLOBAL_COLORS,
  horizontalScaleTW,
  moderateScaleTW,
  RButton,
  RInputError,
  verticalScaleTW,
} from '../../..';

// ⚠️ Requires parent <FormProvider/> (react-hook-forms)
export const RFormImageInput = ({
  error,
  field,
  mobilePlusIcon,
}: {
  error?: FieldError | undefined;
  field: ControllerRenderProps;
  mobilePlusIcon?: React.JSX.Element;
}) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  const [photo, setPhoto] = useState<ImagePickerResponse | null>(null);
  const [webPhoto, setWebPhoto] = useState<string | undefined>(undefined);
  const [webcam, setWebcam] = useState(false);

  const camera = useRef<CameraType | null>(null);
  const { setValue } = useFormContext();

  const handleChoosePhoto = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response) {
        // BLARG - todo; determine and manage data conversion for server
        // const urlImage = URL.createObjectURL(response.assets[0]);
        setPhoto(response);
        setValue(field.name, response?.assets?.[0].uri);
      }
    });
  };

  const handleCamera = () => {
    console.log('BLARG handleCamera');
    if (isMobile) {
      console.log('BLARG MOBILE camera');
      launchCamera({ mediaType: 'photo', saveToPhotos: true }, (response) => {
        if (response) {
          // BLARG - todo; determine and manage data conversion for server
          console.log('BLARG response: ', response);
          setPhoto(response);
          setValue(field.name, response?.assets?.[0].uri);
        }
      });
    } else {
      setWebcam(true);
      const blarg = camera.current?.takePhoto();
      console.log('BLARG blarg: ', blarg);
    }
  };

  const handleWebCamera = () => {
    const response = camera.current?.takePhoto() as string;
    // BLARG - todo; determine and manage data conversion for server
    setWebPhoto(response);
    setValue(field.name, response);
    setWebcam(false);
  };

  return (
    <>
      {/* MANAGE WEB CAMERA */}
      {!isMobile && webcam && (
        <View
          style={tw`
            absolute
            top-0
            z-50
            w-${horizontalScaleTW(350)} 
            h-${verticalScaleTW(500)}
          `}
        >
          <Camera
            ref={camera}
            errorMessages={{
              noCameraAccessible:
                'No camera device accessible. Please connect your camera or try a different browser.',
              permissionDenied:
                'Permission denied. Please refresh and give camera permission.',
              switchCamera:
                'It is not possible to switch camera to different one because there is only one video device accessible.',
              canvas: 'Canvas is not supported.',
            }}
          />
          <View style={tw`absolute bottom-0 w-full items-center`}>
            <Pressable
              onPress={handleWebCamera}
              style={tw`
                bg-zinc-900
                rounded-full
                justify-center
                items-center
                border-${moderateScaleTW(2)}
                border-slate-200
                h-${moderateScaleTW(96)}
                w-${moderateScaleTW(96)}
              `}
            >
              {mobilePlusIcon || (
                <Image
                  source={require('../../../assets/icons-512/camera.png')}
                  resizeMode="center"
                  style={tw.style(tw`
                    h-${moderateScaleTW(24)} 
                    w-${moderateScaleTW(24)} 
                  `)}
                  tintColor={GLOBAL_COLORS.secondary.hex}
                />
              )}
            </Pressable>
          </View>
        </View>
      )}
      <View style={tw`items-center`}>
        {/* HIDDEN INPUT */}
        <TextInput
          tabIndex={0}
          ref={field.ref}
          value={field.value || ''}
          style={tw`hidden`}
        />

        {/* PREVIEW IMAGE */}
        <View
          style={tw`
            justify-center
            items-center
            bg-white
            border-gray-500
            rounded-full
            border-${moderateScaleTW(2)}
            h-${moderateScaleTW(120)}
            w-${moderateScaleTW(120)}
            my-${verticalScaleTW(48)}
          `}
        >
          {photo || webPhoto ? (
            <>
              {photo && (
                <Image
                  source={{ uri: photo.assets?.[0].uri }}
                  style={tw`w-full h-full rounded-full`}
                  resizeMode="cover"
                />
              )}
              {webPhoto && (
                <Image
                  source={{ uri: webPhoto }}
                  style={tw`w-full h-full rounded-full`}
                  resizeMode="cover"
                />
              )}
            </>
          ) : (
            <Image
              source={require('../../../assets/icons-512/plus.png')}
              resizeMode="center"
              style={tw.style(tw`
                h-${moderateScaleTW(48)} 
                w-${moderateScaleTW(48)} 
              `)}
              tintColor={GLOBAL_COLORS.quaternary.hex}
            />
          )}
        </View>
        {/* FIELD ERRORS */}
        {error && <RInputError error={error} />}
        {/* UPLOAD INTERACTIONS */}
        <View
          style={tw`
          flex-row
          justify-between
          w-full
        `}
        >
          <RButton
            title="Add from library"
            onPress={handleChoosePhoto}
            size="padded-medium"
          />
          {/* BLARG - todo - camera */}
          <RButton
            title="Take photo"
            type="secondary"
            onPress={handleCamera}
            size="padded-medium"
          />
        </View>
      </View>
    </>
  );
};
