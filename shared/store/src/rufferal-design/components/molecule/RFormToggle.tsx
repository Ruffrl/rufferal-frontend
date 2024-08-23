import * as React from 'react';
import tw from 'twrnc';

import { useState } from 'react';
import { ControllerRenderProps, FieldError } from 'react-hook-form';
import { Platform, Switch, Text, TextInput, View } from 'react-native';

import { GLOBAL_COLORS, moderateScaleTW, RInputError } from '../../..';

// ⚠️ Requires parent <FormProvider/> (react-hook-forms)
export const RFormToggle = ({
  error,
  field,
  label,
}: {
  error?: FieldError | undefined;
  field?: ControllerRenderProps;
  label?: string | React.JSX.Element;
}) => {
  // const isAndroid = Platform.OS === 'android'
  const [selected, setSelected] = useState(false);

  // const { setValue } = useFormContext();

  const handleSelection = () => {
    // setValue(field.name, !selected, { shouldDirty: true });
    setSelected((prev) => !prev);
  };

  return (
    <View style={tw`flex-row gap-${moderateScaleTW(8)}`}>
      {/* HIDDEN INPUT */}
      <TextInput
        tabIndex={0}
        // ref={field.ref}
        // value={field.value || ''}
        style={tw`hidden`}
      />
      {/* TOGGLE */}
      <Switch
        style={tw.style(
          Platform.OS === 'android' && {
            transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
          }
        )}
        thumbColor={
          selected ? GLOBAL_COLORS.tertiary.hex : GLOBAL_COLORS.primary.hex
        }
        trackColor={{
          false: GLOBAL_COLORS.secondary.hex,
          true: GLOBAL_COLORS.successTertiary.hex,
        }}
        ios_backgroundColor={GLOBAL_COLORS.secondary.hex}
        onValueChange={handleSelection}
        value={selected}
      />
      {label && (
        <Text style={tw`text-gray-500 text-${moderateScaleTW(16)}`}>
          {label}
        </Text>
      )}
      {/* FIELD ERRORS */}
      {error && <RInputError error={error} />}
    </View>
  );
};
