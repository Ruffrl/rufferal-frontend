import { ruffwind } from '@rufferal/tailwind';
import { GLOBAL_ICON_SIZE_MEDIUM_SMALL } from '@rufferal/utils';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';
import {
  Accordian,
  AccordionSection,
  FieldOption,
  H3,
  ProgressBar,
  Tag,
} from '../../../../../atoms';
import { RadioGroup, Select } from '../../../../../molecules';
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
          <Text style={ruffwind`text-pink-500`}>
            MULTI LINE INPUT (Special Instructions)
          </Text>
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
          <Text style={ruffwind`text-pink-500`}>
            MULTI LINE INPUT (Special Instructions)
          </Text>
        </>
      ),
    },
    {
      title: 'Overnight',
      icon: require('@rufferal/assets/src/icons/moon.png'),
      component: (
        <Text style={ruffwind`text-pink-500`}>
          MULTI LINE INPUT (Special Instructions)
        </Text>
      ),
    },
    {
      title: 'Medical',
      icon: require('@rufferal/assets/src/icons/pills.png'),
      component: (
        <Text style={ruffwind`text-pink-500`}>
          MULTI LINE INPUT (Special Instructions)
        </Text>
      ),
    },
    {
      title: 'Special needs',
      icon: require('@rufferal/assets/src/icons/paw-print.png'),
      component: (
        <Text style={ruffwind`text-pink-500`}>
          MULTI LINE INPUT (Special Instructions)
        </Text>
      ),
    },
    {
      title: 'Additional notes',
      icon: require('@rufferal/assets/src/icons/fish.png'),
      component: (
        <Text style={ruffwind`text-pink-500`}>
          MULTI LINE INPUT (Special Instructions)
        </Text>
      ),
    },
  ];

  return (
    <ScrollFeatureTemplate
      backNavigation={() => navigation.navigate('Cat Personality')}
      skipNavigation={() => {
        console.log('BLARG: TODO: Handle form submission');
        navigation.navigate('Manage Pets');
      }}
    >
      <View style={ruffwind`mt-6`}>
        <ProgressBar step={3} total={4} />
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
        <Accordian sections={CAT_CAREPLAN_SECTIONS} />
      </View>
    </ScrollFeatureTemplate>
  );
};
