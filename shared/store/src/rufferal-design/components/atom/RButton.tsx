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

const BUTTON_STYLES = tw`rounded-md elevation-3 py-3 px-8 border-2 h-12`;
/* 
  color: var(--Primary, #667080);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.32px;
*/
const BUTTON_TEXT_STYLES = tw`font-bold text-base tracking-wide justify-center items-center text-center`;
// PRIMARY
//    #667080: dark gray --> `-gray-500` [#6b7280]
//      white text
// SECONDARY
//    #EEF1F4: light gray --> `-slate-200` [#cbd5e1]
//      primary color text
//      disable color text
// TERTIARY
//    #252529: darkest gray --> `-zinc-900` [#18181b]
//      white text
// DISABLE TEXT COLOR
//    #C8C7CC: medium gray --> `-zinc-300` [#d4d4d8]
// NEUTRALS
//    #000: black --> `-black`
//    #fff: white --> `-white`

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
    borderStyle = 'border-red-800';
    colorStyle = 'bg-red-600';
    textColor = 'text-red-100';
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
