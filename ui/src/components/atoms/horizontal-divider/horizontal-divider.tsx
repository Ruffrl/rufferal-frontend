import { ruffwind } from '@rufferal/tailwind';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';

/* eslint-disable-next-line @typescript-eslint/no-empty-interface*/
interface HorizontalDividerProps {
  type?: 'primary' | 'secondary';
}

export const HorizontalDivider = ({
  type = 'primary',
}: HorizontalDividerProps) => {
  return (
    <View
      style={ruffwind.style(
        `border-b border-${moderateScaleTW(1)} border-graySuit-400 w-full`,
        type === 'primary' ? `border-graySuit-400` : `border-amethystSmoke-600`
      )}
    />
  );
};
