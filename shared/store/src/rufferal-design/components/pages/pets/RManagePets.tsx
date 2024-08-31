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

import { Animated, Button, Text, View } from 'react-native';

import { useRef } from 'react';
import {
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
            flex-1
            items-center
            bg-pink-500
            w-full
          `}
        >
          <Text style={tw`font-bold text-lg`}>Bottom Sheet Modal</Text>
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
        <RButton title="Back" type="secondary" onPress={navigateBack} />
      </View>
    </RPrototypeTemplate>
  );
};
