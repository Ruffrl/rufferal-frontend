import { ruffwind } from '@rufferal/tailwind';
import { createImageSize, moderateScaleTW } from '@rufferal/utils';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

// <View style={ruffwind``}></View>
// style={ruffwind``}

export type Caretaker = {
  id: string;
  forename: string;
  surname: string;
  starRating: number;
  rufferalCount: number;
  rufferalSampling: string[];
  minimumBookingCost: number;
  isFavorite: boolean;
  avatar: string;
};

export const CaretakerSearchItem = ({ caretaker }: { caretaker: Caretaker }) => (
  <View key={caretaker.id} style={ruffwind`bg-pink-500 mx-${moderateScaleTW(20)}`}>
    <View
      style={ruffwind`
        bg-yellow-500
        h-${moderateScaleTW(100)}
        w-${moderateScaleTW(160)}
      `}
    >
      <Image
        style={ruffwind.style(
          createImageSize(34),
          `items-center justify-center rounded-${moderateScaleTW(4)}`
        )}
        source={caretaker.avatar}
      />
    </View>
    <Text style={ruffwind`bg-blue-400`}>{caretaker.forename}</Text>
    <Text style={ruffwind`bg-blue-400`}>{caretaker.surname}</Text>
    <Text style={ruffwind`bg-blue-400`}>{caretaker.starRating}</Text>
    <View style={ruffwind``}>
      {caretaker.rufferalCount > 0 && caretaker.rufferalSampling.length > 0 ? (
        <View style={ruffwind``}>
          {caretaker.rufferalSampling.map((imageUrl, index) => (
            <Image
              key={index}
              style={[
                ruffwind.style(
                  createImageSize(17.42),
                  `items-center justify-center rounded-full`,
                  `absolute left-${moderateScaleTW(
                    10 * caretaker.rufferalSampling.length - 1 - index
                  )}`
                ),
                { zIndex: caretaker.rufferalSampling.length - index },
              ]}
              source={imageUrl}
            />
          ))}
        </View>
      ) : (
        <View style={ruffwind``}>
          <Text style={ruffwind`bg-blue-400`}>Be the first to book!</Text>
        </View>
      )}
    </View>
  </View>
);
