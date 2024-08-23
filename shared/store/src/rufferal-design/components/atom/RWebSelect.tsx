import tw from 'twrnc';

import { useState } from 'react';
import { View } from 'react-native';

import {
  CONTAINER_STYLES,
  ERROR_CONTAINER_STYLES,
  FOCUSED_CONTAINER_STYLES,
  INPUT_STYLES,
  PickerOption,
} from '../../..';

// ⚠️ Requires parent <FormProvider/> (react-hook-forms)
export const RWebSelect = ({
  error,
  handleSelection,
  options,
  selected,
}: {
  error?: string;
  handleSelection: (value: string) => void;
  options: PickerOption[];
  selected: string | undefined;
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View
      accessible={true}
      style={tw.style(
        CONTAINER_STYLES,
        error && ERROR_CONTAINER_STYLES,
        focused && FOCUSED_CONTAINER_STYLES
      )}
    >
      <select
        name="cars"
        id="cars"
        onFocus={() => setFocused((prev) => !prev)}
        onBlur={() => setFocused((prev) => !prev)}
        value={selected}
        style={tw.style(INPUT_STYLES, { outlineStyle: 'none' })}
        onChange={(e) => handleSelection(e.target.value)}
        defaultValue={undefined}
      >
        <option value={undefined} hidden>
          Select...
        </option>
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </View>
  );
};
