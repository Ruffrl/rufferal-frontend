import { ruffwind } from '@rufferal/tailwind';
import { Text } from 'react-native';

export interface FieldSelectProps {
  align?: string;
  text: string | React.ReactElement;
}

export const FieldSelect = ({ align = 'text-center', text }: FieldSelectProps) => {
  return (
    <Text
      style={ruffwind.style(
        `font-headerExtrabold text-h2 text-electricViolet-700`,
        align
      )}
    >
      {text}
    </Text>
  );
};
