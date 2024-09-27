import { ruffwind } from '@rufferal/tailwind';
import { AccordianProps, AccordionSection } from '@rufferal/types';
import {
  areNumberArraysEqualNoOrder,
  GLOBAL_ICON_SIZE,
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Controller } from 'react-hook-form';
import { Text, View } from 'react-native';
import { HorizontalDivider } from '../horizontal-divider/horizontal-divider';

import { Switch } from '../switch/switch';

import { useCallback, useEffect, useState } from 'react';
import * as RNCAccordian from 'react-native-collapsible/Accordion';
const CollapsibleAccordion = RNCAccordian.default;

export const Accordian = ({
  activeSections,
  sections,
  setActiveSections,
  scrollTracker,
}: AccordianProps) => {
  const [toggleSections, setToggleSections] = useState<number[]>([]);

  /* CALLBACKS */
  const handleActiveSections = useCallback(
    (indexes: number[]) => {
      setActiveSections(indexes);
    },
    [setActiveSections]
  );
  const toggleSection = useCallback((index: number) => {
    setToggleSections((prev) => {
      // Check if the section is already in the array
      if (prev.includes(index)) {
        // If it is, remove it
        return prev.filter((s) => s !== index);
      } else {
        // If it isn't, add it
        return [...prev, index];
      }
    });
  }, []);
  console.log('AFTER? toggleSections', toggleSections);

  useEffect(() => {
    const checkEqual = areNumberArraysEqualNoOrder(
      activeSections,
      toggleSections
    );

    if (toggleSections.length > 0 && !checkEqual) {
      console.log('activeSections', activeSections);
      console.log('toggleSections', toggleSections);
      const newIndices = Array.from(
        new Set([...activeSections, ...toggleSections])
      );
      handleActiveSections(newIndices);
    }
  }, [activeSections, handleActiveSections, toggleSections]);

  // renders
  const renderSectionHeader = (section: AccordionSection, index: number) => {
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
                      onChange={(value) => {
                        onChange(value);
                        toggleSection(index);
                      }}
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
      sections={sections}
      activeSections={activeSections}
      renderHeader={(content, index) => renderSectionHeader(content, index)}
      renderContent={renderSectionContent}
      onChange={handleActiveSections}
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
