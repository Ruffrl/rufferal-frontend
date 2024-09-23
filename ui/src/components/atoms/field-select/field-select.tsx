import { ruffwind } from '@rufferal/tailwind';
import {
  generateKey,
  GLOBAL_ICON_SIZE_SMALL,
  moderateScale,
  moderateScaleTW,
  titleCase,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { useState } from 'react';
import {
  FlatListProps,
  ImageStyle,
  Platform,
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Dropdown, IDropdownRef } from 'react-native-element-dropdown';
import { FieldOption, FieldSize, FieldState } from '../';
import { OtherOption } from '../../molecules';

export interface FieldSelectProps<Option> extends DropdownProps<Option> {
  size?: FieldSize;
  state?: FieldState;
  other?: OtherOption;
}

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
          bg-white-500
          border-${moderateScaleTW(0.5)}
          border-saltBox-200
          rounded-b`,
      ]}
      // Background color for item selected in list container
      activeColor={'#F6E8FF'}
    />
  );
};

export interface DropdownProps<T> {
  ref?:
    | React.RefObject<IDropdownRef>
    | React.MutableRefObject<IDropdownRef>
    | null
    | undefined;
  testID?: string;
  itemTestIDField?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  selectedTextProps?: TextProps;
  itemContainerStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  inputSearchStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  maxHeight?: number;
  minHeight?: number;
  fontFamily?: string;
  iconColor?: string;
  activeColor?: string;
  data: T[];
  value?: T | string | null | undefined;
  placeholder?: string;
  labelField: keyof T;
  valueField: keyof T;
  searchField?: keyof T;
  search?: boolean;
  searchPlaceholder?: string;
  disable?: boolean;
  autoScroll?: boolean;
  showsVerticalScrollIndicator?: boolean;
  dropdownPosition?: 'auto' | 'top' | 'bottom';
  // flatListProps?: Omit<FlatListProps<any>, 'renderItem' | 'data'>;
  flatListProps?: Omit<FlatListProps<unknown>, 'renderItem' | 'data'>;
  keyboardAvoiding?: boolean;
  backgroundColor?: string;
  confirmSelectItem?: boolean;
  accessibilityLabel?: string;
  itemAccessibilityLabelField?: string;
  inverted?: boolean;
  mode?: 'default' | 'modal' | 'auto';
  closeModalWhenSelectedItem?: boolean;
  excludeItems?: T[];
  excludeSearchItems?: T[];
  onChange: (item: T) => void;
  renderLeftIcon?: (visible?: boolean) => JSX.Element | null | undefined;
  renderRightIcon?: (visible?: boolean) => JSX.Element | null | undefined;
  renderItem?: (item: T, selected?: boolean) => JSX.Element | null | undefined;
  renderInputSearch?: (
    onSearch: (text: string) => void
  ) => JSX.Element | null | undefined;
  onFocus?: () => void;
  onBlur?: () => void;
  searchQuery?: (keyword: string, labelValue: string) => boolean;
  onChangeText?: (search: string) => void;
  onConfirmSelectItem?: (item: T) => void;
}
