import { ruffwind } from '@rufferal/tailwind';
import {
  GLOBAL_ICON_SIZE,
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Text, View } from 'react-native';
import * as Blarg from 'react-native-collapsible/Accordion';
import { HorizontalDivider } from '../horizontal-divider/horizontal-divider';
import { Switch } from '../switch/switch';
const CollapsibleAccordion = Blarg.default;

export interface AccordianProps {
  align?: string;
  text?: string | React.ReactElement;
}

export interface AccordionSection {
  title: string;
  icon?: string;
  component: JSX.Element;
}

const SECTIONS: AccordionSection[] = [
  {
    title: 'Harness',
    icon: require('@rufferal/assets/src/icons/cat-walk.png'),
    component: (
      <>
        <Text style={ruffwind`text-pink-500`}>Something</Text>
        <Text style={ruffwind`text-pink-500`}>Other thing</Text>
        <Text style={ruffwind`text-pink-500`}>This thing</Text>
      </>
    ),
  },
  {
    title: 'Feeding',
    component: (
      <>
        <Text style={ruffwind`text-pink-500`}>Something</Text>
        <Text style={ruffwind`text-pink-500`}>Other thing</Text>
        <Text style={ruffwind`text-pink-500`}>This thing</Text>
      </>
    ),
  },
  {
    title: 'Overnight',
    component: (
      <>
        <Text style={ruffwind`text-pink-500`}>Something</Text>
        <Text style={ruffwind`text-pink-500`}>Other thing</Text>
        <Text style={ruffwind`text-pink-500`}>This thing</Text>
      </>
    ),
  },
  {
    title: 'Medical',
    component: (
      <>
        <Text style={ruffwind`text-pink-500`}>Something</Text>
        <Text style={ruffwind`text-pink-500`}>Other thing</Text>
        <Text style={ruffwind`text-pink-500`}>This thing</Text>
      </>
    ),
  },
  {
    title: 'Special needs',
    component: (
      <>
        <Text style={ruffwind`text-pink-500`}>Something</Text>
        <Text style={ruffwind`text-pink-500`}>Other thing</Text>
        <Text style={ruffwind`text-pink-500`}>This thing</Text>
      </>
    ),
  },
  {
    title: 'Additional notes',
    component: (
      <>
        <Text style={ruffwind`text-pink-500`}>Something</Text>
        <Text style={ruffwind`text-pink-500`}>Other thing</Text>
        <Text style={ruffwind`text-pink-500`}>This thing</Text>
      </>
    ),
  },
];

export const Accordian = ({ align = 'text-center', text }: AccordianProps) => {
  const [activeSection, setActiveSection] = useState<number[] | string[]>([]);
  const [switch1, setSwitch1] = useState(false);

  // renders
  const renderSectionHeader = (section: AccordionSection) => {
    return (
      <View
        style={ruffwind`
        flex-row
        items-center
        gap-${moderateScaleTW(8)}
        p-${moderateScaleTW(8)}`}
      >
        {section?.icon && (
          <Image
            style={ruffwind.style(
              GLOBAL_ICON_SIZE,
              'items-center justify-center'
            )}
            source={section.icon}
            // BLARG -import from tailwind config
            tintColor={'#7D23A6'}
          />
        )}
        <Text
          style={ruffwind`flex-1 font-bodySemibold text-b2 text-balticSea-950`}
        >
          {section.title}
        </Text>
        <Switch
          switchState={switch1}
          setSwitchState={() => setSwitch1((prev) => !prev)}
        />
        <Image
          style={ruffwind.style(
            GLOBAL_ICON_SIZE_MEDIUM_SMALL,
            'items-center justify-center'
          )}
          source={require('@rufferal/assets/src/icons/chevron-down.png')}
          // BLARG -import from tailwind config
          tintColor={'#2B242E'}
        />
      </View>
    );
  };

  const renderSectionContent = (section: AccordionSection) => {
    return (
      <View
        style={ruffwind`
          bg-white
          px-${moderateScaleTW(8)}
          pb-${moderateScaleTW(8)}
          border-chatelle-400
          border-b-${moderateScaleTW(0.5)}
          rounded-${moderateScaleTW(4)}`}
      >
        <View style={ruffwind`mb-${moderateScaleTW(8)}`}>
          <HorizontalDivider color="border-graySuit-400" />
        </View>
        <View style={ruffwind`gap-${moderateScaleTW(12)}`}>
          {section.component}
        </View>
      </View>
    );
  };

  return (
    <CollapsibleAccordion
      expandMultiple
      sections={SECTIONS}
      activeSections={activeSection}
      renderHeader={renderSectionHeader}
      renderContent={renderSectionContent}
      onChange={(indexes: number[]) => setActiveSection(indexes)}
      // BLARG - import from tailwind config electricViolet[700]
      underlayColor={'#9525CB'}
      sectionContainerStyle={ruffwind`
        bg-white
        border-chatelle-400
        border-${moderateScaleTW(0.5)}
        rounded-${moderateScaleTW(4)}
        mb-${moderateScaleTW(8)}`}
    />
  );
};
