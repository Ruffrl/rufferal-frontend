import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  View,
} from 'react-native';
import tw from 'twrnc';
import { FieldSize } from './RInput';

export type FieldState = 'default' | 'error' | 'disabled';
export type ButtonType = 'primary' | 'secondary' | 'tertiary';

interface Props extends PressableProps {
  loading?: boolean;
  size?: FieldSize;
  state?: FieldState;
  title?: string;
  titleIcon?: React.JSX.Element;
  type?: ButtonType;
}

const BUTTON_STYLES = tw`rounded-md elevation-3 py-3 px-8 border-2`;
const BUTTON_TEXT_STYLES = tw`font-bold text-base tracking-wide justify-center items-center text-center`;
// #000: black --> `-black`
// #252529: darkest gray --> `-zinc-900`
// #667080: dark gray --> `-gray-500`
// #C8C7CC: medium gray --> `-zinc-300`
// #EEF1F4: light gray --> `-slate-100`
// #fff: white --> `-white`

export const RButton = ({
  loading,
  onPress,
  size = 'large',
  state = 'default',
  title = 'Save',
  titleIcon,
  type = 'primary',
}: Props) => {
  let sizeStyle = 'w-2/5';
  switch (size) {
    case 'medium':
      sizeStyle = 'w-3/5';
      break;
    case 'large':
      sizeStyle = 'w-full';
      break;
  }

  // Primary && Default theme
  let borderStyle = 'border-gray-500';
  let colorStyle = 'bg-gray-500';
  let textColor = 'text-white';

  // Manage type themes
  if (type === 'secondary') {
    borderStyle = 'border-slate-100';
    colorStyle = 'bg-slate-100';
    textColor = 'text-gray-500';
  } else if (type === 'tertiary') {
    borderStyle = 'border-zinc-900';
    colorStyle = 'bg-zinc-900';
    textColor = 'text-white';
  }

  // Manage state themes
  if (state === 'error') {
    borderStyle = 'border-red-800';
    colorStyle = 'bg-red-600';
    textColor = 'text-red-100';
  } else if (state === 'disabled') {
    borderStyle = 'border-slate-100';
    colorStyle = 'bg-slate-100';
    textColor = 'text-zinc-300';
  }

  return (
    <Pressable
      style={tw.style(BUTTON_STYLES, borderStyle, sizeStyle, colorStyle)}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          <View
            style={tw`relative w-full flex-row gap-4 items-center justify-center`}
          >
            {titleIcon && titleIcon}
            <Text style={tw.style(textColor, BUTTON_TEXT_STYLES)}>{title}</Text>
          </View>
        </>
      )}
    </Pressable>
  );
};
