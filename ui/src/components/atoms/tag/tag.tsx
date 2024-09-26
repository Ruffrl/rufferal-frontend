import { ruffwind } from '@rufferal/tailwind';
import { TagProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { Text, View } from 'react-native';

export const Tag = ({ Icon, text }: TagProps) => {
  return (
    <View
      style={ruffwind`
        self-start
        bg-electricViolet-100
        rounded-${moderateScaleTW(2)}
      `}
    >
      <View
        style={ruffwind`
          flex-row
          gap-${moderateScaleTW(4)}
          px-${moderateScaleTW(4)}
          py-${moderateScaleTW(5)}
        `}
      >
        {Icon && <Icon />}
        <Text style={ruffwind`font-bodySemibold text-b2 text-balticSea-950`}>
          {text}
        </Text>
      </View>
    </View>
  );
};
