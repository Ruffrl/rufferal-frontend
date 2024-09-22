import { ruffwind } from '@rufferal/tailwind';
import {
  GLOBAL_ICON_SIZE_MEDIUM_SMALL,
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
  SingleSlider,
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

  const [personalityTemperment, setPersonalityTemperment] = useState<number>();
  const handleTemperment = (value: number) => setPersonalityTemperment(value);

  const [personalityEnergy, setPersonalityEnergy] = useState<number>();
  const handleEnergy = (value: number) => setPersonalityEnergy(value);

  const [personalityAutonomy, setPersonalityAutonomy] = useState<number>();
  const handleAutonomy = (value: number) => setPersonalityAutonomy(value);

  const [personalityMotivation, setPersonalityMotivation] = useState<number>();
  const handleMotivation = (value: number) => setPersonalityMotivation(value);

  const BehaviorLabel = ({
    label,
    multiple = false,
  }: {
    label: string;
    multiple?: boolean;
  }) => (
    <View style={ruffwind`flex-row justify-between`}>
      <Text
        style={ruffwind`font-bodySemibold text-b3 text-left text-balticSea-950`}
      >
        {label}
      </Text>
      {multiple && (
        <Text style={ruffwind`font-body text-b2 text-right text-saltBox-700`}>
          Select multiple
        </Text>
      )}
    </View>
  );

  const ToggleLabel = ({ label }: { label: string }) => (
    <Text style={ruffwind`font-body text-b3 text-saltBox-700`}>{label}</Text>
  );

  return (
    <FeatureTemplate
      backNavigation={() => navigation.navigate('Cat Avatar')}
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
          <View style={ruffwind`gap-2`}>
            <BehaviorLabel label="Good with" multiple />
            <View style={ruffwind`justify-between flex-row`}>
              <ToggleLabel label="Kids" />
              <Toggle
                toggleState={goodWithKids}
                setToggleState={handleGoodWithKids}
              />
            </View>
            <View style={ruffwind`justify-between flex-row`}>
              <ToggleLabel label="Dogs" />
              <Toggle
                toggleState={goodWithDogs}
                setToggleState={handleGoodWithDogs}
              />
            </View>
            <View style={ruffwind`justify-between flex-row`}>
              <ToggleLabel label="Other cats" />
              <Toggle
                toggleState={goodWithCats}
                setToggleState={handleGoodWithCats}
              />
            </View>
          </View>
          <HorizontalDivider color="border-saltBox-200" />
          <View>
            <BehaviorLabel label="Personality" />
            <View style={ruffwind`mt-1 gap-3`}>
              <SingleSlider
                handleChange={handleTemperment}
                labels={['shy', 'social']}
                value={personalityTemperment}
              />
              <SingleSlider
                handleChange={handleEnergy}
                labels={['relaxed', 'active']}
                value={personalityEnergy}
              />
              <SingleSlider
                handleChange={handleAutonomy}
                labels={['dependent', 'independent']}
                value={personalityAutonomy}
              />
              <SingleSlider
                handleChange={handleMotivation}
                labels={['food motivated', 'praise motivated']}
                value={personalityMotivation}
              />
            </View>
          </View>
          <HorizontalDivider color="border-saltBox-200" />
          <View style={ruffwind`gap-2`}>
            <BehaviorLabel label="Care & behavior" multiple />
            <View style={ruffwind`justify-between flex-row`}>
              <ToggleLabel label="Declawed" />
              <Toggle
                toggleState={careDeclawed}
                setToggleState={handleCareDeclawed}
              />
            </View>
            <View style={ruffwind`justify-between flex-row`}>
              <ToggleLabel label="Requires medication" />
              <Toggle
                toggleState={careMedication}
                setToggleState={handleCareMedication}
              />
            </View>
            <View style={ruffwind`justify-between flex-row`}>
              <ToggleLabel label="Separation anxiety" />
              <Toggle
                toggleState={careAnxiety}
                setToggleState={handleCareAnxiety}
              />
            </View>
            <View style={ruffwind`justify-between flex-row`}>
              <ToggleLabel label="Special needs" />
              <Toggle
                toggleState={careSpecial}
                setToggleState={handleCareSpecial}
              />
            </View>
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
