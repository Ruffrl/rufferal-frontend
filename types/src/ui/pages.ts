import { NavigationProp, ParamListBase } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface PageNavigationProps {
  navigation: NavigationProp<ParamListBase>;
  // navigation: NativeStackNavigationProp<ScreenProps>;
}

export type ScreenProps = {
  'Cat Avatar': undefined;
  'Cat Careplan': undefined;
  'Cat Details': undefined;
  'Cat Personality': undefined;
  'Pet Splash': undefined;
  'Dog Avatar': undefined;
  'Dog Careplan': undefined;
  'Dog Details': undefined;
  'Dog Personality': undefined;
  'Manage Pets': undefined;
  Search: undefined;
  'Search Filters': undefined;
  'Search Results': undefined;
  'Profile Splash': undefined;
  // Profile: { userId: string };
};
