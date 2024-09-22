import { ruffwind } from '@rufferal/tailwind';
import { horizontalScaleTW, verticalScaleTW } from '@rufferal/utils';
import { PropsWithChildren } from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PageNavigation } from '../../organisms';

export interface OverrideSafeFeatureTemplateProps {
  backNavigation?: () => void;
  bgColor?: string;
  paddingX?: string;
  skipNavigation?: () => void;
}

export const OverrideSafeFeatureTemplate = ({
  backNavigation,
  bgColor = 'bg-whitePointer-50',
  children,
  paddingX = `px-${horizontalScaleTW(20)}`,
  skipNavigation,
}: PropsWithChildren<OverrideSafeFeatureTemplateProps>) => {
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
          <PageNavigation
            backNavigation={backNavigation}
            skipNavigation={skipNavigation}
          />
        )}
        {children}
      </View>
    </View>
  );
};
