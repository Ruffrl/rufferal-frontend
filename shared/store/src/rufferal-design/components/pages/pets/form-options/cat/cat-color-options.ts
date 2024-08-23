import { capitalize, PickerOption } from '../../../../../..';

const COLOR_OPTIONS = [
  'black',
  'blue-gray',
  'blue',
  'calico',
  'chocolate',
  'cinnamon',
  'cream',
  'fawn',
  'gray',
  'lilac',
  'orange',
  'red',
  'smoke',
  'tabby',
  'tortoise-shell',
  'tuxedo',
  'white',
];

export const catColorOptions: PickerOption[] = COLOR_OPTIONS.map((option) => {
  return { value: option, text: capitalize(option) };
});
