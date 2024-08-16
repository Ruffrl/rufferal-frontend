import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { PropsWithChildren, useContext } from 'react';
import { StatusBar, Text, View } from 'react-native';
import tw from 'twrnc';
import { RFormError } from '..';
import { ToastStoreContext } from '../../../store';

const TEMPLATE_PADDING = 'pt-16 pb-8 px-2';

type AccessTemplateProps = {
  header?: string;
};

// BLARG - new atom
export const PageHeader = ({ header = 'Rufferal' }: { header?: string }) => (
  <Text style={tw`text-xl font-bold text-gray-600`}>{header}</Text>
);

export const RAccessTemplate = observer(
  ({
    children,
    header,
  }: PropsWithChildren<AccessTemplateProps>): React.ReactElement => {
    const toastStore = useContext(ToastStoreContext);

    return (
      <View style={tw.style(TEMPLATE_PADDING, 'flex-1', 'bg-purple-200')}>
        <StatusBar backgroundColor="#e9d5ff" />
        {/* <StatusBar backgroundColor={tw.style('bg-purple-200')} /> */}
        {toastStore.messages.length > 0 && (
          // PROBABLY NEED A NEW COMPONENT FOR GLOBAL ERRORS
          <RFormError error={toastStore.messages.toString()} />
        )}
        {header && <PageHeader header={header} />}
        {/* TESTING GLOBAL ERROR */}
        {/* BLARG - how to force truncation on error string? */}
        {/* BLARG - how to force multiple errors display one on top of another? */}
        {/* <View
          style={tw`absolute bottom-20 right-0 z-10 bg-red-200 px-4 max-h-[100px]`}
        >
          <RFormError error="This is a test error that will display and then hopefully disappear and needs a dismissable button!" />
        </View> */}
        <View style={tw`w-full`}>{children}</View>
      </View>
    );
  }
);
