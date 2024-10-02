import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import { GLOBAL_ICON_SIZE_LARGE, moderateScaleTW } from '@rufferal/utils';
import { Image } from 'expo-image';
import { observer } from 'mobx-react-lite';
import { Text, View } from 'react-native';

// <View style={ruffwind``}></View>
// style={ruffwind``}

export const DashboardNavigation = observer(
  ({ navigation }: PageNavigationProps) => {
    return (
      <View
        style={ruffwind`
            bg-electricViolet-50
            border-t-electricViolet-600
            flex-row
            items-end
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
    );
  }
);
