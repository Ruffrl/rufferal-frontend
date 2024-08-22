import tw from 'twrnc';

import { View } from 'react-native';

import { moderateScaleTW, verticalScaleTW } from '../../utils';

export const RStepProgress = ({
  step,
  total,
}: {
  step: number;
  total: number;
}) => {
  const calcWidth = Math.trunc((1 / total) * 100);
  const totalSteps = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <View style={tw`flex-row`}>
      {totalSteps.map((num, index) => (
        <View
          key={num}
          style={tw.style(
            tw`h-${verticalScaleTW(6)} w-[${calcWidth}%] bg-slate-200`,
            step === num && tw`bg-gray-500`,
            index === 0 && tw`rounded-l-${moderateScaleTW(4)}`,
            index === total - 1 && tw`rounded-r-${moderateScaleTW(4)}`
          )}
        />
      ))}
    </View>
  );
};
