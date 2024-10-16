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

import { Control, FieldValues } from 'react-hook-form';
import {
  ButtonType,
  FieldOption,
  FieldSize,
  FieldState,
  OtherOption,
} from '..';

export interface AccordianProps {
  accordionDirty: boolean;
  activeSections: number[];
  scrollTracker: (component: React.ReactNode, inputKey: string) => JSX.Element;
  sections: AccordionSection[];
  setAccordionDirty: (dirty: boolean) => void;
  setActiveSections: (indexes: number[]) => void;
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

export interface FieldInputProps
  extends Omit<TextInputProps, 'onChange' | 'value'> {
  onChange: (text: string) => void;
  onSubmit?: () => void;
  size?: FieldSize;
  state?: FieldState;
  value: string | undefined | null;
}

export interface LabelProps {
  text: string;
  size?: Extract<FieldSize, 'default' | 'large' | 'xlarge' | '2xlarge'>;
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
  textColor?: string;
}

export interface HorizontalDividerProps {
  color?: string;
}

export interface ItemProps extends PressableProps {
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
  control: Control<FieldValues>;
  fieldName: string;
  handleChange: (value: boolean) => void;
};

export interface SingleSliderProps {
  onChange: (value: number) => void;
  value?: number;
}

export interface SwitchProps {
  switchState: boolean;
  setSwitchState: () => void;
}

export interface SwitchToggleProps {
  testID?: string;
  switchOn: boolean;
  onPress: () => void;
  containerStyle?: ViewStyle;
  circleStyle?: ViewStyle;
  backgroundColorOn?: string;
  backgroundColorOff?: string;
  backgroundImageOn?: React.ReactElement;
  backgroundImageOff?: React.ReactElement;
  circleColorOff?: string;
  circleColorOn?: string;
  duration?: number;
  type?: number;
  buttonText?: string;
  backTextRight?: string;
  backTextLeft?: string;
  buttonTextStyle?: StyleProp<TextStyle>;
  textRightStyle?: StyleProp<TextStyle>;
  textLeftStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;
  leftContainerStyle?: StyleProp<ViewStyle>;
  RTL?: boolean;
}

export interface TagProps {
  Icon?: () => JSX.Element;
  text: string | React.ReactElement;
}

export interface ToggleProps extends Omit<SwitchToggleProps, 'onPress'> {
  handleChange?: (value: boolean) => void;
  onBlur: () => void;
  onChange: (value: boolean) => void;
  switchOn: boolean;
}
