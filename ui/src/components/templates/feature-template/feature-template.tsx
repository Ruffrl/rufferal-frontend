import { ruffwind } from '@rufferal/tailwind';
import { FeatureTemplateProps } from '@rufferal/types';
import { horizontalScaleTW, verticalScaleTW } from '@rufferal/utils';
import { PropsWithChildren } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';

import { FeatureNavigation } from '../../organisms';

export const FeatureTemplate = ({
  backNavigation,
  bgColor = 'bg-whitePointer-50',
  children,
  paddingX = `px-${horizontalScaleTW(20)}`,
  forwardNavigation,
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
            forwardNavigation={forwardNavigation}
          />
        )}
        {children}
      </View>
    </SafeAreaView>
  );
};
