import { ruffwind } from '@rufferal/tailwind';
import { HorizontalDividerProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';

export const HorizontalDivider = ({
  color = 'border-iron-200',
}: HorizontalDividerProps) => {
  return (
    <View
      style={ruffwind.style(
        `border-b w-full border-b-${moderateScaleTW(1)}`,
        color
      )}
    />
  );
};
