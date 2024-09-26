import { ruffwind } from '@rufferal/tailwind';
import { horizontalScaleTW, verticalScaleTW } from '@rufferal/utils';
import { PropsWithChildren } from 'react';
import { Platform, SafeAreaView, ScrollView, View } from 'react-native';
import { FeatureNavigation } from '../../organisms';
import { FeatureTemplateProps } from '@rufferal/types';

export const ScrollFeatureTemplate = ({
  backNavigation,
  backText,
  bgColor = 'bg-whitePointer-50',
  children,
  forwardNavigation,
  forwardText,
  paddingX = `px-${horizontalScaleTW(20)}`,
}: PropsWithChildren<FeatureTemplateProps>) => {
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
          <FeatureNavigation
            backNavigation={backNavigation}
            backText={backText}
            forwardNavigation={forwardNavigation}
            forwardText={forwardText}
          />
        )}
        <ScrollView style={ruffwind`flex-1`}>{children}</ScrollView>
      </View>
    </SafeAreaView>
  );
};
