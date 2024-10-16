import { ruffwind } from '@rufferal/tailwind';
import { CheckboxCardOptionProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import { useState } from 'react';
import { Pressable, Text } from 'react-native';

export const CheckboxCardOption = ({
  defaultColumnCount = 3,
  icon,
  label,
  onPress,
  optionDirection = `flex-column`,
  optionGap = `gap-${moderateScaleTW(8)}`,
  optionHeight = `h-${moderateScaleTW(82)}`,
  optionSelectedBackground = `bg-electricViolet-100`,
  optionSelectedBorder = `
    border-${moderateScaleTW(2)} 
    border-electricViolet-700
  `,
  optionText = `font-bodySemibold text-b2 text-electricViolet-950 text-center`,
  optionUnselectedBackground = `bg-transparent`,
  optionUnselectedBorder = `border-${moderateScaleTW(1)} border-chatelle-400`,
  selected,
}: CheckboxCardOptionProps) => {
  const [isSelected, setIsSelected] = useState(selected || false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onPress && onPress({ label, value: label });
  };

  return (
    <Pressable
      style={ruffwind.style(
        `flex-1
        items-center
        justify-center
        rounded-${moderateScaleTW(4)}
        py-${moderateScaleTW(12)}
        min-w-${moderateScaleTW(100 / defaultColumnCount)}`,
        optionHeight,
        optionDirection,
        optionGap,
        isSelected ? optionSelectedBackground : optionUnselectedBackground,
        isSelected ? optionSelectedBorder : optionUnselectedBorder
      )}
      onPress={handlePress}
    >
      {icon}
      <Text style={ruffwind.style(optionText)}>
        {label}
      </Text>
    </Pressable>
  );
};
