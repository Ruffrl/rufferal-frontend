// import * as React from 'react';
// import tw from 'twrnc';

// import { Image, ScrollView, Text, View } from 'react-native';
// import {
//   GLOBAL_PROTOTYPE_COLORS,
//   GLOBAL_ICON_SIZE,
//   horizontalScaleTW,
//   moderateScaleTW,
//   PetSpecies,
//   RButton,
//   RPrototypeTemplate,
//   verticalScaleTW,
// } from '../../../../';

// type ManagePetsProps = {
//   mobileBackIcon?: React.JSX.Element;
//   mobileCloseIcon?: React.JSX.Element;
//   mobileMissing?: React.JSX.Element;
//   mobilePlusIcon?: React.JSX.Element;
//   navigateBack: () => void;
//   navigateCreatePet: (type: PetSpecies) => void;
// };

// export const RManagePets = ({
//   mobileBackIcon,
//   mobileCloseIcon,
//   mobileMissing,
//   mobilePlusIcon,
//   navigateBack,
//   navigateCreatePet,
// }: ManagePetsProps): React.ReactElement => {
//   const hasPets = false;

//   const AddNewPet = () => (
//     <>
//       <RButton
//         titleIcon={<PlusIcon />}
//         title="Add a cat"
//         onPress={() => navigateCreatePet('cat')}
//         size="medium"
//         type="secondary"
//       />
//       <RButton
//         titleIcon={<PlusIcon />}
//         title="Add a dog"
//         onPress={() => navigateCreatePet('dog')}
//         size="medium"
//         type="secondary"
//       />
//     </>
//   );

//   const PlusIcon = () => (
//     <>
//       {mobilePlusIcon || (
//         <Image
//           source={require('../../../../assets/icons-512/plus.png')}
//           resizeMode="contain"
//           style={tw.style(GLOBAL_ICON_SIZE)}
//           tintColor={GLOBAL_PROTOTYPE_COLORS.quaternary.hex}
//         />
//       )}
//     </>
//   );

//   const MissingImage = () => (
//     <>
//       {mobileMissing || (
//         <Image
//           source={require('../../../../assets/pikisuperstar/not-found/not-found.jpg')}
//           resizeMode="contain"
//           style={tw`h-${verticalScaleTW(48)} w-${verticalScaleTW(48)}`}
//         />
//       )}
//     </>
//   );

//   return (
//     <RPrototypeTemplate
//       backNavigation={navigateBack}
//       mobileBackIcon={mobileBackIcon}
//       mobileCloseIcon={mobileCloseIcon}
//       navigationHeader="Pet Profiles"
//     >
//       <View
//         style={tw`
//         justify-between
//         h-full
//         pt-${verticalScaleTW(12)}
//         pb-${verticalScaleTW(8)}
//       `}
//       >
//         {hasPets ? (
//           <View style={tw`h-2/5`}>
//             <ScrollView>
//               <Text style={tw`border border-black h-10`}>Pet Profile 1</Text>
//               <Text style={tw`border border-black h-10`}>Pet Profile 2</Text>
//               <Text style={tw`border border-black h-10`}>Pet Profile 3</Text>
//               <Text style={tw`border border-black h-10`}>Pet Profile 4</Text>
//               <Text style={tw`border border-black h-10`}>Pet Profile 5</Text>
//               <Text style={tw`border border-black h-10`}>Pet Profile 6</Text>
//               <Text style={tw`border border-black h-10`}>Pet Profile 7</Text>
//               <Text style={tw`border border-black h-10`}>Pet Profile 8</Text>
//               <Text style={tw`border border-black h-10`}>Pet Profile 9</Text>
//             </ScrollView>
//             <AddNewPet />
//           </View>
//         ) : (
//           <View
//             style={tw`
//             border
//             border-zinc-300
//             rounded-lg
//             justify-center
//             items-center
//             px-${horizontalScaleTW(32)}
//             py-${verticalScaleTW(24)}
//           `}
//           >
//             <MissingImage />
//             <Text
//               style={tw`
//                 text-zinc-900
//                 font-bold
//                 text-center
//                 pt-${verticalScaleTW(20)}
//                 text-${moderateScaleTW(16)}
//               `}
//             >
//               No saved profiles
//             </Text>
//             <Text
//               style={tw`
//                 text-gray-500
//                 text-center
//                 text-${moderateScaleTW(12)}
//                 pt-${verticalScaleTW(16)}
//               `}
//             >
//               Lorem ipsum doggo heckin snoot good boys pats mlem pupper clouds
//               long bois.
//             </Text>
//             <View
//               style={tw`justify-center pt-${verticalScaleTW(
//                 16
//               )} gap-${verticalScaleTW(12)}`}
//             >
//               <AddNewPet />
//             </View>
//           </View>
//         )}
//         <RButton title="Back" type="secondary" onPress={navigateBack} />
//       </View>
//     </RPrototypeTemplate>
//   );
// };

import * as React from 'react';
import tw from 'twrnc';

import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Button,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  moderateScaleTW,
  PetSpecies,
  RButton,
  RPrototypeTemplate,
  verticalScaleTW,
} from '../../../../';

type ManagePetsProps = {
  mobileBackIcon?: React.JSX.Element;
  mobileCloseIcon?: React.JSX.Element;
  mobileMissing?: React.JSX.Element;
  mobilePlusIcon?: React.JSX.Element;
  navigateBack: () => void;
  navigateCreatePet: (type: PetSpecies) => void;
};

export const RManagePets = ({
  mobileBackIcon,
  mobileCloseIcon,
  navigateBack,
}: ManagePetsProps): React.ReactElement => {
  const [modalVisible, setModalVisible] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState('');

  const inputRef = useRef<TextInput>(null);

  // useEffect(()=>{
  //   // Use the textInput focus function
  //   inputRef.current?.focus(); // opens keyboard
  // },[])

  // const TestKeyboard = forwardRef(
  //   ({ props, ref }: { props: any; ref: RefObject<TextInput> }) => (
  //     <TextInput ref={ref} style={tw`bg-pink-500`} />
  //   )
  // );
  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
  //     setKeyboardStatus('Keyboard Shown');
  //   });
  //   const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
  //     setKeyboardStatus('Keyboard Hidden');
  //   });

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <RPrototypeTemplate
      backNavigation={navigateBack}
      mobileBackIcon={mobileBackIcon}
      mobileCloseIcon={mobileCloseIcon}
      navigationHeader="Pet Profiles"
      // pageColor={GLOBAL_COLORS.canary400.hex}
      pageColor="#D2F049"
    >
      <View
        style={tw`
        justify-between
        h-full
        pt-${verticalScaleTW(12)}
        pb-${verticalScaleTW(8)}
      `}
      >
        <View
          style={tw`
            items-center
            w-full
          `}
        >
          <Text style={tw`font-bold text-lg`}>Animation Testing</Text>
          <Animated.View
            style={[
              tw`bg-pink-300 p-5`,
              {
                // Bind opacity to animated value
                opacity: fadeAnim,
              },
            ]}
          >
            <Text>Show fade</Text>
          </Animated.View>
          <Button onPress={fadeIn} title="Fade in" />
          <Button onPress={fadeOut} title="Fade out" />
        </View>
        <View
          style={tw`
            items-center
            w-full
          `}
        >
          <Text style={tw`font-bold text-lg`}>Modal Testing</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            onShow={() => {
              console.log(`BLARG MODAL VISIBLE platform: ${Platform.OS}`);
              inputRef.current?.focus();
            }}
          >
            <KeyboardAvoidingView
              style={tw`bg-[#6D6D6D]/60 flex-1`}
              keyboardVerticalOffset={40}
            >
              <View
                style={tw.style(
                  tw`bg-white
                  flex-1
                  items-center
                  justify-center
                  rounded-t-${moderateScaleTW(10)}
                  mt-${verticalScaleTW(32)}
                  mb-${verticalScaleTW(350)}`,
                  Platform.OS === 'ios' && tw`mt-${verticalScaleTW(60)}`
                )}
              >
                <Text>I am a modal</Text>
                <TextInput
                  style={tw`bg-pink-500`}
                  autoFocus={true}
                  ref={inputRef}
                  // blurOnSubmit={false}
                />
                <Button
                  onPress={() => setModalVisible(false)}
                  title="Close modal"
                />
              </View>
            </KeyboardAvoidingView>
          </Modal>
          <Pressable
            onPress={() => {
              setModalVisible(true);
            }}
            style={tw`bg-pink-500 rounded-xl p-10`}
          >
            <Text>Show modal</Text>
          </Pressable>
        </View>
        <RButton title="Back" type="secondary" onPress={navigateBack} />
      </View>
    </RPrototypeTemplate>
  );
};
