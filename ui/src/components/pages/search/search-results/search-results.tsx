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
import { SafeAreaView, Text, View } from 'react-native';

import { H2 } from '../../../atoms';

// <View style={ruffwind``}></View>
// style={ruffwind``}

export const SearchResults = observer(({ navigation }: PageNavigationProps) => {
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
            <Text>THE STUFF - FILL OUT</Text>
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
