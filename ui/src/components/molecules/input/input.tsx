import { ruffwind } from '@rufferal/tailwind';
import { FieldState, InputProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';
import { FieldHelper, FieldInput, FieldLabel } from '../../atoms';

export const Input = ({
  disabled = false,
  errorMessage,
  label,
  size = 'default',
  ...inputProps
}: InputProps) => {
  let state: FieldState = 'default';

  if (disabled) {
    state = 'disabled';
  } else if (errorMessage) {
    state = 'errored';
  }

  return (
    <View style={ruffwind`gap-${moderateScaleTW(4)}`}>
      <FieldLabel text={label} state={state} />
      <FieldInput state={state} size={size} {...inputProps} />
      {errorMessage ? (
        <FieldHelper text={errorMessage} />
      ) : (
        <View style={ruffwind`h-${moderateScaleTW(12)}`} />
      )}
    </View>
  );
};
