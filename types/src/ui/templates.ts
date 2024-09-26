import { ScrollView } from 'react-native';
import { FeatureNavigationProps } from './organisms';

export interface FeatureTemplateProps extends FeatureNavigationProps {
  bgColor?: string;
  paddingX?: string;
  scrollRef?: (ref: ScrollView | null) => void;
}
