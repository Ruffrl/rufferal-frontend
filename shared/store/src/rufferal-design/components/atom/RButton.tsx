import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  View,
} from 'react-native';
import tw from 'twrnc';
import { horizontalScaleTW, moderateScaleTW } from '../../utils';
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

const BUTTON_STYLES = tw`
  border-2
  justify-center 
  items-center 
  h-${moderateScaleTW(48)}
  rounded-${moderateScaleTW(6)}
`;
const BUTTON_TEXT_STYLES = tw`
  font-bold
  tracking-wide 
  text-center
  text-${moderateScaleTW(16)}
`;

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
    borderStyle = 'border-slate-200';
    colorStyle = 'bg-slate-200';
    textColor = 'text-gray-500';
  } else if (type === 'tertiary') {
    borderStyle = 'border-zinc-900';
    colorStyle = 'bg-zinc-900';
    textColor = 'text-white';
  }

  // Manage state themes
  if (state === 'error') {
    borderStyle = 'border-red-700';
    colorStyle = 'bg-red-500';
    textColor = 'text-zinc-900';
  } else if (state === 'disabled') {
    borderStyle = 'border-slate-200';
    colorStyle = 'bg-slate-200';
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
            style={tw`
              w-full
              flex-row
              items-center
              justify-center
              gap-${horizontalScaleTW(16)}
            `}
          >
            {titleIcon && titleIcon}
            <Text style={tw.style(textColor, BUTTON_TEXT_STYLES)}>{title}</Text>
          </View>
        </>
      )}
    </Pressable>
  );
};
