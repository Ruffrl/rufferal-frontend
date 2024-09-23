import { ruffwind } from '@rufferal/tailwind';
import { moderateScaleTW } from '@rufferal/utils';
import { View } from 'react-native';
import {
  FieldHelper,
  FieldLabel,
  FieldOption,
  FieldSelect,
  FieldSelectProps,
} from '../../atoms';

export type OtherOption = {
  component: JSX.Element;
  label: string;
};
export interface SelectProps extends FieldSelectProps<FieldOption> {
  errorMessage?: string;
  label: string;
  other?: OtherOption;
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
  other,
}: SelectProps) => {
  // Handle optional "Other" option
  if (other && Object.keys(other).length > 0) {
    data.push({
      id: 'other',
      label: other.label,
      value: other.label.toLowerCase(),
    });
  }

  return (
    <View style={ruffwind`gap-${moderateScaleTW(4)}`}>
      <FieldLabel text={label} />
      <FieldSelect
        data={data}
        labelField={labelField}
        onChange={(item) => console.log(item)}
        searchField={searchField}
        valueField={valueField}
        state={state}
        size={size}
        other={other}
      />
      {state === 'errored' ? (
        <FieldHelper text={errorMessage} />
      ) : (
        <View style={ruffwind`h-${moderateScaleTW(12)}`} />
      )}
    </View>
  );
};
