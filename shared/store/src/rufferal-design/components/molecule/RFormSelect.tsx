// import * as React from 'react';

import { useState } from 'react';
import {
  ControllerRenderProps,
  FieldError,
  useFormContext,
} from 'react-hook-form';
import { Platform, View } from 'react-native';

import { RInputError, RLabel, RMobileSelect, RWebSelect } from '../../..';

export interface PickerOption {
  value: string | number;
  text: string;
}

// ⚠️ Requires parent <FormProvider/> (react-hook-forms)
export const RFormSelect = ({
  error,
  field,
  label,
  mobileChevronDownIcon,
  options,
}: {
  error?: FieldError | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any>;
  label?: string;
  mobileChevronDownIcon?: React.JSX.Element;
  options: PickerOption[];
}) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  const [selected, setSelected] = useState<string>();
  console.log('BLARG selected', selected);

  const { setValue } = useFormContext();

  const handleSelection = (value: string) => {
    setSelected(value);
    setValue(field.name, value, { shouldDirty: true });
  };

  return (
    <View>
      {/* BLARG - add label state to turn Red on error */}
      {label && <RLabel label={label} />}
      {isMobile ? (
        <RMobileSelect
          options={options}
          error={error?.message}
          handleSelection={handleSelection}
          selected={selected}
          mobileChevronDownIcon={mobileChevronDownIcon}
        />
      ) : (
        <RWebSelect
          options={options}
          error={error?.message}
          handleSelection={handleSelection}
          selected={selected}
        />
      )}
      {error && <RInputError error={error} />}
    </View>
  );
};
