import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import tw from 'twrnc';
import { RBackNavigation, RGlobalError, RPageHeader } from '..';
import {
  GLOBAL_X_PADDING,
  GLOBAL_Y_PADDING,
  horizontalScaleTW,
  verticalScaleTW,
} from '../../utils';

const PAGE_STYLES = tw`flex-1 bg-white`;
const PAGE_PADDING = tw`
  py-${verticalScaleTW(GLOBAL_Y_PADDING)} 
  px-${horizontalScaleTW(GLOBAL_X_PADDING)}
`;

type AccessTemplateProps = {
  backNavigation?: () => void;
  header?: string;
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
};
('');
export const RPrototypeTemplate = observer(
  ({
    backNavigation,
    children,
    header,
    mobileBackIcon,
    mobileCloseIcon,
  }: PropsWithChildren<AccessTemplateProps>): React.ReactElement => {
    /* DEVISE INFORMATION */
    const isIos = Platform.OS === 'ios';

    return (
      <>
        <View
          style={tw.style(
            PAGE_PADDING,
            PAGE_STYLES,
            isIos && tw`py-${horizontalScaleTW(GLOBAL_Y_PADDING * 2)}`
          )}
        >
          {/* STATUS BAR
           * let's us style Android status
           * (wifi, battery icon, time, etc)
           */}
          <StatusBar backgroundColor="#000" />
          {backNavigation && (
            <RBackNavigation
              backNavigation={backNavigation}
              mobileBackIcon={mobileBackIcon}
            />
          )}
          {header && (
            <RPageHeader header={header} removeTopPadding={!!backNavigation} />
          )}
          <View style={tw`flex-1`}>{children}</View>
        </View>
        {/* GLOBAL ERRORS */}
        <RGlobalError mobileCloseIcon={mobileCloseIcon} />
      </>
    );
  }
);
