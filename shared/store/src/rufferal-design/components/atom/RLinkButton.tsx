import { Pressable, PressableProps, Text } from 'react-native';
import tw from 'twrnc';
import { FieldState } from './RButton';

interface Props extends PressableProps {
  state?: FieldState;
  text: string | React.JSX.Element;
  textStyle?: string;
}

const LINK_STYLES = tw`w-full items-center justify-center`;

export const RLinkButton = ({
  onPress,
  state = 'default',
  text,
  textStyle,
}: Props) => {
  // Primary && Default theme
  // let textColor = 'text-blue-500';
  let textColor = 'text-gray-800';

  // Manage state themes
  if (state === 'error') {
    textColor = 'text-red-500';
  } else if (state === 'disabled') {
    textColor = 'text-neutral-500';
  }

  return (
    <Pressable style={tw.style(LINK_STYLES)} onPress={onPress}>
      <Text
        style={tw.style(
          textStyle ? textStyle : ['text-xs tracking-wide', textColor]
        )}
      >
        {text}
      </Text>
    </Pressable>
  );
};
