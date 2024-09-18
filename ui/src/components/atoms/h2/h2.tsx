import { tailwind } from '@rufferal/tailwind';
import { Text } from 'react-native';

export interface H2Props {
  align?: string;
  text: string | React.ReactElement;
}

export const H2 = ({ align = 'text-center', text }: H2Props) => {
  return (
    <Text
      style={tailwind.style(
        `font-headerExtrabold text-h2 text-electricViolet-700`,
        align
      )}
    >
      {text}
    </Text>
  );
};
