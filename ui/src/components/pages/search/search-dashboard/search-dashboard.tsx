/* eslint-disable jsx-a11y/accessible-emoji */
import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import {
  createImageSize,
  GLOBAL_ICON_SIZE_LARGE,
  GLOBAL_ICON_SIZE_MEDIUM,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { observer } from 'mobx-react-lite';
import { FlatList, Pressable, SafeAreaView, Text, View } from 'react-native';

import { H2 } from '../../../atoms';
import { MOCK_DATA } from './mock-constants';

// <View style={ruffwind``}></View>
// style={ruffwind``}

export type RufferalItem = {
  id: string;
  avatar: string;
};

export type Item = {
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

export const SearchDashboard = observer(
  ({ navigation }: PageNavigationProps) => {
    return (
      <SafeAreaView style={ruffwind`flex-1 bg-electricViolet-100`}>
        <View style={ruffwind`flex-1 justify-between`}>
          {/* Header and Search */}
          <View style={ruffwind`flex-1`}>
            {/* Header */}
            <View
              style={ruffwind`
                gap-${moderateScaleTW(4)}
                mt-${moderateScaleTW(34)}
                px-${moderateScaleTW(20)}
                mb-${moderateScaleTW(10)}
              `}
            >
              <H2
                text="Search for pet care"
                textColor="text-electricViolet-800"
              />
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
                  <Text
                    style={ruffwind`font-bodySemibold text-b2 text-balticSea-950`}
                  >
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
                  <Text
                    style={ruffwind`
                      font-body
                      items-end
                      text-b1Small
                      text-balticSea-950
                      underline-balticSea-950
                      underline-offset-${moderateScaleTW(4)}
                    `}
                  >
                    Edit location
                  </Text>
                </View>
              </View>
            </View>
            {/* Search */}
            <View style={ruffwind`flex-1`}>
              <FlatList
                style={ruffwind`
                  flex-1
                  h-full
                  bg-whisper-50
                  rounded-t-${moderateScaleTW(8)}
                  p-${moderateScaleTW(20)}
                `}
                data={MOCK_DATA}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<Header navigation={navigation} />}
              />
            </View>
          </View>
          {/* Navigation */}
          <View
            style={ruffwind`
              bg-electricViolet-50
              border-t-electricViolet-600
              flex-row
              justify-evenly
              pb-${moderateScaleTW(20)}
              pt-${moderateScaleTW(8)}
              border-t-${moderateScaleTW(1)}
            `}
          >
            <View style={ruffwind`items-center h-${moderateScaleTW(46)}`}>
              <View style={ruffwind`p-${moderateScaleTW(5)}`}>
                <Image
                  style={ruffwind.style(
                    GLOBAL_ICON_SIZE_LARGE,
                    'items-center justify-center'
                  )}
                  source={require('@rufferal/assets/src/icons/search.png')}
                  tintColor={'#7D23A6'}
                />
              </View>
              <Text
                style={ruffwind`text-center font-bodyBold text-b1 text-electricViolet-800`}
              >
                Search
              </Text>
            </View>
            <View style={ruffwind`items-center h-${moderateScaleTW(46)}`}>
              <View style={ruffwind`p-${moderateScaleTW(5)}`}>
                <Image
                  style={ruffwind.style(
                    GLOBAL_ICON_SIZE_LARGE,
                    'items-center justify-center'
                  )}
                  source={require('@rufferal/assets/src/icons/booking.png')}
                  tintColor={'#9F90A5'}
                />
              </View>
              <Text
                style={ruffwind`text-center font-body text-b1Small text-amethystSmoke-600`}
              >
                Bookings
              </Text>
            </View>
            <View style={ruffwind`items-center h-${moderateScaleTW(46)}`}>
              <View style={ruffwind`p-${moderateScaleTW(5)}`}>
                <Image
                  style={ruffwind.style(
                    GLOBAL_ICON_SIZE_LARGE,
                    'items-center justify-center'
                  )}
                  source={require('@rufferal/assets/src/icons/messages.png')}
                  tintColor={'#9F90A5'}
                />
              </View>
              <Text
                style={ruffwind`text-center font-body text-b1Small text-amethystSmoke-600`}
              >
                Messages
              </Text>
            </View>
            <View style={ruffwind`items-center h-${moderateScaleTW(46)}`}>
              <View style={ruffwind`p-${moderateScaleTW(5)}`}>
                <Image
                  style={ruffwind.style(
                    GLOBAL_ICON_SIZE_LARGE,
                    'items-center justify-center'
                  )}
                  source={require('@rufferal/assets/src/icons/account.png')}
                  tintColor={'#9F90A5'}
                />
              </View>
              <Text
                style={ruffwind`text-center font-body text-b1Small text-amethystSmoke-600`}
              >
                Account
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
);

// **************************************************************************************************************
// **************************************************************************************************************
// *************************************************** HELPERS **************************************************
// **************************************************************************************************************
// **************************************************************************************************************

const Item = ({ item }: { item: Item }) => (
  <View key={item.id} style={ruffwind`bg-pink-500`}>
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
        source={item.avatar}
      />
    </View>
    <Text style={ruffwind`bg-blue-400`}>{item.forename}</Text>
    <Text style={ruffwind`bg-blue-400`}>{item.surname}</Text>
    <Text style={ruffwind`bg-blue-400`}>{item.starRating}</Text>
    <View style={ruffwind``}>
      {item.rufferalCount > 0 && item.rufferalSampling.length > 0 ? (
        <View style={ruffwind``}>
          {item.rufferalSampling.map((imageUrl, index) => (
            <Image
              key={index}
              style={[
                ruffwind.style(
                  createImageSize(17.42),
                  `items-center justify-center rounded-full`,
                  `absolute left-${moderateScaleTW(
                    10 * item.rufferalSampling.length - 1 - index
                  )}`
                ),
                { zIndex: item.rufferalSampling.length - index },
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

const Header = ({ navigation }: PageNavigationProps) => (
  <View style={ruffwind`bg-whisper-50`}>
    <View
      style={ruffwind`
        justify-center
        h-${moderateScaleTW(23)}
        mb-${moderateScaleTW(8)}
      `}
    >
      <Text style={ruffwind`font-bodyBold text-b3 text-balticSea950`}>
        Browse by category
      </Text>
    </View>
    <View
      style={ruffwind`
        flex-row
        flex-wrap
        mb-${moderateScaleTW(20)}
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
    <View
      style={ruffwind`
        justify-center
        h-${moderateScaleTW(23)}
        mb-${moderateScaleTW(8)}
      `}
    >
      <Text style={ruffwind`font-bodyBold text-b3 text-balticSea950`}>
        Caretakers near you
      </Text>
    </View>
  </View>
);
