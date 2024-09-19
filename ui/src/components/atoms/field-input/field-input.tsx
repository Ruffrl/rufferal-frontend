import { ruffwind } from '@rufferal/tailwind';
import {
  GLOBAL_ICON_SIZE_SMALL,
  horizontalScaleTW,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Platform, TextInput, TextInputProps, View } from 'react-native';
import { FieldSize, FieldState } from '../types/field-types';

export interface FieldInputProps extends TextInputProps {
  onSubmit?: () => void;
  size?: FieldSize;
  state?: FieldState;
}

export const FieldInput = ({
  onChange,
  onSubmit,
  placeholder,
  size = 'standard',
  state = 'default',
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
        `
        bg-white
        border-saltBox-200
        gap-1 
        border-solid 
        flex-row
        border-${moderateScaleTW(1)} 
        h-${moderateScaleTW(32)}
        px-${moderateScaleTW(16)}
        py-${moderateScaleTW(8)}
        rounded-${moderateScaleTW(8)}
      `,
        width
      )}
    >
      <TextInput
        style={[
          !isMobile && { outlineStyle: 'none' },
          ruffwind.style(`font-body text-balticSea-950 h-full flex-1 text-b2`),
        ]}
        onChangeText={() => onChange}
        // BLARG: TODO: Convert tailwind colors into an exportable module so we can access hex values direct as needed
        // colors.saltbox[700]
        placeholderTextColor="#695C6F"
        placeholder={placeholder || 'Select...'}
        onSubmitEditing={onSubmit}
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
