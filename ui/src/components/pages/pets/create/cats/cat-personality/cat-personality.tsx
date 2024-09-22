import { ruffwind } from '@rufferal/tailwind';
import {
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
  moderateScaleTW,
  verticalScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { ScrollView, Text, View } from 'react-native';

import { useState } from 'react';
import { PageNavigationProps } from '../../../..';
import {
  Button,
  H3,
  HorizontalDivider,
  ProgressBar,
  Switch,
  Tag,
  Toggle,
} from '../../../../../atoms';
import { FeatureTemplate } from '../../../../../templates';

/* eslint-disable-next-line */
export interface CatPersonalityProps extends PageNavigationProps {}

export const CatPersonality = ({ navigation }: CatPersonalityProps) => {
  const [goodWithKids, setGoodWithKids] = useState(false);
  const handleGoodWithKids = () => setGoodWithKids((prev) => !prev);

  const [goodWithDogs, setGoodWithDogs] = useState(false);
  const handleGoodWithDogs = () => setGoodWithDogs((prev) => !prev);
 
  const [goodWithCats, setGoodWithCats] = useState(false);
  const handleGoodWithCats = () => setGoodWithCats((prev) => !prev);

  const [careDeclawed, setCareDeclawed] = useState(false);
  const handleCareDeclawed = () => setCareDeclawed((prev) => !prev);

  const [careMedication, setCareMedication] = useState(false);
  const handleCareMedication = () => setCareMedication((prev) => !prev);

  const [careAnxiety, setCareAnxiety] = useState(false);
  const handleCareAnxiety = () => setCareAnxiety((prev) => !prev);

  const [careSpecial, setCareSpecial] = useState(false);
  const handleCareSpecial = () => setCareSpecial((prev) => !prev);

  return (
    <FeatureTemplate
      backNavigation={() => navigation.navigate('Cat Personality')}
      skipNavigation={() => navigation.navigate('Cat Careplan')}
    >
      <ScrollView>
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
          <H3 text="Behavior and personality" />
          <Text style={ruffwind`text-balticSea-950 font-body text-b2`}>
            Help pet caretakers understand your cat’s needs and unique traits
          </Text>
        </View>
        <View style={ruffwind`mt-5 gap-4`}>
          <View>
            <Text>Good with</Text>

            <View style={ruffwind`justify-between flex-row`}>
              <Text>Kids</Text>
              <Toggle
                toggleState={goodWithKids}
                setToggleState={handleGoodWithKids}
              />
            </View>
            <View style={ruffwind`justify-between flex-row`}>
              <Text>Dogs</Text>
              <Toggle
                toggleState={goodWithDogs}
                setToggleState={handleGoodWithDogs}
              />
            </View>
            <View style={ruffwind`justify-between flex-row`}>
              <Text>Other cats</Text>
              <Toggle
                toggleState={goodWithCats}
                setToggleState={handleGoodWithCats}
              />
            </View>
          </View>
          <HorizontalDivider />
          <View>
            <Text>Personality</Text>

            <Text style={ruffwind`text-gray-500 text-${moderateScaleTW(16)}`}>
              Kids
            </Text>
            <Text>Slider 1</Text>
            <Text>Slider 2</Text>
            <Text>Slider 3</Text>
            <Text>Slider 4</Text>
          </View>
          <HorizontalDivider />
          <View>
            <Text>Care & behavior</Text>
            <View style={ruffwind`justify-between flex-row`}>
              <Text>Declawed</Text>
              <Toggle
                toggleState={careDeclawed}
                setToggleState={handleCareDeclawed}
              />
            </View>
            <View style={ruffwind`justify-between flex-row`}>
              <Text>Requires medication</Text>
              <Toggle
                toggleState={careMedication}
                setToggleState={handleCareMedication}
              />
            </View>
            <View style={ruffwind`justify-between flex-row`}>
              <Text>Seperation anxiety</Text>
              <Toggle
                toggleState={careAnxiety}
                setToggleState={handleCareAnxiety}
              />
            </View>
            <View style={ruffwind`justify-between flex-row`}>
              <Text>Special needs</Text>
              <Toggle
                toggleState={careSpecial}
                setToggleState={handleCareSpecial}
              />
            </View>
            <Switch switchState={careSpecial} setSwitchState={handleCareSpecial} />
          </View>
        </View>
        <View style={ruffwind.style(`gap-2 mt-${verticalScaleTW(37)}`)}>
          <HorizontalDivider color="border-amethystSmoke-600" />
          <Button
            text="Next"
            onPress={() => navigation.navigate('Cat Careplan')}
          />
          <Button
            text="Cancel"
            type="transparent"
            size="standard-short"
            onPress={() => navigation.navigate('Manage Pets')}
          />
        </View>
      </ScrollView>
    </FeatureTemplate>
  );
};
