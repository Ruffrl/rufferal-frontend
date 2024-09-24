import { ruffwind } from '@rufferal/tailwind';
import { FieldOption, FieldSelectProps } from '@rufferal/types';
import {
  generateKey,
  GLOBAL_ICON_SIZE_SMALL,
  moderateScale,
  moderateScaleTW,
  titleCase,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

export const convertToOptions = (options: string[]): FieldOption[] => {
  return options.map((option) => {
    return {
      id: generateKey(),
      label: titleCase(option),
      value: option.toLowerCase(),
    };
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
  other,
  ...selectProps
}: FieldSelectProps<FieldOption>) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  // state
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState<string | null>(null);

  let width = `w-full`;
  switch (size) {
    case 'small':
      width = `w-${moderateScaleTW(150)}`;
      break;
  }

  let stateStyle = `bg-white border-saltBox-200`;
  let textStyle = `text-saltBox-950`;
  let placeholderStyle = `text-saltBox-700`;
  // BLARG: TODO: Convert tailwind colors into an exportable module so we can access hex values direct as needed
  // colors.codGray[700]
  let tintColor = '#4F4F4F';
  switch (state) {
    case 'errored':
      stateStyle = `bg-white border-red-300`;
      textStyle = `text-red-600`;
      placeholderStyle = `text-red-600`;
      tintColor = '#FF4931';
      break;
    case 'disabled':
      stateStyle = `bg-iron-200 border-iron-300`;
      textStyle = `text-iron-500`;
      placeholderStyle = `text-iron-500`;
      tintColor = '#999999';
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
        tintColor={tintColor}
      />
    ) : (
      <Image
        style={ruffwind.style(
          GLOBAL_ICON_SIZE_SMALL,
          'items-center justify-center'
        )}
        source={require('@rufferal/assets/src/icons/chevron-down.png')}
        tintColor={tintColor}
      />
    );

  const renderItem = (item: FieldOption) => {
    const isOtherItem =
      other && Object.keys(other).length > 0 && data[data.length - 1] === item;

    return (
      <View
        style={ruffwind`
        px-${moderateScaleTW(16)}
        py-${moderateScaleTW(8)}
      `}
      >
        <Text
          style={ruffwind.style(
            `font-body text-b2`,
            item.id === value
              ? `text-electricViolet-700 font-bodySemibold`
              : `text-balticSea-950 font-body`
          )}
        >
          {isOtherItem ? other.component : item.label}
        </Text>
      </View>
    );
  };

  return (
    <Dropdown
      {...selectProps}
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
      maxHeight={moderateScale(320)}
      renderRightIcon={renderRightIcon}
      renderItem={renderItem}
      disable={state === 'disabled'}
      // Styling for view container
      style={ruffwind.style(
        `border-solid 
        gap-${moderateScaleTW(4)}
        border-${moderateScaleTW(1)}
        h-${moderateScaleTW(32)}
        px-${moderateScaleTW(16)}
        py-${moderateScaleTW(8)}
        rounded-${moderateScaleTW(8)}`,
        stateStyle,
        width
      )}
      // Styling for selected text (inside select field)
      selectedTextStyle={ruffwind.style(`font-body text-b2`, textStyle)}
      // Styling for text placeholder
      placeholderStyle={ruffwind.style(`font-body text-b2`, placeholderStyle)}
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
        ruffwind`
          mt-${moderateScaleTW(14)}
          bg-white
          border-${moderateScaleTW(0.5)}
          border-saltBox-200
          rounded-b`,
      ]}
      // Background color for item selected in list container
      activeColor={'#F6E8FF'}
    />
  );
};
