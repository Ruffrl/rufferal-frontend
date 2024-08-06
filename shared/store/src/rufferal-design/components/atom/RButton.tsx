import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
} from 'react-native';
import tw from 'twrnc';

interface Props extends PressableProps {
  loading?: boolean;
  title?: string;
}

export const RButton = ({ loading, onPress, title = 'Save' }: Props) => {
  return (
    <Pressable
      style={tw`bg-purple-950 rounded elevation-3 items-center justify-center py-3 px-8 mx-2`}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={tw`font-bold text-base text-white tracking-wide`}>{title}</Text>
      )}
    </Pressable>
  );
};
