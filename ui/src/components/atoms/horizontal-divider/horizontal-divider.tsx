import { ruffwind } from '@rufferal/tailwind';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';

interface HorizontalDividerProps {
  color?: string;
}

export const HorizontalDivider = ({
  color = 'border-iron-200',
}: HorizontalDividerProps) => {
  return (
    <View
      style={ruffwind.style(
        `border-b w-full border-${moderateScaleTW(1)}`,
        color
      )}
    />
  );
};
