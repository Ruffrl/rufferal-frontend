import { ruffwind } from '@rufferal/tailwind';
import { InputAreaProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { useState } from 'react';
import { View } from 'react-native';
import {
  FieldCharacterCount,
  FieldHelper,
  FieldInputArea,
  FieldLabel,
} from '../../atoms';

export const InputArea = ({
  errorMessage = 'TESTING',
  label,
  size = 'standard',
  state = 'default',
  onChange,
  maxCharacters = 250,
  ...inputProps
}: InputAreaProps) => {
  const [characterCount, setCharacterCount] = useState(0);
  const handleCharacterCount = (text: string) => setCharacterCount(text.length);

  return (
    <View style={ruffwind`gap-${moderateScaleTW(8)}`}>
      <FieldLabel text={label} />
      <FieldInputArea
        onChange={(text) => {
          handleCharacterCount(text);
          onChange(text);
        }}
        state={state}
        size={size}
        {...inputProps}
      />
      {state === 'errored' ? (
        <FieldHelper text={errorMessage} />
      ) : (
        <FieldCharacterCount count={characterCount} max={maxCharacters} />
      )}
    </View>
  );
};
