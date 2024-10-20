import { ruffwind } from '@rufferal/tailwind';
import { CheckboxCardOptionProps, CheckboxCardProps } from '@rufferal/types';
import { moderateScaleTW } from '@rufferal/utils';
import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { View } from 'react-native';

import { CheckboxCardOption } from '../../atoms';

const CheckboxCard = ({
  children,
  containerDirection = `flex-row`,
  containerGap = `gap-${moderateScaleTW(8)}`,
  optionDirection,
  optionGap,
  optionHeight,
  optionSelectedBackground,
  optionSelectedBorder,
  optionText,
  optionUnselectedBackground,
  optionUnselectedBorder,
}: PropsWithChildren<CheckboxCardProps>) => {
  const childrenWithStyles = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<CheckboxCardOptionProps>, {
        optionHeight,
        optionDirection,
        optionGap,
        optionSelectedBackground,
        optionSelectedBorder,
        optionText,
        optionUnselectedBackground,
        optionUnselectedBorder,
      });
    }
    return child;
  });

  return (
    <View
      style={ruffwind.style(
        `flex-1 flex-wrap`,
        containerDirection,
        containerGap
      )}
    >
      {childrenWithStyles}
    </View>
  );
};

CheckboxCard.Option = CheckboxCardOption;

export { CheckboxCard };
