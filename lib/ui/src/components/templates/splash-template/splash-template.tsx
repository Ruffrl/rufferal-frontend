import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';
import tailwind from '../../../../tailwind';

export interface SplashTemplateProps {
  bgColor?: string;
}

export const SplashTemplate = ({
  bgColor = 'bg-whitePointer-50',
  children,
}: PropsWithChildren<SplashTemplateProps>) => {
  return (
    <SafeAreaView style={tailwind.style(`flex-1`, bgColor)}>
      {children}
    </SafeAreaView>
  );
};
