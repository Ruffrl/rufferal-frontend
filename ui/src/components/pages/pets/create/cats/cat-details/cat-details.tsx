import { ruffwind } from '@rufferal/tailwind';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { PageNavigationProps } from '../../../..';
import { FieldOption, H3, ProgressBar } from '../../../../../atoms';
import { convertToOptions } from '../../../../../atoms/field-select/field-select';
import { Input, RadioGroup, Select } from '../../../../../molecules';
import { FeatureTemplate } from '../../../../../templates';
import { BREEDS, COLORS } from './cat-options';

/* eslint-disable-next-line */
export interface CatDetailsProps extends PageNavigationProps {}

export const CatDetails = ({ navigation }: CatDetailsProps) => {
  const [sex, setSex] = useState<FieldOption>();

  const handleSex = (item: FieldOption) => {
    setSex(item);
  };

  return (
    <FeatureTemplate backNavigation={() => navigation.navigate('Manage Pets')}>
      <ScrollView style={ruffwind`pt-6 gap-6`}>
        <ProgressBar step={1} total={4} />
        <View style={ruffwind`gap-5`}>
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
                data={convertToOptions(COLORS)}
                labelField="label"
                onChange={(item) => console.log(item)}
                searchField="label"
                valueField="id"
              />
              <Select
                label="Breed"
                data={convertToOptions(BREEDS)}
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
                items={[
                  { id: '1', label: 'Male', value: 'male' },
                  { id: '2', label: 'Female', value: 'female' },
                ]}
              />
              <Text>Sex field</Text>
            </View>
            <View>
              <Text>Age field</Text>
            </View>
            <View>
              <Text>Size field</Text>
            </View>
            <View>
              <Text>Status field</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </FeatureTemplate>
  );
};
