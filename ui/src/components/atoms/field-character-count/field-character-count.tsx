import { ruffwind } from '@rufferal/tailwind';
import React from 'react';
import { Text } from 'react-native';

export interface FieldCharacterCountProps {
  align?: string;
  count: number;
  max: number;
}

export const FieldCharacterCount = ({
  align = 'text-right',
  count,
  max,
}: FieldCharacterCountProps) => {
  return (
    <Text style={ruffwind.style(`text-saltBox-700 font-body text-b1`, align)}>
      {count}/{max} characters
    </Text>
  );
};
