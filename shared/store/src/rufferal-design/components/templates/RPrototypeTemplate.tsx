import * as React from 'react';
import tw from 'twrnc';

import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { RBackNavigation, RPageHeader } from '..';
import {
  GLOBAL_COLORS,
  GLOBAL_X_PADDING,
  GLOBAL_Y_PADDING,
  horizontalScaleTW,
  verticalScaleTW,
} from '../../utils';

const PAGE_STYLES = tw`
  flex-1
  py-${verticalScaleTW(GLOBAL_Y_PADDING)} 
  px-${horizontalScaleTW(GLOBAL_X_PADDING)}
`;
// statusBarHeight

type AccessTemplateProps = {
  backNavigation?: () => void;
  header?: string;
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  navigationHeader?: string;
  pageColor?: string;
};
('');
export const RPrototypeTemplate = observer(
  ({
    backNavigation,
    children,
    header,
    mobileBackIcon,
    mobileCloseIcon,
    navigationHeader,
    pageColor = GLOBAL_COLORS.black.hex,
  }: PropsWithChildren<AccessTemplateProps>): React.ReactElement => {
    /* DEVISE INFORMATION */
    return (
      <SafeAreaView style={tw`bg-[${pageColor}] flex-1`}>
        <View style={tw.style(PAGE_STYLES, tw``)}>
          {/* STATUS BAR
           * let's us style Android status
           * (wifi, battery icon, time, etc)
           */}
          <StatusBar backgroundColor={GLOBAL_COLORS.black.hex} />
          {backNavigation && (
            <RBackNavigation
              backNavigation={backNavigation}
              mobileBackIcon={mobileBackIcon}
              navigationHeader={navigationHeader}
            />
          )}
          {header && <RPageHeader header={header} />}
          <View style={tw`flex-1`}>{children}</View>
        </View>
      </SafeAreaView>
    );
  }
);
