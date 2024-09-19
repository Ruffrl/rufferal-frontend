import { ruffwind } from '@rufferal/tailwind';
import { View } from 'react-native';
import {
  FieldHelper,
  FieldLabel,
  FieldSelect,
  FieldSelectProps,
  Option,
} from '../../atoms';

export interface SelectProps extends FieldSelectProps<Option> {
  errorMessage?: string;
  label: string;
}

export const Select = ({
  data,
  errorMessage,
  label,
  labelField,
  onChange,
  placeholder = 'Select...',
  searchField,
  size = 'standard',
  state = 'default',
  valueField,
}: SelectProps) => {
  return (
    <View style={ruffwind`gap-1`}>
      <FieldLabel text={label} />
      <FieldSelect
        data={data}
        labelField={labelField}
        onChange={(item) => console.log(item)}
        searchField={searchField}
        valueField={valueField}
        state={state}
        size={size}
      />
      {state === 'errored' ? (
        <FieldHelper text={errorMessage} />
      ) : (
        <View style={ruffwind`h-3`} />
      )}
    </View>
  );
};
