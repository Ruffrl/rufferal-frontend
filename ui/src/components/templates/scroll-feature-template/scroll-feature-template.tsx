import { ruffwind } from '@rufferal/tailwind';
import { horizontalScaleTW, verticalScaleTW } from '@rufferal/utils';
import { PropsWithChildren } from 'react';
import { Platform, SafeAreaView, ScrollView, View } from 'react-native';
import { PageNavigation } from '../../organisms';

export interface ScrollFeatureTemplateProps {
  backNavigation?: () => void;
  bgColor?: string;
  paddingX?: string;
  skipNavigation?: () => void;
}

export const ScrollFeatureTemplate = ({
  backNavigation,
  bgColor = 'bg-whitePointer-50',
  children,
  paddingX = `px-${horizontalScaleTW(20)}`,
  skipNavigation,
}: PropsWithChildren<ScrollFeatureTemplateProps>) => {
  let paddingY = `pt-${verticalScaleTW(32)}`;
  switch (Platform.OS) {
    case 'android':
      paddingY = `pt-${verticalScaleTW(48)}`;
      break;
    case 'ios':
      paddingY = `pt-${verticalScaleTW(16)}`;
      break;
  }

  return (
    <SafeAreaView style={ruffwind.style(`flex-1`, bgColor)}>
      <View style={ruffwind.style(`flex-1`, paddingX, paddingY)}>
        {backNavigation && (
          <PageNavigation
            backNavigation={backNavigation}
            skipNavigation={skipNavigation}
          />
        )}
        <ScrollView style={ruffwind`flex-1`}>{children}</ScrollView>
      </View>
    </SafeAreaView>
  );
};
