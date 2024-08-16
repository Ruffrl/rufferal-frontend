import * as React from 'react';
import { Text } from 'react-native';
import tw from 'twrnc';

export const RPageHeader = ({ header = 'Rufferal' }: { header?: string }) => (
  <Text style={tw`py-6 text-2xl font-bold text-gray-500`}>{header}</Text>
);
