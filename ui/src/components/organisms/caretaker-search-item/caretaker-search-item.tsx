import { ruffwind } from '@rufferal/tailwind';
import {
  createImageSize,
  GLOBAL_ICON_SIZE_MEDIUM,
  moderateScaleTW,
  starRatingDisplay,
  surnameLetter,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';
import { LayeredAvatars } from '../../molecules';

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

export const CaretakerSearchItem = ({
  caretaker,
}: {
  caretaker: Caretaker;
}) => (
  <Pressable
    style={ruffwind`
      h-${moderateScaleTW(145)}
      mb-${moderateScaleTW(8)}
      w-${moderateScaleTW(160)}
    `}
    onPress={() => console.log('MAIN BUTTON')}
  >
    <View style={ruffwind`gap-${moderateScaleTW(4)}`}>
      {/* CARETAKER AVATAR */}
      <View style={ruffwind``}>
        <Image
          style={ruffwind.style(
            createImageSize(100, 160),
            `items-center justify-center rounded-${moderateScaleTW(4)}`
          )}
          source={caretaker.avatar}
        />
        <View
          style={ruffwind`
            absolute
            bg-balticSea-950
            items-center
            justify-center
            opacity-85
            bottom-${moderateScaleTW(4)}
            h-${moderateScaleTW(20)}
            px-${moderateScaleTW(8)}
            right-${moderateScaleTW(4)}
          `}
        >
          <Text style={ruffwind`font-body text-b1Medium text-white`}>
            from{` `}
            <Text style={ruffwind`font-bodyBold text-white text-b1Medium`}>
              ${caretaker.minimumBookingCost}
            </Text>
          </Text>
        </View>
      </View>
      {/* CARETAKER DETAILS */}
      <View style={ruffwind`mb-${moderateScaleTW(8)}`}>
        {/* NAME */}
        <Text style={ruffwind`font-bodyBold text-b2 text-balticSea-950`}>
          {caretaker.forename} {surnameLetter(caretaker.surname)}
        </Text>
        <View style={ruffwind`flex-row justify-between`}>
          {/* STAR RATING */}
          <View style={ruffwind`flex-row items-center`}>
            <Image
              style={ruffwind.style(
                createImageSize(10),
                `items-center justify-center`
              )}
              source={require('@rufferal/assets/src/icons/star.png')}
              tintColor={'#695C6F'}
            />
            <Text
              style={ruffwind`
                font-body text-b1Small text-saltBox-700 ml-${moderateScaleTW(2)}
              `}
            >
              {starRatingDisplay(caretaker.starRating)}
            </Text>
          </View>
          {/* RUFFERALS */}
          <View style={ruffwind`flex-row items-center justify-end`}>
            <LayeredAvatars imageUrls={caretaker.rufferalSampling} />
            <Text
              style={ruffwind`font-body text-b1Small text-saltBox-700 pl-${moderateScaleTW(
                2
              )}`}
            >
              {caretaker.rufferalCount} booked nearby
            </Text>
          </View>
        </View>
      </View>
    </View>
    {/* FAVORITES BUTTON */}
    <Pressable
      style={ruffwind`
        absolute
        bg-balticSea-950
        items-center
        justify-center
        opacity-85
        rounded-full
        h-${moderateScaleTW(24)}
        p-${moderateScaleTW(5.25)}
        right-${moderateScaleTW(4)}
        top-${moderateScaleTW(4)}
        w-${moderateScaleTW(24)}
      `}
      onPress={() => console.log('LAYERED BUTTON')}
    >
      {caretaker.isFavorite ? (
        <Image
          style={ruffwind.style(
            GLOBAL_ICON_SIZE_MEDIUM,
            `items-center justify-center`
          )}
          source={require('@rufferal/assets/src/icons/heart-filled.png')}
          tintColor={'#EFD6FE'}
        />
      ) : (
        <Image
          style={ruffwind.style(
            GLOBAL_ICON_SIZE_MEDIUM,
            `items-center justify-center`
          )}
          source={require('@rufferal/assets/src/icons/heart-open.png')}
          tintColor={'#EFD6FE'}
        />
      )}
    </Pressable>
  </Pressable>
);
