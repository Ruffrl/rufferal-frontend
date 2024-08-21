import tw from 'twrnc';

import { useState } from 'react';
import { ControllerRenderProps, useFormContext } from 'react-hook-form';
import { Image, Text, TextInput, View } from 'react-native';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import { RButton } from '../atom/RButton';

export const RFormImageInput = ({
  field,
  register,
}: // value,
{
  field: ControllerRenderProps;
  // value: any;
  register?: any;
  // field?: unknown;
}) => {
  const { getValues, setValue } = useFormContext();
  // const hiddenInputRef = useRef<TextInput | null>();

  // const [preview, setPreview] = useState<string>();
  const [photo, setPhoto] = useState<ImagePickerResponse | null>(null);

  // const { ref: registerRef, ...rest } = register('avatar');

  const handleChoosePhoto = () => {
    console.log('BLARG handleChoosePhoto');
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response) {
        setPhoto(response);
        setValue(field.name, response?.assets?.[0].uri);
      }
    });
  };

  // const handleUploadedFile = (event: any) => {
  //   const file = event.target.files?.[0];

  //   const urlImage = URL.createObjectURL(file);

  //   setPreview(urlImage);
  // };

  // const onUpload = () => {
  //   console.log('BLARG onUpload');
  //   handleChoosePhoto();
  //   // hiddenInputRef.current?.focus();
  //   // hiddenInputRef.current?.
  //   // hiddenInputRef.current?.clear();
  // };

  const uploadButtonLabel = photo ? 'Change image' : 'Upload image';

  return (
    <View style={tw`bg-blue-300`}>
      <Text>Profile picture</Text>

      <TextInput
        // tabIndex={0}
        // type='file'
        // name="profilePicture"
        // {...rest}
        ref={field.ref}
        value={field.value || ''}
        // onFocus={handleChoosePhoto}
        // // onBlur={handleChoosePhoto}
        // // onFocus={handleChoosePhoto}
        // // onChange={handleChoosePhoto}
        // // onChange={handleUploadedFile}
        // ref={(e) => {
        //   registerRef(e);
        //   // field.ref(e);
        //   // hiddenInputRef.current = e;
        // }}
        style={tw`bg-pink-500 border border-black`}
      />

      {/* <Image src={preview} style={{ width: 80, height: 80 }} /> */}
      <Image src={photo?.assets?.[0].uri} style={{ width: 80, height: 80 }} />

      {/* <RButton title="This be a test" onPress={onUpload}>
        {uploadButtonLabel}
      </RButton> */}

      <RButton title="This be a test" onPress={handleChoosePhoto}>
        {uploadButtonLabel}
      </RButton>
    </View>
  );
};
