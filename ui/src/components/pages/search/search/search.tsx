/* eslint-disable jsx-a11y/accessible-emoji */
import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import {
  GLOBAL_ICON_SIZE_LARGE,
  GLOBAL_ICON_SIZE_MEDIUM,
  moderateScaleTW,
} from '@rufferal/utils';
import { Image } from 'expo-image';
import { observer } from 'mobx-react-lite';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { H2 } from '../../../atoms';

// <View style={ruffwind``}></View>
// style={ruffwind``}

type Item = { id: string; title: string };

export const Search = observer(({ navigation }: PageNavigationProps) => {
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
              data={DATA}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={<Header />}
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
});

// **************************************************************************************************************
// **************************************************************************************************************
// *************************************************** HELPERS **************************************************
// **************************************************************************************************************
// **************************************************************************************************************

const DATA: Item[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ item }: { item: Item }) => (
  <View style={ruffwind`bg-pink-500`}>
    <Text style={ruffwind`bg-blue-400`}>{item.title}</Text>
  </View>
);

const Header = () => (
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
      <View
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
        <Text style={ruffwind``}>🦮</Text>
        <Text style={ruffwind``}>Dog walking</Text>
      </View>
      <View
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
        <Text style={ruffwind``}>🐈</Text>
        <Text style={ruffwind``}>Cat harness</Text>
      </View>
      <View
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
        <Text style={ruffwind``}>🎾</Text>
        <Text style={ruffwind``}>Play date</Text>
      </View>
      <View
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
        <Text style={ruffwind``}>🍖</Text>
        <Text style={ruffwind``}>Feeding</Text>
      </View>
      <View
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
        <Text style={ruffwind``}>🌙</Text>
        <Text style={ruffwind``}>Overnight</Text>
      </View>
      <View
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
        <Text style={ruffwind``}>...</Text>
        <Text style={ruffwind``}>Search all</Text>
      </View>
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
