// import * as React from 'react';
import tw from 'twrnc';

import { useState } from 'react';
import {
  ControllerRenderProps,
  FieldError,
  useFormContext,
} from 'react-hook-form';
import { Platform, Switch, Text, View } from 'react-native';

import {
  GLOBAL_COLORS,
  moderateScaleTW,
  RInputError,
  RLabel,
  verticalScaleTW,
} from '../../..';

// ⚠️ Requires parent <FormProvider/> (react-hook-forms)
export const RFormToggleRadio = ({
  error,
  field,
  label,
  optional,
  toggles,
}: {
  error?: FieldError | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any>;
    label?: string;
    optional?: boolean;
  toggles: string[];
}) => {
  // const isAndroid = Platform.OS === 'android'
  const [selected, setSelected] = useState<string>();

  const { setValue } = useFormContext();

  const handleSelection = (toggle: string) => {
    setValue(field.name, toggle, { shouldDirty: true });
    setSelected(toggle);
  };

  return (
    <View>
      {/* BLARG - add label state to turn Red on error */}
      {label && <RLabel label={label} optional={optional} />}
      <View style={tw`justify-center`}>
        {/* TOGGLES */}
        {toggles.map((toggle) => (
          <View
            key={toggle}
            style={tw`
              flex-row
              items-center
              gap-${moderateScaleTW(8)}
              py-${verticalScaleTW(2)}
            `}
          >
            {/* BLARG - convert to atom RToggle */}
            {/* BLARG - build a custom switch to handle our styles, focusability, etc */}
            <Switch
              style={tw.style(
                Platform.OS === 'android' && {
                  transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                }
              )}
              thumbColor={
                selected
                  ? GLOBAL_COLORS.tertiary.hex
                  : GLOBAL_COLORS.primary.hex
              }
              trackColor={{
                false: GLOBAL_COLORS.secondary.hex,
                true: GLOBAL_COLORS.successTertiary.hex,
              }}
              ios_backgroundColor={GLOBAL_COLORS.secondary.hex}
              onValueChange={() => handleSelection(toggle)}
              value={selected === toggle}
            />
            <Text style={tw`text-gray-500 text-${moderateScaleTW(16)}`}>
              {toggle}
            </Text>
          </View>
        ))}
        {/* FIELD ERRORS */}
        {error && <RInputError error={error} />}
      </View>
    </View>
  );
};
