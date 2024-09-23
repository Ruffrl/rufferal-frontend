import { ruffwind } from '@rufferal/tailwind';
import {
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  verticalScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';
import {
  Accordian,
  AccordionSection,
  Button,
  FieldOption,
  H3,
  HorizontalDivider,
  ProgressBar,
  Tag,
} from '../../../../../atoms';
import { InputArea, RadioGroup, Select } from '../../../../../molecules';
import { ScrollFeatureTemplate } from '../../../../../templates';
import {
  FEEDING_FREQUENCY_OPTIONS,
  FEEDING_QUANTITY_OPTIONS,
  HARNESS_OPTIONS,
  OTHER_OPTION,
} from '../../pet-careplan-options';

/* eslint-disable-next-line */
export interface CatCareplanProps extends PageNavigationProps {}

export const CatCareplan = ({ navigation }: CatCareplanProps) => {
  // form state
  const [harness, setHarness] = useState<FieldOption>();
  const handleHarness = (item: FieldOption) => {
    setHarness(item);
  };

  const [harnessSwitch, setHarnessSwitch] = useState(false);
  const handleHarnessSwitch = () => {
    setHarnessSwitch((prev) => !prev);
  };

  const [activeSection, setActiveSection] = useState<number[] | string[]>([]);
  const handleActiveSections = (indexes: number[] | string[]) =>
    setActiveSection(indexes);

  // renders
  const CAT_CAREPLAN_SECTIONS: AccordionSection[] = [
    {
      title: 'Harness',
      icon: require('@rufferal/assets/src/icons/cat-walk.png'),
      component: (
        <>
          <RadioGroup
            value={harness}
            onChange={handleHarness}
            label="Has your cat comfortably walked on a harness before?"
            items={HARNESS_OPTIONS}
          />
          <InputArea
            label="Special instructions"
            placeholder="Add instructions here..."
          />
        </>
      ),
      switch: {
        state: harnessSwitch,
        setSwitch: handleHarnessSwitch,
      },
    },
    {
      title: 'Feeding',
      icon: require('@rufferal/assets/src/icons/food.png'),
      component: (
        <>
          <Select
            label="Quantity"
            data={FEEDING_QUANTITY_OPTIONS}
            labelField="label"
            onChange={(item) => console.log(item)}
            searchField="label"
            valueField="id"
            other={OTHER_OPTION}
          />
          <Select
            label="Frequency"
            data={FEEDING_FREQUENCY_OPTIONS}
            labelField="label"
            onChange={(item) => console.log(item)}
            searchField="label"
            valueField="id"
            other={OTHER_OPTION}
          />
          <InputArea
            label="Special instructions"
            placeholder="Add instructions here..."
          />
        </>
      ),
    },
    {
      title: 'Overnight',
      icon: require('@rufferal/assets/src/icons/moon.png'),
      component: (
        <InputArea
          label="Special instructions"
          placeholder="Add instructions here..."
        />
      ),
    },
    {
      title: 'Medical',
      icon: require('@rufferal/assets/src/icons/pills.png'),
      component: (
        <InputArea
          label="Special instructions"
          placeholder="Add instructions here..."
        />
      ),
    },
    {
      title: 'Special needs',
      icon: require('@rufferal/assets/src/icons/paw-print.png'),
      component: (
        <InputArea
          label="Special instructions"
          placeholder="Add instructions here..."
        />
      ),
    },
    {
      title: 'Additional notes',
      icon: require('@rufferal/assets/src/icons/fish.png'),
      component: (
        <InputArea
          label="Special instructions"
          placeholder="Add instructions here..."
        />
      ),
    },
  ];

  return (
    <ScrollFeatureTemplate
      backNavigation={() => navigation.navigate('Cat Personality')}
      // BLARG - handle if form dirty and valid, change from "Skip" to "Complete"
      skipNavigation={() => {
        console.log('BLARG: TODO: Handle form submission');
        navigation.navigate('Manage Pets');
      }}
    >
      <View style={ruffwind`mt-6`}>
        <ProgressBar step={4} total={4} />
      </View>
      <View style={ruffwind`mt-6 gap-2`}>
        <Tag
          Icon={() => (
            <Image
              style={ruffwind.style(
                GLOBAL_ICON_SIZE_MEDIUM_SMALL,
                'items-center justify-center'
              )}
              source={require('@rufferal/assets/src/icons/cat.png')}
            />
          )}
          text="Gavin"
        />
        <H3 text="Add a careplan" />
        <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
          Turn toggle on to include instructions in this pet’s bookings
        </Text>
      </View>
      <View style={ruffwind`mt-6 gap-2`}>
        <Accordian
          activeSection={activeSection}
          setActiveSections={(indexes) => handleActiveSections(indexes)}
          sections={CAT_CAREPLAN_SECTIONS}
        />
      </View>
      <View
        style={ruffwind.style(
          `gap-2`,
          activeSection.length > 0
            ? ` mt-${verticalScaleTW(16)}`
            : `mt-${verticalScaleTW(161)}`
        )}
      >
        <HorizontalDivider color="border-amethystSmoke-600" />
        <Button
          // BLARG - handle if form dirty and valid, change from "Next" to "Complete"
          text="Next"
          onPress={() => {
            console.log('🚨 URGENT PRIYA - HANDLE FORM SUBMIT 🚨');
            navigation.navigate('Manage Pets');
          }}
        />
        <Button
          text="Cancel"
          type="transparent"
          size="standard-short"
          onPress={() => navigation.navigate('Manage Pets')}
        />
      </View>
    </ScrollFeatureTemplate>
  );
};
