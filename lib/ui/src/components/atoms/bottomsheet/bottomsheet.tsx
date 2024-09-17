import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { PropsWithChildren, useCallback, useRef } from 'react';

import tailwind from '../../../../tailwind';

export interface BottomsheetProps {
  animateOnMount?: boolean;
  backgroundColor?: string;
  content: React.ReactNode;
  height?: number;
  padding?: string;
  snapPoints?: number[];
}

export const Bottomsheet = ({
  animateOnMount = true,
  backgroundColor = 'bg-whitePointer-50',
  content,
  height = 406,
  padding = 'p-5',
  snapPoints = [406],
}: PropsWithChildren<BottomsheetProps>) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={snapPoints}
      backgroundStyle={tailwind.style(backgroundColor)}
      handleStyle={tailwind`h-[30px] justify-end p-0 mb-2.5`}
      handleIndicatorStyle={tailwind`bg-iron-300 w-9 h-1`}
      containerHeight={height}
      animateOnMount={animateOnMount}
    >
      <BottomSheetView style={tailwind.style('flex-1 rounded-xl', padding)}>
        {content}
      </BottomSheetView>
    </BottomSheet>
  );
};
