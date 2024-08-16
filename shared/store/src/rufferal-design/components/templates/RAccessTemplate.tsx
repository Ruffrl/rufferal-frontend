import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { PropsWithChildren, useContext } from 'react';
import {
  Image,
  Platform,
  Pressable,
  StatusBar,
  Text,
  View,
} from 'react-native';
import tw from 'twrnc';
import { RFormError } from '..';
import { ToastStoreContext } from '../../../store';

const PAGE_STYLES = tw`flex-1 justify-between bg-white`;
const PAGE_PADDING = tw`py-6 px-4`;

type AccessTemplateProps = {
  backNavigation?: () => void;
  header?: string;
  mobileBackIcon?: React.JSX.Element;
};

// PRIMARY
//    #667080: dark gray --> `-gray-500`
//      white text
// SECONDARY
//    #EEF1F4: light gray --> `-slate-200`
//      primary color text
//      disable color text
// TERTIARY
//    #252529: darkest gray --> `-zinc-900`
//      white text
// DISABLE TEXT COLOR
//    #C8C7CC: medium gray --> `-zinc-300`
// NEUTRALS
//    #000: black --> `-black`
//    #fff: white --> `-white`

// BLARG - new atom
/*
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.48px;
*/
export const PageHeader = ({ header = 'Rufferal' }: { header?: string }) => (
  <Text style={tw`py-6 text-2xl font-bold text-gray-500`}>{header}</Text>
);

export const BackNavigation = ({
  backNavigation,
  mobileBackIcon,
}: {
  backNavigation: () => void;
  mobileBackIcon?: React.JSX.Element;
}) => {
  return (
    <View>
      <Pressable onPress={backNavigation}>
        {mobileBackIcon || (
          <Image
            source={require('../../../assets/icons-16/arrow-left.png')}
            resizeMode="contain"
            style={tw`w-[24px] h-[24px]`}
            tintColor="#18181b"
          />
        )}
      </Pressable>
    </View>
  );
};

export const RAccessTemplate = observer(
  ({
    backNavigation,
    children,
    header,
    mobileBackIcon,
  }: PropsWithChildren<AccessTemplateProps>): React.ReactElement => {
    const isIos = Platform.OS === 'ios';
    const toastStore = useContext(ToastStoreContext);

    return (
      <View style={tw.style(PAGE_PADDING, PAGE_STYLES, isIos && tw`py-12`)}>
        {/* BLARG - testing background color */}
        {/* BLARG - status bar let's us style Android status (wifi, battery icon, time, etc) */}
        {/* <StatusBar backgroundColor="#e9d5ff" /> */}
        {/* <StatusBar backgroundColor={tw.style('bg-purple-200')} /> */}
        <StatusBar backgroundColor="#000" />
        {backNavigation && (
          <BackNavigation
            backNavigation={backNavigation}
            mobileBackIcon={mobileBackIcon}
          />
        )}
        {header && <PageHeader header={header} />}
        <View style={tw`flex-1`}>{children}</View>
        {/* TESTING GLOBAL ERROR */}
        {/* BLARG - how to force truncation on error string? */}
        {/* BLARG - how to force multiple errors display one on top of another? */}
        {/* <View
          style={tw`absolute bottom-20 right-0 z-10 bg-red-200 px-4 max-h-[100px]`}
          >
          <RFormError error="This is a test error that will display and then hopefully disappear and needs a dismissable button!" />
          </View> */}
        {toastStore.messages.length > 0 && (
          // PROBABLY NEED A NEW COMPONENT FOR GLOBAL ERRORS
          <RFormError error={toastStore.messages.toString()} />
        )}
      </View>
    );
  }
);
