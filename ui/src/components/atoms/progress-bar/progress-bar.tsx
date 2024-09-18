import { ruffwind } from '@rufferal/tailwind';
import { moderateScaleTW, verticalScaleTW } from '@rufferal/utils';
import { View } from 'react-native';

export interface ProgressBarProps {
  step: number;
  total: number;
}

// BLARG: TODO: Add animations as you progress from step to step
// Use Reanimated or Animated to generate
//    - step 1 will animation fill from 0 to step boundary
//    - step 2 will have step 1 already filled out and then animation fill to step 2 boundary while removing fill on step 1 simultanesouly
//    - and so on
export const ProgressBar = ({ step, total }: ProgressBarProps) => {
  const calcWidth = Math.trunc((1 / total) * 100);
  const totalSteps = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <View style={ruffwind`flex-row`}>
      {totalSteps.map((num, index) => (
        <View
          key={num}
          style={ruffwind.style(
            ruffwind`h-${verticalScaleTW(8)} w-[${calcWidth}%] bg-lola-300`,
            step === num && ruffwind`bg-electricViolet-600`,
            index === 0 && ruffwind`rounded-l-${moderateScaleTW(4)}`,
            index === total - 1 && ruffwind`rounded-r-${moderateScaleTW(4)}`
          )}
        />
      ))}
    </View>
  );
};
