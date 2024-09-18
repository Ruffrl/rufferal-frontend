import { ruffwind } from '@rufferal/tailwind';
import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

export interface SplashTemplateProps {
  bgColor?: string;
}

export const SplashTemplate = ({
  bgColor = 'bg-whitePointer-50',
  children,
}: PropsWithChildren<SplashTemplateProps>) => {
  return (
    <SafeAreaView style={ruffwind.style(`flex-1`, bgColor)}>
      {children}
    </SafeAreaView>
  );
};
