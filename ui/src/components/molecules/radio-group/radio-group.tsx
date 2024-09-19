import { ruffwind } from '@rufferal/tailwind';
import { View } from 'react-native';
import {
  FieldHelper,
  FieldLabel,
  FieldState,
  Radio,
  RadioItem,
} from '../../atoms';

export interface RadioGroupProps {
  errorMessage?: string;
  items: RadioItem[];
  label?: string;
  onChange: (item: RadioItem) => void;
  state?: FieldState;
  value?: RadioItem;
}

export const RadioGroup = ({
  errorMessage,
  items,
  label,
  onChange,
  state = 'default',
  value,
}: RadioGroupProps) => {
  const handlePress = (item: RadioItem) => {
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
