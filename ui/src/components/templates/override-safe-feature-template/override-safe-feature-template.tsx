import { ruffwind } from '@rufferal/tailwind';
import { FeatureTemplateProps } from '@rufferal/types';
import { horizontalScaleTW, verticalScaleTW } from '@rufferal/utils';
import { PropsWithChildren } from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FeatureNavigation } from '../../organisms';

export const OverrideSafeFeatureTemplate = ({
  backNavigation,
  backText,
  bgColor = 'bg-whitePointer-50',
  children,
  paddingX = `px-${horizontalScaleTW(20)}`,
  forwardNavigation,
  forwardText,
}: PropsWithChildren<FeatureTemplateProps>) => {
  const insets = useSafeAreaInsets();

  let paddingY = `pt-${verticalScaleTW(32)}`;
  switch (Platform.OS) {
    case 'android':
      paddingY = `pt-${verticalScaleTW(48)}`;
      break;
    case 'ios':
      paddingY = `pt-[${insets.top}px] pb-[${insets.bottom}px]`;
      break;
  }

  return (
    <View style={ruffwind.style(`flex-1`, bgColor)}>
      <View style={ruffwind.style(`flex-1`, paddingX, paddingY)}>
        {backNavigation && (
          <FeatureNavigation
            backNavigation={backNavigation}
            backText={backText}
            forwardNavigation={forwardNavigation}
            forwardText={forwardText}
          />
        )}
        {children}
      </View>
    </View>
  );
};
