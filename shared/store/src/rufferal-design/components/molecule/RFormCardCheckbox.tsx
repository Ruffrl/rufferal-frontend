// import * as React from 'react';
import tw from 'twrnc';

import { useState } from 'react';
import {
  ControllerRenderProps,
  FieldError,
  useFormContext,
} from 'react-hook-form';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

import {
  GLOBAL_PROTOTYPE_COLORS,
  GLOBAL_ICON_SIZE,
  horizontalScaleTW,
  moderateScaleTW,
  RInputError,
  verticalScaleTW,
} from '../../..';

// ⚠️ Requires parent <FormProvider/> (react-hook-forms)
export const RFormCardCheckbox = ({
  error,
  field,
  mobileCheckIcon,
  title,
}: {
  error?: FieldError | undefined;
  field: ControllerRenderProps;
  mobileCheckIcon?: React.JSX.Element;
  title: string | React.JSX.Element;
}) => {
  const [selected, setSelected] = useState(false);

  const { setValue } = useFormContext();

  const handleSelection = () => {
    setValue(field.name, !selected, { shouldDirty: true });
    setSelected((prev) => !prev);
  };

  return (
    <View>
      {/* HIDDEN INPUT */}
      <TextInput
        tabIndex={0}
        ref={field.ref}
        value={field.value || ''}
        style={tw`hidden`}
      />
      {/* CARD */}
      <Pressable
        onPress={handleSelection}
        style={tw.style(
          tw`border-slate-200
          justify-end
          items-center
          border-${moderateScaleTW(2)}
          px-${verticalScaleTW(12)}
          pb-${verticalScaleTW(59)}
          rounded-${moderateScaleTW(12)}
          w-${horizontalScaleTW(164)}
          h-${verticalScaleTW(200)} `,
          selected && tw`border-gray-500 border-${moderateScaleTW(3)}`
        )}
      >
        {selected && (
          <>
            {mobileCheckIcon || (
              <Image
                source={require('../../../assets/icons-512/check-circle.png')}
                resizeMode="center"
                style={tw.style(GLOBAL_ICON_SIZE)}
                tintColor={GLOBAL_PROTOTYPE_COLORS.quaternary.hex}
              />
            )}
          </>
        )}
        <Text
          style={tw`
            text-center
            text-gray-500
            mt-${verticalScaleTW(12)} 
            text-${verticalScaleTW(16)}
            `}
        >
          {title}
        </Text>
      </Pressable>
      {/* FIELD ERRORS */}
      {error && <RInputError error={error} />}
    </View>
  );
};
