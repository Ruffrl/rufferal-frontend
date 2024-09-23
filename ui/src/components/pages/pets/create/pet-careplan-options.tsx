import { ruffwind } from '@rufferal/tailwind';
import { Text } from 'react-native';
import { OtherOption } from '../../../molecules/select/select';

/****************** SHARED ******************/
export const OTHER_OPTION: OtherOption = {
  label: 'Other (see Special Instructions Below)',
  component: (
    <>
      <Text>Other (see{` `}</Text>
      <Text style={ruffwind`font-bodySemibold`}>Special Instructions</Text>
      <Text>{` `}Below)</Text>
    </>
  ),
};

export const FEEDING_QUANTITY = [
  '1/8 cup',
  '1/4 cup',
  '1/2 cup',
  '3/4 cup',
  '1 cup',
  '2 cups',
  'Other (See Special Instructions below)',
];
export const FEEDING_QUANTITY_OPTIONS = [
  {
    id: 'j6bbnonw7b',
    label: 'Once A Day',
    value: 'once a day',
  },
  {
    id: '8jijnvyypec',
    label: '2x Per Day',
    value: '2x per day',
  },
  {
    id: 'dbm2g3cc2w8',
    label: '3x Per Day',
    value: '3x per day',
  },
  {
    id: 'b1vf0lksjgq',
    label: '4x Per Day',
    value: '4x per day',
  },
];

export const FEEDING_FREQUENCY = [
  'Once a day',
  '2x per day',
  '3x per day',
  '4x per day',
  'Other (See Special Instructions below) ',
];
export const FEEDING_FREQUENCY_OPTIONS = [
  {
    id: 'j6bbnonw7b',
    label: 'Once A Day',
    value: 'once a day',
  },
  {
    id: '8jijnvyypec',
    label: '2x Per Day',
    value: '2x per day',
  },
  {
    id: 'dbm2g3cc2w8',
    label: '3x Per Day',
    value: '3x per day',
  },
  {
    id: 'b1vf0lksjgq',
    label: '4x Per Day',
    value: '4x per day',
  },
];

/****************** CATS ******************/
export const HARNESS = ['yes', 'no'];
export const HARNESS_OPTIONS = [
  {
    id: 'jhp8becas9e',
    label: 'Yes',
    value: 'yes',
  },
  {
    id: 'cl4801pdvd4',
    label: 'No',
    value: 'no',
  },
];

/****************** DOGS ******************/
export const HOUSETRAINING = ['yes', 'no'];
export const HOUSETRAINING_OPTIONS = [
  {
    id: 'jhp8becas9e',
    label: 'Yes',
    value: 'yes',
  },
  {
    id: 'cl4801pdvd4',
    label: 'No',
    value: 'no',
  },
];