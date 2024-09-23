import { ruffwind } from '@rufferal/tailwind';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';
import {
  FieldHelper,
  FieldInput,
  FieldInputProps,
  FieldLabel,
  FieldState,
} from '../../atoms';

export interface InputProps extends FieldInputProps {
  errorMessage?: string;
  label: string;
  disabled?: boolean;
}

export const Input = ({
  errorMessage,
  label,
  size = 'standard',
  disabled = false,
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
