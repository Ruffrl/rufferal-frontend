import {
  FlatListProps,
  ImageStyle,
  PressableProps,
  StyleProp,
  TextInputProps,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { IDropdownRef } from 'react-native-element-dropdown';

import {
  ButtonType,
  FieldOption,
  FieldSize,
  FieldState,
  OtherOption,
} from '..';

export interface AccordianProps {
  sections: AccordionSection[];
  activeSection: number[] | string[];
  setActiveSections: (indexes: number[] | string[]) => void;
}

export interface AccordionSection {
  title: string;
  icon?: string;
  component: JSX.Element;
  switch?: SectionSwitch;
}

export interface BottomsheetProps {
  animateOnMount?: boolean;
  backgroundColor?: string;
  content: React.ReactNode;
  padding?: string;
  snapPoints?: number[];
}

export interface ButtonProps extends PressableProps {
  loading?: boolean;
  rounded?: boolean;
  size?: FieldSize;
  state?: FieldState;
  text?: string;
  iconRight?: React.JSX.Element;
  iconLeft?: React.JSX.Element;
  type?: ButtonType;
}

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

export interface FieldCharacterCountProps {
  align?: string;
  count: number;
  max: number;
}

export interface FieldInputProps extends Omit<TextInputProps, 'onChange'> {
  onChange: (text: string) => void;
  onSubmit?: () => void;
  size?: FieldSize;
  state?: FieldState;
}

export interface FieldLabelProps {
  text: string;
  state?: FieldState;
}

export interface FieldSelectProps<Option> extends DropdownProps<Option> {
  size?: FieldSize;
  state?: FieldState;
  other?: OtherOption;
}

export interface FullTextProps {
  align?: string;
  text: string | JSX.Element;
}

export interface HorizontalDividerProps {
  color?: string;
}

export interface ItemProps {
  height?: string;
}

export interface ProgressBarProps {
  step: number;
  total: number;
}

export interface RadioProps {
  item: FieldOption;
  onPress: (item: FieldOption) => void;
  selected?: boolean;
}

export interface RangeSliderProps {
  handleChange: (range: [number, number]) => void;
  range?: [number, number];
}

export type SectionSwitch = {
  state: boolean;
  setSwitch: () => void;
};

export interface SingleSliderProps {
  handleChange: (value: number) => void;
  labels?: [string, string];
  value?: number;
}

export interface SwitchProps {
  switchState: boolean;
  setSwitchState: () => void;
}

export interface TagProps {
  Icon?: () => JSX.Element;
  text: string | React.ReactElement;
}

export interface ToggleProps {
  toggleState: boolean;
  setToggleState: () => void;
}

