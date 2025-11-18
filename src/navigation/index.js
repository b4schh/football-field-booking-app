import "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import { Home } from './screens/Home';
import { SearchScreen } from './screens/SearchScreen';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from "./screens/RegisterScreen";

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
        // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
      },
    },
    
  },
  screenOptions: {
    headerShown: false,
    // tabBarButton: HapticTab,
    // tabBarBackground: TabBarBackground,
    tabBarStyle: Platform.select({
      ios: {
        // Use a transparent background on iOS to show the blur effect
        possition: 'absolute',
      },
      default: {},
    }),
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    // LoginScreen: {
    //   screen: LoginScreen,
    //   options: {
    //     headerShown: false,
    //   },
    // },
    // RegisterScreen: {
    //   screen: RegisterScreen,
    //   options: {
    //     headerShown: false,
    //   },
    // },
    HomeTabs: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },

    SearchScreen: { 
      screen: SearchScreen,
      options: {
        headerShown: false,
      },
     },
     
    Home: { 
      screen: Home,
      options: {
        headerShown: false,
      },
     },
  },
});

export const Navigation = createStaticNavigation(RootStack);