import { PageNavigationProps } from '@rufferal/types';
import { ManagePets } from '@rufferal/ui';

export const ManagePetsScreen = ({ navigation }: PageNavigationProps) => {
  return <ManagePets navigation={navigation} />;
};
