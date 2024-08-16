import { Pressable, PressableProps, Text } from 'react-native';
import tw from 'twrnc';
import { FieldState } from './RButton';

interface Props extends PressableProps {
  alignRight?: boolean;
  customText?: React.JSX.Element;
  state?: FieldState;
  text?: string;
  textStyle?: string;
}

const LINK_STYLES = tw`w-full items-center justify-center`;

export const RLinkButton = ({
  alignRight = false,
  customText,
  onPress,
  state = 'default',
  text,
  textStyle,
}: Props) => {
  // Primary && Default theme
  // let textColor = 'text-blue-500';
  let textColor = 'text-gray-500';

  // Manage state themes
  if (state === 'error') {
    textColor = 'text-red-500';
  } else if (state === 'disabled') {
    textColor = 'text-zinc-300';
  }

  return (
    <Pressable
      style={tw.style(LINK_STYLES, alignRight && tw`items-end`)}
      onPress={onPress}
    >
      {text && (
        <Text
          style={tw.style(
            textStyle
              ? textStyle
              : ['text-sm font-bold tracking-wide', textColor]
          )}
        >
          {text}
        </Text>
      )}
      {customText && customText}
    </Pressable>
  );
};
