import { PropsWithChildren } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import tailwind from '../../../../tailwind';
import { PageNavigation } from '../../atoms';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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
  const isAndroid = Platform.OS === 'android';

  return (
    <SafeAreaView style={tailwind.style(`flex-1`, bgColor)}>
      <View
        style={tailwind.style(`flex-1 px-[18px]`, isAndroid ? 'pt-8' : 'pt-4')}
      >
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
