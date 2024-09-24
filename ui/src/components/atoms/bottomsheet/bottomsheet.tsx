import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { ruffwind } from '@rufferal/tailwind';
import { BottomsheetProps } from '@rufferal/types';
import React, { PropsWithChildren, useCallback, useRef } from 'react';

export const Bottomsheet = ({
  animateOnMount = true,
  backgroundColor = 'bg-whitePointer-50',
  content,
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
      backgroundStyle={ruffwind.style(backgroundColor)}
      handleStyle={ruffwind`h-[30px] justify-end p-0 mb-2.5`}
      handleIndicatorStyle={ruffwind`bg-iron-300 w-9 h-1`}
      animateOnMount={animateOnMount}
    >
      <BottomSheetView style={ruffwind.style('flex-1 rounded-xl', padding)}>
        {content}
      </BottomSheetView>
    </BottomSheet>
  );
};
