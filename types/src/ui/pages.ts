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
  'Create Pets Onboarding': undefined;
  'Dog Avatar': undefined;
  'Dog Careplan': undefined;
  'Dog Details': undefined;
  'Dog Personality': undefined;
  'Manage Pets': undefined;
  Search: undefined;
  // Profile: { userId: string };
};