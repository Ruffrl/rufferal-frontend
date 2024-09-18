import { ruffwind } from '@rufferal/tailwind';
import { moderateScaleTW, verticalScaleTW } from '@rufferal/utils';
import { View } from 'react-native';

export interface ProgressBarProps {
  step: number;
  total: number;
}

export const ProgressBar = ({ step, total }: ProgressBarProps) => {
  const calcWidth = Math.trunc((1 / total) * 100);
  const totalSteps = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <View style={ruffwind`flex-row`}>
      {totalSteps.map((num, index) => (
        <View
          key={num}
          style={ruffwind.style(
            ruffwind`h-${verticalScaleTW(8)} w-[${calcWidth}%] bg-slate-200`,
            step === num && ruffwind`bg-gray-500`,
            index === 0 && ruffwind`rounded-l-${moderateScaleTW(4)}`,
            index === total - 1 && ruffwind`rounded-r-${moderateScaleTW(4)}`
          )}
        />
      ))}
    </View>
  );
};
