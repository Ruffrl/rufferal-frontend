import { ruffwind } from '@rufferal/tailwind';
import { AccordianProps, AccordionSection } from '@rufferal/types';
import {
  GLOBAL_ICON_SIZE,
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import { HorizontalDivider } from '../horizontal-divider/horizontal-divider';

import { Switch } from '../switch/switch';

import { useCallback } from 'react';
import * as RNCAccordian from 'react-native-collapsible/Accordion';
const CollapsibleAccordion = RNCAccordian.default;

export const Accordian = ({
  accordionDirty,
  activeSections,
  scrollTracker,
  sections,
  setAccordionDirty,
  setActiveSections,
}: AccordianProps) => {
  const handleDirty = useCallback(() => {
    if (!accordionDirty) {
      setAccordionDirty(true);
    }
  }, [accordionDirty, setAccordionDirty]);

  // renders
  const renderSectionHeader = (
    section: AccordionSection,
    index: number,
    isActive: boolean
  ) => {
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
        {section.switch && (
          <>
            {scrollTracker(
              <Controller
                name={section.switch.fieldName}
                control={section.switch.control}
                render={({ field: { onBlur, onChange, value } }) =>
                  section.switch ? (
                    <Switch
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      handleChange={section.switch.handleChange}
                    />
                  ) : (
                    <View />
                  )
                }
              />,
              `${section.switch.fieldName}`
            )}
          </>
        )}
        {isActive ? (
          <Image
            style={ruffwind.style(
              GLOBAL_ICON_SIZE_MEDIUM_SMALL,
              'items-center justify-center'
            )}
            source={require('@rufferal/assets/src/icons/chevron-up.png')}
            // BLARG -import from tailwind config
            tintColor={'#2B242E'}
          />
        ) : (
          <Image
            style={ruffwind.style(
              GLOBAL_ICON_SIZE_MEDIUM_SMALL,
              'items-center justify-center'
            )}
            source={require('@rufferal/assets/src/icons/chevron-down.png')}
            // BLARG -import from tailwind config
            tintColor={'#2B242E'}
          />
        )}
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
      sections={sections}
      activeSections={activeSections}
      renderHeader={(content, index, isActive) =>
        renderSectionHeader(content, index, isActive)
      }
      renderContent={renderSectionContent}
      // onChange={setActiveSections}
      onChange={(indexes) => {
        handleDirty();
        setActiveSections(indexes);
      }}
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
