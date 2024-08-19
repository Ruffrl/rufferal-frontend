import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import tw from 'twrnc';
import { RBackNavigation, RGlobalError, RPageHeader } from '..';

const PAGE_STYLES = tw`flex-1 justify-between bg-white`;
const PAGE_PADDING = tw`py-6 px-4`;

type AccessTemplateProps = {
  backNavigation?: () => void;
  header?: string;
  mobileBackIcon?: React.JSX.Element;
};

export const RAccessTemplate = observer(
  ({
    backNavigation,
    children,
    header,
    mobileBackIcon,
  }: PropsWithChildren<AccessTemplateProps>): React.ReactElement => {
    const isIos = Platform.OS === 'ios';

    return (
      <>
        <View style={tw.style(PAGE_PADDING, PAGE_STYLES, isIos && tw`py-12`)}>
          {/* BLARG - testing background color */}
          {/* BLARG - status bar let's us style Android status (wifi, battery icon, time, etc) */}
          {/* <StatusBar backgroundColor="#e9d5ff" /> */}
          {/* <StatusBar backgroundColor={tw.style('bg-purple-200')} /> */}
          <StatusBar backgroundColor="#000" />
          {backNavigation && (
            <RBackNavigation
              backNavigation={backNavigation}
              mobileBackIcon={mobileBackIcon}
            />
          )}
          {header && <RPageHeader header={header} />}
          <View style={tw`flex-1`}>{children}</View>
        </View>
        {/* GLOBAL ERRORS */}
        <RGlobalError />
      </>
    );
  }
);
