import { ruffwind } from '@rufferal/tailwind';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';
import {
  Button,
  FieldOption,
  H3,
  HorizontalDivider,
  ProgressBar,
} from '../../../../../atoms';
import { Input, RadioGroup, Select } from '../../../../../molecules';
import { FeatureTemplate } from '../../../../../templates';
import {
  CAT_AGE_OPTIONS,
  CAT_BREED_OPTIONS,
  CAT_COLOR_OPTIONS,
  CAT_SIZE_OPTIONS,
  SEX_OPTIONS,
  STATUS_OPTIONS,
} from '../../pet-details-options';

/* eslint-disable-next-line */
export interface CatDetailsProps extends PageNavigationProps {}

export const CatDetails = ({ navigation }: CatDetailsProps) => {
  const [sex, setSex] = useState<FieldOption>();
  const handleSex = (item: FieldOption) => {
    setSex(item);
  };

  const [age, setAge] = useState<FieldOption>();
  const handleAge = (item: FieldOption) => {
    setAge(item);
  };

  const [size, setSize] = useState<FieldOption>();
  const handleSize = (item: FieldOption) => {
    setSize(item);
  };

  const [status, setStatus] = useState<FieldOption>();
  const handleStatus = (item: FieldOption) => {
    setStatus(item);
  };

  return (
    <FeatureTemplate backNavigation={() => navigation.navigate('Manage Pets')}>
      <ScrollView>
        <View style={ruffwind`mt-6`}>
          <ProgressBar step={1} total={4} />
        </View>
        <View style={ruffwind`mt-6 gap-5`}>
          <View style={ruffwind`gap-2`}>
            <H3 text="Add a cat" />
            <Text
              style={ruffwind`font-bodySemibold text-b2 text-balticSea-950`}
            >
              Required information
            </Text>
          </View>
          <View style={ruffwind`gap-3`}>
            <View style={ruffwind`gap-1`}>
              <Input label="Name" />
              <Select
                label="Color"
                data={CAT_COLOR_OPTIONS}
                labelField="label"
                onChange={(item) => console.log(item)}
                searchField="label"
                valueField="id"
              />
              <Select
                label="Breed"
                data={CAT_BREED_OPTIONS}
                labelField="label"
                onChange={(item) => console.log(item)}
                searchField="label"
                valueField="id"
              />
            </View>
            <View>
              <RadioGroup
                value={sex}
                onChange={handleSex}
                label="Sex"
                items={SEX_OPTIONS}
              />
            </View>
            <View>
              <RadioGroup
                value={age}
                onChange={handleAge}
                label="Age"
                items={CAT_AGE_OPTIONS}
              />
            </View>
            <View>
              <RadioGroup
                value={size}
                onChange={handleSize}
                label="Size"
                items={CAT_SIZE_OPTIONS}
              />
            </View>
            <View>
              <RadioGroup
                value={status}
                onChange={handleStatus}
                label="Spayed/neutered?"
                items={STATUS_OPTIONS}
              />
            </View>
          </View>
        </View>
        <View style={ruffwind`my-4 gap-2`}>
          <HorizontalDivider type="secondary" />
          <Button text="Next" />
          <Button text="Cancel" type="transparent" size="standard-short" />
        </View>
      </ScrollView>
    </FeatureTemplate>
  );
};
