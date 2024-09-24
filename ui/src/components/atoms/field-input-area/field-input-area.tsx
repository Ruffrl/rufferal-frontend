import { ruffwind } from '@rufferal/tailwind';
import { FieldInputProps } from '@rufferal/types';
import {
  GLOBAL_ICON_SIZE_SMALL,
  horizontalScaleTW,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Platform, TextInput, View } from 'react-native';

export const FieldInputArea = ({
  onChange,
  onSubmit,
  placeholder,
  size = 'standard',
  state = 'default',
  ...inputProps
}: FieldInputProps) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

  let width = `w-full`;
  switch (size) {
    case 'small':
      width = `w-${horizontalScaleTW(150)}`;
      break;
  }

  return (
    <View
      accessible={true}
      style={ruffwind.style(
        `bg-white
        border-saltBox-100
        gap-1 
        border-solid 
        flex-row
        border-${moderateScaleTW(1)} 
        h-${moderateScaleTW(84)}
        px-${moderateScaleTW(8)}
        py-${moderateScaleTW(4)}
        rounded-${moderateScaleTW(4)}`,
        width
      )}
    >
      <TextInput
        {...inputProps}
        placeholder={placeholder || 'Add notes here...'}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        editable={state !== 'disabled'}
        multiline
        numberOfLines={4}
        style={[
          !isMobile && { outlineStyle: 'none' },
          ruffwind.style(`font-body text-balticSea-950 h-full flex-1 text-b2`),
        ]}
        // BLARG: TODO: Convert tailwind colors into an exportable module so we can access hex values direct as needed
        // colors.saltbox[700]
        placeholderTextColor="#695C6F"
      />
      {state === 'errored' && (
        <Image
          style={ruffwind.style(
            GLOBAL_ICON_SIZE_SMALL,
            'items-center justify-center'
          )}
          source={require('@rufferal/assets/src/icons/alert-triangle.png')}
        />
      )}
    </View>
  );
};
