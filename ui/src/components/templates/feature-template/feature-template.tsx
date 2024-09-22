import { ruffwind } from '@rufferal/tailwind';
import { horizontalScaleTW } from '@rufferal/utils';
import { PropsWithChildren } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PageNavigation } from '../../organisms';

export interface FeatureTemplateProps {
  backNavigation?: () => void;
  bgColor?: string;
  overrideSafe?: boolean;
  paddingX?: string;
  skipNavigation?: () => void;
}

export const FeatureTemplate = ({
  backNavigation,
  bgColor = 'bg-whitePointer-50',
  children,
  overrideSafe = false,
  paddingX = `px-${horizontalScaleTW(20)}`,
  skipNavigation,
}: PropsWithChildren<FeatureTemplateProps>) => {
  const insets = useSafeAreaInsets();
  // console.log('BLARG insets: ', insets);
  // console.log('BLARG insets.bottom: ', insets.bottom);
  // console.log('BLARG insets.top: ', insets.top);

  let paddingY = 'pt-8';
  switch (Platform.OS) {
    case 'android':
      paddingY = 'pt-12';
      break;
    case 'ios':
      paddingY = overrideSafe
        ? `pt-[${insets.top}px] pb-[${insets.bottom}px]`
        : 'pt-4';
      break;
  }

  const FeatureBody = () => (
    <View style={ruffwind.style(`flex-1`, paddingX, paddingY)}>
      {backNavigation && (
        <PageNavigation
          backNavigation={backNavigation}
          skipNavigation={skipNavigation}
        />
      )}
      {children}
    </View>
  );

  return overrideSafe ? (
    <View style={ruffwind.style(`flex-1`, bgColor)}>
      <FeatureBody />
    </View>
  ) : (
    <SafeAreaView style={ruffwind.style(`flex-1`, bgColor)}>
      <FeatureBody />
    </SafeAreaView>
  );
};
