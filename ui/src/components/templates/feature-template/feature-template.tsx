import { tailwind } from '@rufferal/tailwind';
import { PropsWithChildren } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import { PageNavigation } from '../../organisms';

export interface FeatureTemplateProps {
  backNavigation?: () => void;
  bgColor?: string;
  skipNavigation?: () => void;
}

export const FeatureTemplate = ({
  backNavigation,
  bgColor = 'bg-whitePointer-50',
  children,
  skipNavigation,
}: PropsWithChildren<FeatureTemplateProps>) => {
  let topPadding = 'pt-8';
  switch (Platform.OS) {
    case 'android':
      topPadding = 'pt-12';
      break;
    case 'ios':
      topPadding = 'pt-4';
      break;
  }

  return (
    <SafeAreaView style={tailwind.style(`flex-1`, bgColor)}>
      <View style={tailwind.style(`flex-1 px-[18px]`, topPadding)}>
        {backNavigation && (
          <PageNavigation
            backNavigation={backNavigation}
            skipNavigation={skipNavigation}
          />
        )}
        {children}
      </View>
    </SafeAreaView>
  );
};
