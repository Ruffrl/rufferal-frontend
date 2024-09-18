import React from 'react';
import { Text } from 'react-native';
import tailwind from '../../../../tailwind';

export interface H3Props {
  align?: string;
  text: string | React.ReactElement;
}

export const H3 = ({ align = 'text-left', text }: H3Props) => {
  return (
    <Text
      style={tailwind.style(
        `font-headerExtrabold text-h3 text-electricViolet-700`,
        align
      )}
    >
      {text}
    </Text>
  );
};
