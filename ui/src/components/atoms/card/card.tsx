import { tailwind } from '@rufferal/tailwind';
import { PropsWithChildren } from 'react';
import { Platform, View } from 'react-native';

interface CardProps {
  height?: string;
}

export const Card = ({
  height = 'h-16',
  children,
}: PropsWithChildren<CardProps>) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

  return (
    <View
      style={[
        !isMobile && { boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.12)' },
        isMobile && {
          shadowColor: '#000',
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.12,
          shadowRadius: 3,
          elevation: 3,
        },
        tailwind.style(`bg-white w-full p-3`, height),
      ]}
    >
      {children}
    </View>
  );
};
