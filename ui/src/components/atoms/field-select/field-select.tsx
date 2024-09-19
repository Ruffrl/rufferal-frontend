import { ruffwind } from '@rufferal/tailwind';
import {
  capitalize,
  generateKey,
  GLOBAL_ICON_SIZE_SMALL,
  horizontalScaleTW,
  moderateScaleTW,
  verticalScale,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FieldOption, FieldSize, FieldState } from '../types/field-types';

export interface FieldSelectProps<Option> {
  data: Option[];
  labelField: keyof Option;
  onChange: (item: Option) => void;
  placeholder?: string;
  searchField?: keyof Option;
  size?: FieldSize;
  state?: FieldState;
  valueField: keyof Option;
}

export const convertToOptions = (options: string[]): FieldOption[] => {
  return options.map((option) => {
    return { id: generateKey(), label: capitalize(option) };
  });
};

export const FieldSelect = ({
  data,
  labelField,
  onChange,
  placeholder = 'Select...',
  searchField,
  size = 'standard',
  state = 'default',
  valueField,
}: FieldSelectProps<FieldOption>) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  // state
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState<string | null>(null);

  let width = `w-full`;
  switch (size) {
    case 'small':
      width = `w-${horizontalScaleTW(150)}`;
      break;
  }

  const renderRightIcon = () =>
    selected ? (
      <Image
        style={ruffwind.style(
          GLOBAL_ICON_SIZE_SMALL,
          'items-center justify-center'
        )}
        source={require('@rufferal/assets/src/icons/chevron-up.png')}
      />
    ) : (
      <Image
        style={ruffwind.style(
          GLOBAL_ICON_SIZE_SMALL,
          'items-center justify-center'
        )}
        source={require('@rufferal/assets/src/icons/chevron-down.png')}
      />
    );

  const renderItem = (item: FieldOption) => (
    <View
      style={ruffwind`
        px-${moderateScaleTW(16)}
        py-${moderateScaleTW(8)}
      `}
    >
      <Text
        style={ruffwind.style(
          `text-b2`,
          item.id === value
            ? `text-electricViolet-700 font-bodySemibold`
            : `text-balticSea-950 font-body`
        )}
      >
        {item.label}
      </Text>
    </View>
  );

  return (
    <Dropdown
      data={data}
      labelField={labelField}
      onChange={(item) => {
        setValue(item.id);
        onChange(item);
      }}
      searchField={searchField}
      valueField={valueField}
      onFocus={() => setSelected(true)}
      onBlur={() => setSelected(false)}
      placeholder={placeholder}
      search
      showsVerticalScrollIndicator={false}
      maxHeight={verticalScale(320)}
      renderRightIcon={renderRightIcon}
      renderItem={renderItem}
      // Styling for view container
      style={ruffwind.style(
        `bg-white
        border-saltBox-200
        gap-1 
        border-solid 
        border-${moderateScaleTW(1)}
        h-${moderateScaleTW(32)}
        px-${moderateScaleTW(16)}
        py-${moderateScaleTW(8)}
        rounded-${moderateScaleTW(8)}`,
        width
      )}
      // Styling for selected text (inside select field)
      selectedTextStyle={ruffwind`font-body text-saltBox-950 text-b2`}
      // Styling for text placeholder
      placeholderStyle={ruffwind`font-body text-saltBox-700 text-b2`}
      // Styling for input search
      inputSearchStyle={[
        !isMobile && { outlineStyle: 'none' },
        ruffwind`
        font-body
        text-saltBox-700
        text-b2
        h-${moderateScaleTW(24)}`,
      ]}
      // Styling for list container
      containerStyle={[
        !isMobile && { boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.12)' },
        isMobile && {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.1,
          shadowRadius: 0,
          elevation: 3,
        },
        ruffwind`mt-[14px] bg-white border-[0.5px] border-saltBox-200 rounded-b`,
      ]}
      // Background color for item selected in list container
      activeColor={'#F6E8FF'}
    />
  );
};
