import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import {
  createImageSize,
  GLOBAL_ICON_SIZE_MEDIUM,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { Pressable, Text, View } from 'react-native';

import { H2 } from '../../atoms';

export const CaretakerSearchHeader = ({ navigation }: PageNavigationProps) => (
  <View style={ruffwind`flex-1 bg-electricViolet-100`}>
    <View
      style={ruffwind`
        gap-${moderateScaleTW(4)}
        pt-${moderateScaleTW(34)}
        px-${moderateScaleTW(20)}
        pb-${moderateScaleTW(10)}
        `}
    >
      {/* HEADER */}
      <H2 text="Search for pet care" textColor="text-electricViolet-800" />
      {/* LOCATION */}
      <View
        style={ruffwind`
                  items-center
                  justify-between
                  flex-row
                  h-${moderateScaleTW(32)}
                `}
      >
        <View style={ruffwind`flex-row`}>
          <Text style={ruffwind`font-body text-b2 text-balticSea-950`}>
            in{` `}
          </Text>
          <Text style={ruffwind`font-bodySemibold text-b2 text-balticSea-950`}>
            San Antonio, TX
          </Text>
        </View>
        <View
          style={ruffwind`
                  items-center
                  flex-row
                  gap-${moderateScaleTW(4)}
                `}
        >
          <Image
            style={ruffwind.style(
              GLOBAL_ICON_SIZE_MEDIUM,
              'items-center justify-center'
            )}
            source={require('@rufferal/assets/src/icons/map.png')}
            tintColor={'#AC36E7'}
          />
          <View
            style={ruffwind`
              items-center
              border-b-balticSea-950
              border-b-${moderateScaleTW(0.75)}
            `}
          >
            <Text
              style={ruffwind`font-body items-end text-b1Small text-balticSea-950`}
            >
              Edit location
            </Text>
          </View>
        </View>
      </View>
    </View>
    <View
      style={ruffwind`
        bg-whisper-50 rounded-t-${moderateScaleTW(8)} p-${moderateScaleTW(20)}
      `}
    >
      {/* FILTERS HEADER */}
      <View
        style={ruffwind`
          justify-center h-${moderateScaleTW(23)} mb-${moderateScaleTW(8)}
        `}
      >
        <Text style={ruffwind`font-bodyBold text-b3 text-balticSea-950`}>
          Browse by category
        </Text>
      </View>
      {/* FILTERS */}
      <View
        style={ruffwind`
        flex-row
        flex-wrap
        gap-${moderateScaleTW(8)}
      `}
      >
        <Pressable
          onPress={() => navigation.navigate('Search Filters')}
          style={ruffwind`
          items-center
          border-chatelle-400
          rounded-${moderateScaleTW(4)}
          border-${moderateScaleTW(1)}
          gap-${moderateScaleTW(8)}
          py-${moderateScaleTW(12)}
          w-${moderateScaleTW(106)}
        `}
        >
          <Image
            style={ruffwind.style(
              createImageSize(34),
              'items-center justify-center'
            )}
            source={require('@rufferal/assets/src/icons/search-dog-walking.png')}
          />
          <Text
            style={ruffwind`font-bodySemibold text-b2 text-electricViolet-950`}
          >
            Dog walking
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Search Filters')}
          style={ruffwind`
          items-center
          border-chatelle-400
          rounded-${moderateScaleTW(4)}
          border-${moderateScaleTW(1)}
          gap-${moderateScaleTW(8)}
          py-${moderateScaleTW(12)}
          w-${moderateScaleTW(106)}
        `}
        >
          <Image
            style={ruffwind.style(
              createImageSize(34),
              'items-center justify-center'
            )}
            source={require('@rufferal/assets/src/icons/search-cat-harness.png')}
          />
          <Text
            style={ruffwind`font-bodySemibold text-b2 text-electricViolet-950`}
          >
            Cat harness
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Search Filters')}
          style={ruffwind`
          items-center
          border-chatelle-400
          rounded-${moderateScaleTW(4)}
          border-${moderateScaleTW(1)}
          gap-${moderateScaleTW(8)}
          py-${moderateScaleTW(12)}
          w-${moderateScaleTW(106)}
        `}
        >
          <Image
            style={ruffwind.style(
              createImageSize(34),
              'items-center justify-center'
            )}
            source={require('@rufferal/assets/src/icons/search-play-date.png')}
          />
          <Text
            style={ruffwind`font-bodySemibold text-b2 text-electricViolet-950`}
          >
            Play date
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Search Filters')}
          style={ruffwind`
          items-center
          border-chatelle-400
          rounded-${moderateScaleTW(4)}
          border-${moderateScaleTW(1)}
          gap-${moderateScaleTW(8)}
          py-${moderateScaleTW(12)}
          w-${moderateScaleTW(106)}
        `}
        >
          <Image
            style={ruffwind.style(
              createImageSize(34),
              'items-center justify-center'
            )}
            source={require('@rufferal/assets/src/icons/search-feeding.png')}
          />
          <Text
            style={ruffwind`font-bodySemibold text-b2 text-electricViolet-950`}
          >
            Feeding
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Search Filters')}
          style={ruffwind`
          items-center
          border-chatelle-400
          rounded-${moderateScaleTW(4)}
          border-${moderateScaleTW(1)}
          gap-${moderateScaleTW(8)}
          py-${moderateScaleTW(12)}
          w-${moderateScaleTW(106)}
        `}
        >
          <Image
            style={ruffwind.style(
              createImageSize(34),
              'items-center justify-center'
            )}
            source={require('@rufferal/assets/src/icons/search-overnight.png')}
          />
          <Text
            style={ruffwind`font-bodySemibold text-b2 text-electricViolet-950`}
          >
            Overnight
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Search Filters')}
          style={ruffwind`
          items-center
          border-chatelle-400
          rounded-${moderateScaleTW(4)}
          border-${moderateScaleTW(1)}
          gap-${moderateScaleTW(8)}
          py-${moderateScaleTW(12)}
          w-${moderateScaleTW(106)}
        `}
        >
          <Image
            style={ruffwind.style(
              createImageSize(34),
              'items-center justify-center'
            )}
            source={require('@rufferal/assets/src/icons/search-search-all.png')}
          />
          <Text
            style={ruffwind`font-bodySemibold text-b2 text-electricViolet-950`}
          >
            Search all
          </Text>
        </Pressable>
      </View>
    </View>
    {/* RESULTS HEADER */}
    <View
      style={ruffwind`
        bg-whisper-50
        justify-center
        h-${moderateScaleTW(23)}
        pb-${moderateScaleTW(8)}
        px-${moderateScaleTW(20)}
      `}
    >
      <Text style={ruffwind`font-bodyBold text-b3 text-balticSea-950`}>
        Caretakers near you
      </Text>
    </View>
  </View>
);
