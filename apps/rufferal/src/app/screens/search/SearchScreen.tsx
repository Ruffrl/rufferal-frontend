import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Search } from '@rufferal/ui';

export const SearchScreen = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  return <Search />;
};
