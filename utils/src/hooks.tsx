import React, { useRef } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';

interface YCoordinate {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any;
  y?: number;
}

interface YCoordinates {
  [key: string]: YCoordinate;
}

export const getFirstConditionalKey = (
  coordinates: YCoordinates,
  key: keyof YCoordinate,
  errors: string[]
): string | null => {
  for (const errorKey of errors) {
    if (coordinates[errorKey] && coordinates[errorKey][key] !== undefined) {
      return errorKey;
    }
  }
  return null;
};

export const useAutoScroll = () => {
  const yCoordinates = useRef<YCoordinates>({});
  const sRef = useRef<ScrollView | null>(null);

  const scrollRef = (ref: ScrollView | null) => {
    if (ref) sRef.current = ref;
  };

  const scrollTo = (errors: string[]) => {
    const firstInvalidKey = getFirstConditionalKey(
      yCoordinates.current,
      'y',
      errors
    );
    if (firstInvalidKey && yCoordinates.current[firstInvalidKey]?.ref) {
      yCoordinates.current[firstInvalidKey].ref.handleFocus({
        nativeEvent: { text: 'Dummy name' },
      });
    }

    if (firstInvalidKey) {
      sRef.current?.scrollTo({
        y: yCoordinates.current[firstInvalidKey].y || 0,
        animated: true,
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const captureRef = (inputKey: string) => (ref: any) => {
    if (ref) {
      if (yCoordinates.current[inputKey]) {
        yCoordinates.current[inputKey].ref = ref;
      } else {
        yCoordinates.current[inputKey] = { ref };
      }
    }
  };

  const scrollTracker = (component: React.ReactNode, inputKey: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let viewRef: any;

    const getScrollToY = (py: number) =>
      py - Dimensions.get('window').height / 5.5;

    const getCoordinates = () => {
      viewRef.measure(
        (
          fx: number,
          fy: number,
          width: number,
          height: number,
          px: number,
          py: number
        ) => {
          if (!yCoordinates.current[inputKey]) {
            yCoordinates.current[inputKey] = { ref: null };
          }
          if (yCoordinates.current[inputKey].y === undefined) {
            yCoordinates.current[inputKey].y = getScrollToY(py);
          }
        }
      );
    };

    return (
      <View
        testID={`${inputKey}Wrapper`}
        ref={(ref) => {
          if (ref) viewRef = ref;
        }}
        onLayout={getCoordinates}
      >
        {component}
      </View>
    );
  };

  return {
    scrollTracker,
    scrollRef,
    scrollTo,
    captureRef,
  };
};
