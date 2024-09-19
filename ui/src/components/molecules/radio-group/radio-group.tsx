import { ruffwind } from '@rufferal/tailwind';
import { View } from 'react-native';
import {
  FieldHelper,
  FieldLabel,
  FieldState,
  Radio,
  FieldOption,
} from '../../atoms';

export interface RadioGroupProps {
  errorMessage?: string;
  items: FieldOption[];
  label?: string;
  onChange: (item: FieldOption) => void;
  state?: FieldState;
  value?: FieldOption;
}

export const RadioGroup = ({
  errorMessage,
  items,
  label,
  onChange,
  state = 'default',
  value,
}: RadioGroupProps) => {
  const handlePress = (item: FieldOption) => {
    if (item.id !== value?.id) {
      onChange(item);
    }
  };

  return (
    <View style={ruffwind`gap-1`}>
      {label && <FieldLabel text={label} />}
      {items.map((item) => {
        return (
          <Radio
            key={item.id}
            item={item}
            onPress={handlePress}
            selected={item.id === value?.id}
          />
        );
      })}
      {state === 'errored' ? (
        <FieldHelper text={errorMessage} />
      ) : (
        <View style={ruffwind`h-3`} />
      )}
    </View>
  );
};
