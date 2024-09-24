import { ruffwind } from '@rufferal/tailwind';
import { TagProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { Text, View } from 'react-native';

export const Tag = ({ Icon, text }: TagProps) => {
  return (
    <View
      style={ruffwind`
      bg-electricViolet-100
      flex-row
      gap-1
      h-${moderateScaleTW(26)}
      px-${moderateScaleTW(4)}
      py-${moderateScaleTW(5)}
      rounded-${moderateScaleTW(2)}
      w-${moderateScaleTW(62)}
    `}
    >
      {Icon && <Icon />}
      <Text style={ruffwind`font-bodySemibold text-b2 text-balticSea-950`}>
        {text}
      </Text>
    </View>
  );
};
