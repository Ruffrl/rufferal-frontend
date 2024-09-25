import { ruffwind } from '@rufferal/tailwind';
import { Text, View } from 'react-native';

export const BehaviorLabel = ({
  label,
  multiple = false,
}: {
  label: string;
  multiple?: boolean;
}) => {
  return (
    <View style={ruffwind`flex-row justify-between`}>
      <Text
        style={ruffwind`font-bodySemibold text-b3 text-left text-balticSea-950`}
      >
        {label}
      </Text>
      {multiple && (
        <Text style={ruffwind`font-body text-b2 text-right text-saltBox-700`}>
          Select multiple
        </Text>
      )}
    </View>
  );
};
