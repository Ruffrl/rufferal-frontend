import { NavigationProp, ParamListBase } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface PageNavigationProps {
  navigation: NavigationProp<ParamListBase>;
  // navigation: NativeStackNavigationProp<ScreenProps>;
}

export type ScreenProps = {
  'Onboarding': undefined;
  'Access': undefined;
  'Profile Splash': undefined;
  'Pet Splash': undefined;
  'Pets Dashboard': undefined;
  'Cat Avatar': undefined;
  'Cat Careplan': undefined;
  'Cat Details': undefined;
  'Cat Personality': undefined;
  'Dog Avatar': undefined;
  'Dog Careplan': undefined;
  'Dog Details': undefined;
  'Dog Personality': undefined;
  'Search Dashboard': undefined;
  'Search Filters': undefined;
  'Search Results': undefined;
  'Access Required Splash': undefined;
  'Bookings Dashboard': undefined;
  'Messages Dashboard': undefined;
  'Account Dashboard': undefined;
  // Profile: { userId: string };
};
