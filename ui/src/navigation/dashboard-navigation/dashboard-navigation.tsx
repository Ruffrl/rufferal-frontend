import { ruffwind } from '@rufferal/tailwind';
import { PageNavigationProps } from '@rufferal/types';
import { GLOBAL_ICON_SIZE_LARGE, moderateScaleTW } from '@rufferal/utils';
import { Image } from 'expo-image';
import { observer } from 'mobx-react-lite';
import { Platform, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const DashboardNavigation = observer(
  ({ navigation }: PageNavigationProps) => {
    const insets = useSafeAreaInsets();
    
    return (
      <View
        style={ruffwind.style(`
            bg-electricViolet-50
            border-t-electricViolet-600
            flex-row
            items-end
            justify-evenly
            pt-${moderateScaleTW(8)}
            border-t-${moderateScaleTW(1)}
          `, Platform.OS === 'ios' ? `pb-${moderateScaleTW(insets.bottom)}` : `pb-${moderateScaleTW(20)}`)}
      >
        <Pressable
          style={ruffwind`items-center h-${moderateScaleTW(46)}`}
          onPress={() => navigation.navigate('Search Dashboard')}
        >
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
        </Pressable>
        <Pressable
          style={ruffwind`items-center h-${moderateScaleTW(46)}`}
          onPress={() => navigation.navigate('Bookings Dashboard')}
        >
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
        </Pressable>
        <Pressable
          style={ruffwind`items-center h-${moderateScaleTW(46)}`}
          onPress={() => navigation.navigate('Messages Dashboard')}
        >
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
        </Pressable>
        <Pressable
          style={ruffwind`items-center h-${moderateScaleTW(46)}`}
          onPress={() => navigation.navigate('Account Dashboard')}
        >
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
        </Pressable>
      </View>
    );
  }
);
