import { ruffwind } from '@rufferal/tailwind';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';

interface HorizontalDividerProps {
  type?: 'primary' | 'secondary' | 'tertiary';
}

export const HorizontalDivider = ({
  type = 'primary',
}: HorizontalDividerProps) => {
  let borderColor = `border-graySuit-400`
  switch (type){
    case 'secondary':
      borderColor = `border-amethystSmoke-600`
      break;
    case 'tertiary':
      borderColor = `border-iron-200`
      break;
  }
  return (
    <View
      style={ruffwind.style(
        `border-b w-full border-${moderateScaleTW(1)}`,
        borderColor
      )}
    />
  );
};
