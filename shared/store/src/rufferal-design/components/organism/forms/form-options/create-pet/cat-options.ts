import { capitalize, PickerOption } from '../../../../../..';

const COLORS = [
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

const BREEDS = [
  'abyssinian',
  'american bobtail',
  'american curl',
  'american shorthair',
  'american wirehair',
  'balinese',
  'bengal',
  'birman',
  'bombay',
  'british shorthair',
  'burmese',
  'chartreux',
  'chausie',
  'cornish rex',
  'devon rex',
  'donskoy',
  'egyptian mau',
  'exotic shorthair',
  'havana',
  'highlander',
  'himalayan',
  'household pet cat',
  'household pet kitten',
  'japanese bobtail',
  'korat',
  'kurilian bobtail',
  'laperm',
  'maine coon',
  'manx',
  'minskin',
  'munchkin',
  'nebelung',
  'norwegian forest cat',
  'ocicat',
  'ojos azules',
  'oriental',
  'persian',
  'peterbald',
  'pixiebob',
  'ragdoll',
  'russian blue',
  'savannah',
  'scottish fold',
  'selkirk rex',
  'serengeti',
  'siberian',
  'siamese',
  'singapura',
  'snowshoe',
  'sokoke',
  'somali',
  'sphynx',
  'thai',
  'tonkinese',
  'toyger',
  'turkish angora',
  'turkish van',
];

const COAT_LENGTHS = ['long', 'medium', 'short', 'hairless'];

const convertToPicker = (options: string[]): PickerOption[] =>
  options.map((option) => {
    return { value: option, text: capitalize(option) };
  });

export const catColorOptions: PickerOption[] = convertToPicker(COLORS);
export const catBreedOptions: PickerOption[] = convertToPicker(BREEDS);
export const catCoatOptions: PickerOption[] = convertToPicker(COAT_LENGTHS);
