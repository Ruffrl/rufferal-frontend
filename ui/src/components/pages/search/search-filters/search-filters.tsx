import { ruffwind } from '@rufferal/tailwind';
import { FieldOption, PageNavigationProps } from '@rufferal/types';
import {
  createImageSize,
  GLOBAL_ICON_SIZE_MEDIUM,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { observer } from 'mobx-react-lite';
import { Text, View } from 'react-native';

import { useState } from 'react';
import {
  Button,
  FieldInput,
  FieldLabel,
  LinkButton,
  Switch,
} from '../../../atoms';
import { CheckboxCard, RadioGroup } from '../../../molecules';
import { FeatureTemplate } from '../../../templates';

const TIME_OF_DAY_OPTIONS: FieldOption[] = [
  {
    id: 'tod-morning',
    label: 'Morning',
    value: 'morning',
  },
  {
    id: 'tod-midday',
    label: 'Mid-day',
    value: 'midday',
  },
  {
    id: 'tod-afternoon',
    label: 'Afternoon',
    value: 'afternoon',
  },
  {
    id: 'tod-evening',
    label: 'Evening',
    value: 'evening',
  },
];

export const SearchFilters = observer(({ navigation }: PageNavigationProps) => {
  const [isDog, setIsDog] = useState(true);
  const [isCat, setIsCat] = useState(false);
  const [isDogWalking, setIsDogWalking] = useState(true);
  const [isCatHarness, setIsCatHarness] = useState(false);
  const [isPlayDate, setIsPlayDate] = useState(false);
  const [isFeeding, setIsFeeding] = useState(false);
  const [isOvernight, setIsOvernight] = useState(false);
  const [selectedCareOptions, setSelectedCareOptions] = useState<string[]>([
    'isDogWalking',
  ]);

  const handleDog = (option: FieldOption) => {
    setIsDog((prev) => !prev);
  };
  const handleCat = (option: FieldOption) => {
    setIsCat((prev) => !prev);
  };

  const handleDogWalking = (option: FieldOption) => {
    setIsDogWalking((prev) => !prev);
    handleCareOptionChange('isDogWalking');
  };
  const handleCatHarness = (option: FieldOption) => {
    setIsCatHarness((prev) => !prev);
    handleCareOptionChange('isCatHarness');
  };
  const handlePlayDate = (option: FieldOption) => {
    setIsPlayDate((prev) => !prev);
    handleCareOptionChange('isPlayDate');
  };
  const handleFeeding = (option: FieldOption) => {
    setIsFeeding((prev) => !prev);
    handleCareOptionChange('isFeeding');
  };
  const handleOvernight = (option: FieldOption) => {
    setIsOvernight((prev) => !prev);
    handleCareOptionChange('isOvernight');
  };

  const handleCareOptionChange = (option: string) => {
    setSelectedCareOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        // Deselect the option if it's already selected
        return prevOptions.filter((item) => item !== option);
      } else {
        // Add the option if it's not selected
        return [...prevOptions, option];
      }
    });
  };

  const determineExerciseOption = () => {
    if ((isCat && isDog) || (!isCat && !isDog)) {
      return undefined;
    } else if (isCat) {
      return (
        <CheckboxCard.Option
          onPress={handleCatHarness}
          icon={
            <Image
              style={ruffwind.style(createImageSize(34))}
              source={require('@rufferal/assets/src/icons/search-cat-harness.png')}
            />
          }
          label="Harness"
          selected={isCatHarness}
        />
      );
    } else {
      return (
        <CheckboxCard.Option
          onPress={handleDogWalking}
          icon={
            <Image
              style={ruffwind.style(createImageSize(34))}
              source={require('@rufferal/assets/src/icons/search-dog-walking.png')}
            />
          }
          label="Walking"
          selected={isDogWalking}
        />
      );
    }
  };

  const renderHelperText = (text: string) => (
    <View style={ruffwind`h-${moderateScaleTW(40)} justify-center w-full`}>
      <Text style={ruffwind`font-body text-b2 text-balticSea-950`}>{text}</Text>
    </View>
  );

  const renderCareHelperText = () => {
    const helperTexts: Record<string, string> = {
      noSelection:
        'To generate better search results, please select at least one care type',
      isDogWalking: 'A 30- or 60-minute walk in your neighborhood.',
      isCatHarness:
        'A 30-minute harness walk in your home, backyard or neighborhood.',
      isPlayDate:
        'Up to 60 minutes of one-on-one play time in your home, backyard or neighborhood.',
      isFeeding:
        '30-minute drop-in visit for food, water and treats. Includes administering medications, as needed.',
      isOvernight:
        'Overnight pet sitting, including feeding and play time. Walking must be scheduled separately.',
    };

    const displayText =
      selectedCareOptions.length > 0
        ? helperTexts[selectedCareOptions[selectedCareOptions.length - 1]]
        : helperTexts.noSelection;

    return renderHelperText(displayText);
  };

  return (
    <FeatureTemplate
      bgColor="bg-whisper-50"
      backNavigation={() => navigation.navigate('Search Dashboard')}
    >
      <View style={ruffwind`flex-1 justify-between`}>
        <View style={ruffwind`gap-${moderateScaleTW(16)}`}>
          <Text
            style={ruffwind`
              font-headerExtrabold
              text-h3
              text-seance-950
              mt-${moderateScaleTW(38)}
            `}
          >
            Find the perfect match
          </Text>
          {/* BLARG:TODO - with form handling, this may convert to a molecule like Input */}
          <View style={ruffwind`gap-${moderateScaleTW(8)}`}>
            <FieldLabel size="large" text="I'm looking for service for" />
            <CheckboxCard
              optionHeight={`h-${moderateScaleTW(40)}`}
              defaultColumnCount={2}
              optionGap={`gap-${moderateScaleTW(4)}`}
              optionDirection={'flex-row'}
            >
              <CheckboxCard.Option
                onPress={handleDog}
                icon={
                  <Image
                    style={ruffwind.style(GLOBAL_ICON_SIZE_MEDIUM)}
                    source={require('@rufferal/assets/src/icons/dog.png')}
                    tintColor={'#480962'}
                  />
                }
                label="Dogs"
                selected={isDog}
              />
              <CheckboxCard.Option
                onPress={handleCat}
                icon={
                  <Image
                    style={ruffwind.style(GLOBAL_ICON_SIZE_MEDIUM)}
                    source={require('@rufferal/assets/src/icons/cat.png')}
                    tintColor={'#480962'}
                  />
                }
                label="Cats"
                selected={isCat}
              />
            </CheckboxCard>
          </View>
          {/* BLARG:TODO - with form handling, this may convert to a molecule like Input */}
          <View style={ruffwind`gap-${moderateScaleTW(8)}`}>
            <FieldLabel size="large" text="Select care:" />
            <CheckboxCard
              defaultColumnCount={2}
              optionGap={`gap-${moderateScaleTW(4)}`}
            >
              {determineExerciseOption()}
              <CheckboxCard.Option
                onPress={handlePlayDate}
                icon={
                  <Image
                    style={ruffwind.style(createImageSize(34))}
                    source={require('@rufferal/assets/src/icons/search-play-date.png')}
                  />
                }
                label="Play date"
                selected={isPlayDate}
              />
              <CheckboxCard.Option
                onPress={handleFeeding}
                icon={
                  <Image
                    style={ruffwind.style(createImageSize(34))}
                    source={require('@rufferal/assets/src/icons/search-feeding.png')}
                  />
                }
                label="Feeding"
                selected={isFeeding}
              />
              <CheckboxCard.Option
                onPress={handleOvernight}
                icon={
                  <Image
                    style={ruffwind.style(createImageSize(34))}
                    source={require('@rufferal/assets/src/icons/search-overnight.png')}
                  />
                }
                label="Overnight"
                selected={isOvernight}
              />
              {renderCareHelperText()}
            </CheckboxCard>
          </View>
          <View style={ruffwind`gap-${moderateScaleTW(4)}`}>
            <FieldLabel size="large" text="Dates" />
            <FieldInput
              onChange={() => console.log('BLARG add date')}
              onSubmit={() => null}
              value=""
            />
            <View
              style={ruffwind`
                flex-row
                items-center
                gap-${moderateScaleTW(4)}
              `}
            >
              <Image
                style={ruffwind.style(createImageSize(12))}
                source={require('@rufferal/assets/src/icons/rotate.png')}
              />
              <Text
                style={ruffwind`font-bodySemibold text-b1 text-saltBox-700`}
              >
                Recurring weekly
              </Text>
              <Switch
                value={false}
                onBlur={() => null}
                onChange={() => console.log('BLARG add toggle handling')}
                handleChange={() => console.log('BLARG add toggle handling')}
              />
            </View>
          </View>
          <View style={ruffwind``}>
            <RadioGroup
              containerGap={`gap-${moderateScaleTW(4)}`}
              data={TIME_OF_DAY_OPTIONS}
              label="Preferred time of day"
              labelSize="large"
              onBlur={() => null}
              onChange={() =>
                console.log('BLARG add checkbox and time of day handling')
              }
              optionsDirection={`flex-row`}
              optionsYPadding={`py-${moderateScaleTW(7)}`}
              value={null}
            />
          </View>
          <View style={ruffwind``}>
            <FieldLabel size="large" text="Search in {location}" />
            <FieldInput
              onChange={() => console.log('BLARG add location search')}
              onSubmit={() => null}
              value=""
            />
          </View>
        </View>
        <View style={ruffwind`flex-row justify-between items-center`}>
          <LinkButton
            text="Clear all"
            onPress={() => console.log('BLARG add clear all behavior')}
          />
          <Button
            text="Search"
            size="xsmall"
            onPress={() => console.log('BLARG add submit behavior')}
          />
        </View>
      </View>
    </FeatureTemplate>
  );
});
