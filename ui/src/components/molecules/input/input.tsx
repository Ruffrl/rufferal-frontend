import { ruffwind } from '@rufferal/tailwind';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';
import {
  FieldHelper,
  FieldInput,
  FieldInputProps,
  FieldLabel,
} from '../../atoms';

export interface InputProps extends FieldInputProps {
  errorMessage?: string;
  label: string;
}

export const Input = ({
  errorMessage,
  label,
  size = 'standard',
  state = 'default',
  ...inputProps
}: InputProps) => {
  return (
    <View style={ruffwind`gap-${moderateScaleTW(4)}`}>
      <FieldLabel text={label} />
      <FieldInput state={state} size={size} {...inputProps} />
      {state === 'errored' ? (
        <FieldHelper text={errorMessage} />
      ) : (
        <View style={ruffwind`h-3`} />
      )}
    </View>
  );
};
