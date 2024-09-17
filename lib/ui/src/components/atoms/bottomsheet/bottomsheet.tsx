// import React from 'react';
import tw from 'twrnc';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

/* eslint-disable-next-line */
export interface BottomsheetProps {}

// export const Bottomsheet = (props: BottomsheetProps) => {
export const Bottomsheet = () => {
  // state
  const [email, onChangeEmail] = useState('');
  const [snapPoints2, setSnappoints2] = useState([480]);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['55%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    // <View className="flex-1 padding-6 bg-[#D2F049]">
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints2}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text style={tw`bg-pink-500 h-12 w-12`}>KJHKJH</Text>
          <Text style={styles.header}>Sign in or create{'\n'}an account</Text>
          <TextInput
            // This needs an update to onMobile && setSnappoints2
            onFocus={() => setSnappoints2([750])}
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="whiskers@rufferal.com"
            // keyboardType="numeric"
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#D2F049',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FDFAFF',
    borderRadius: 12,
    padding: 24,
  },
  header: {
    // fontFamily: 'Proxima Nova',
    fontSize: 28,
    lineHeight: 30,
    color: '#9525CB',
    fontWeight: '800',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'aqua',
    width: '100%',
  },
});
