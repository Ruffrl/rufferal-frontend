import { ruffwind } from '@rufferal/tailwind';
import { View } from 'react-native';
import { FieldHelper, FieldInput, FieldLabel } from '../../atoms';
import { FieldSize, FieldState } from '../../atoms/types/field-types';

export interface InputProps {
  errorMessage?: string;
  label: string;
  size?: FieldSize;
  state?: FieldState;
}

export const Input = ({
  errorMessage,
  label,
  size = 'standard',
  state = 'default',
}: InputProps) => {
  return (
    <View style={ruffwind`gap-1`}>
      <FieldLabel text={label} />
      <FieldInput state={state} size={size} />
      {state === 'errored' ? <FieldHelper text={errorMessage} /> : <View style={ruffwind`h-3`} />}
    </View>
  );
};
