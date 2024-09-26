import { ruffwind } from '@rufferal/tailwind';
import { FieldState, InputAreaProps } from '@rufferal/types';
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
  disabled = false,
  errorMessage,
  label,
  maxCharacters = 250,
  onChange,
  size = 'standard',
  ...inputProps
}: InputAreaProps) => {
  let state: FieldState = 'default';

  if (disabled) {
    state = 'disabled';
  } else if (errorMessage) {
    state = 'errored';
  }

  const [characterCount, setCharacterCount] = useState(0);
  const handleCharacterCount = (text: string) => setCharacterCount(text.length);

  return (
    <View style={ruffwind`gap-${moderateScaleTW(8)}`}>
      <FieldLabel text={label} state={state} />
      <FieldInputArea
        onChange={(text) => {
          handleCharacterCount(text);
          onChange(text);
        }}
        state={state}
        size={size}
        {...inputProps}
      />
      {errorMessage ? (
        <FieldHelper text={errorMessage} />
      ) : (
        <FieldCharacterCount count={characterCount} max={maxCharacters} />
      )}
    </View>
  );
};
