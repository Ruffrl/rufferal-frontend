import { ruffwind } from '@rufferal/tailwind';
import { PropsWithChildren } from 'react';
import { Platform, View } from 'react-native';

interface ItemProps {
  height?: string;
}

export const Item = ({
  height = 'h-16',
  children,
}: PropsWithChildren<ItemProps>) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

  return (
    <View
      style={[
        !isMobile && { boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.10)' },
        isMobile && {
          shadowColor: '#000',
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.12,
          shadowRadius: 3,
          elevation: 3,
        },
        ruffwind.style(`bg-white w-full p-3`, height),
      ]}
    >
      {children}
    </View>
  );
};
