import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
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
  type?: ButtonType;
}

const BUTTON_STYLES = tw`rounded-md elevation-3 items-center justify-center py-3 px-8 border-2`;

export const RButton = ({
  loading,
  onPress,
  size = 'large',
  state = 'default',
  title = 'Save',
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
  let borderStyle = 'border-gray-600';
  let colorStyle = 'bg-gray-600';
  let textColor = 'text-white';

  // Manage type themes
  if (type === 'secondary') {
    borderStyle = 'border-gray-300';
    colorStyle = 'bg-gray-300';
    textColor = 'text-black';
  } else if (type === 'tertiary') {
    borderStyle = 'border-slate-400';
    colorStyle = 'bg-slate-400';
    textColor = 'text-white';
  }

  // Manage state themes
  if (state === 'error') {
    borderStyle = 'border-red-800';
    colorStyle = 'bg-red-600';
    textColor = 'text-red-100';
  } else if (state === 'disabled') {
    borderStyle = 'border-neutral-400';
    colorStyle = 'bg-neutral-400';
    textColor = 'text-neutral-800';
  }

  return (
    <Pressable
      style={tw.style(BUTTON_STYLES, borderStyle, sizeStyle, colorStyle)}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={tw.style(textColor, 'font-bold text-base tracking-wide')}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};
