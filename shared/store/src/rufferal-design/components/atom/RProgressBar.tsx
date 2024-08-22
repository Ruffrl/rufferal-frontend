import * as React from 'react';
import tw from 'twrnc';

import { Animated, View } from 'react-native';

export const RProgressBar = ({
  step,
  total,
}: {
  step: number;
  total: number;
}) => {
  const calcPerc = Math.trunc((step / total) * 100);

  return (
    <View style={tw`h-5 bg-gray-500 rounded-[10px] m-[10px]`}>
      <Animated.View
        style={tw.style(tw`h-5 bg-blue-300 rounded-[10px]`, {
          width: `${calcPerc}%`,
        })}
      />
    </View>
  );
};

// import { useEffect, useState } from 'react';
// import { Animated, StyleSheet, Text, View } from 'react-native';

// export const RProgressBar = () => {
//   const [progress, setProgress] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.timing(progress, {
//       toValue: 75,
//       duration: 2000,
//       useNativeDriver: false,
//     }).start();
//   }, []);
//   console.log('BLARG progress: ', progress);
//   console.log('BLARG Number(progress): ', Number(progress));

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.bar, { width: `${Number(progress)}%` }]} />
//       <Text>{progress.toString()}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 20,
//     backgroundColor: '#ccc',
//     borderRadius: 10,
//     margin: 10,
//   },
//   bar: {
//     height: 20,
//     backgroundColor: '#333',
//     borderRadius: 10,
//   },
// });

// import { useEffect, useRef, useState } from 'react';
// import { Animated, StatusBar, StyleSheet, Text, View } from 'react-native';

// export const RProgressBar = () => {
//   const counter = useRef(new Animated.Value(0)).current;
//   const countInterval = useRef<NodeJS.Timer | undefined>(undefined);
//   const [count, setCount] = useState(0);
//   // EFFECT HOOK TO SETUP AND CLEAN INTERvAL COUNTER
//   useEffect(() => {
//     // SETUP INTERVAL COUNTER TO REFERENCED HOOK
//     countInterval.current = setInterval(
//       () => setCount((prev) => prev + 10),
//       1000
//     );
//     return () => {
//       // CLEAR ON EXIT
//       clearInterval(countInterval.current);
//     };
//   }, []);

//   // EFFECT HOOK TO TRACK CHANGES IN PROGRESS
//   useEffect(() => {
//     // TRIGGER VIEW UPDATE
//     load(count);
//     if (count >= 100) {
//       setCount(100);
//       // CLEAR
//       clearInterval(countInterval.current);
//     }
//   }, [count]);
//   // FUNCTION TO ANIMATE VIEW
//   const load = (value: any) => {
//     // UPDATE ANIMATABLE VIEW
//     Animated.timing(counter, {
//       toValue: value,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   };
//   const width = counter.interpolate({
//     inputRange: [0, 100],
//     outputRange: ['0%', '100%'],
//     extrapolate: 'clamp',
//   });
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text1}>Progress bar sample app</Text>
//       <br />
//       <Text style={styles.text2}>Loading.....</Text>
//       <View style={styles.progressBar}>
//         <Animated.View
//           style={[
//             {
//               backgroundColor: '#46FF33',
//               width: width,
//             },
//             StyleSheet.absoluteFill,
//           ]}
//         />
//       </View>
//       <Text style={styles.text3}>{count}%</Text>
//       <br />
//       <StatusBar />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 24,
//     padding: 8,
//   },
//   text1: {
//     fontSize: 34,
//   },
//   text2: {
//     fontSize: 22,
//     margin: 5,
//   },
//   text3: {
//     fontSize: 18,
//   },
//   progressBar: {
//     width: '80%',
//     height: 40,
//     backgroundColor: '#fff',
//     borderWidth: 3,
//     borderRadius: 8,
//     borderColor: '#555',
//     flexDirection: 'row',
//   },
// });
