import * as React from 'react';
import tw from 'twrnc';

import { Image, Text, View } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

import {
  capitalize,
  CONTAINER_STYLES,
  ERROR_CONTAINER_STYLES,
  GLOBAL_PROTOTYPE_COLORS,
  GLOBAL_SMALL_ICON_SIZE,
  moderateScaleTW,
  PickerOption,
} from '../../..';

// BLARG - deconstruct this package: @ouroboros/react-native-picker; build your own with
// - focusability
// - style overrides on wheel selection component

// ⚠️ Requires parent <FormProvider/> (react-hook-forms)
export const RMobileSelect = ({
  error,
  handleSelection,
  mobileChevronDownIcon,
  options,
  selected,
}: {
  error?: string;
  handleSelection: (value: string) => void;
  mobileChevronDownIcon?: React.JSX.Element;
  options: PickerOption[];
  selected: string | undefined;
}) => {
  const ChevronDown = () => (
    <>
      {mobileChevronDownIcon || (
        <Image
          source={require('../../../assets/icons-512/chevron-down.png')}
          style={tw.style(GLOBAL_SMALL_ICON_SIZE)}
          resizeMode="contain"
          tintColor={GLOBAL_PROTOTYPE_COLORS.tertiary.hex}
        />
      )}
    </>
  );

  const PickerDisplay = () => {
    return (
      <View
        accessible={true}
        style={tw.style(
          CONTAINER_STYLES,
          tw`justify-between`,
          error && ERROR_CONTAINER_STYLES
        )}
      >
        <Text
          style={tw.style(
            tw`text-zinc-200
            text-${moderateScaleTW(16)}`,
            selected && tw`text-gray-500`
          )}
        >
          {selected ? capitalize(selected) : 'Select...'}
        </Text>
        <ChevronDown />
      </View>
    );
  };

  return (
    <Picker
      component={PickerDisplay}
      onChanged={(e) => handleSelection(e)}
      options={options}
      value={selected}
    />
  );
};
