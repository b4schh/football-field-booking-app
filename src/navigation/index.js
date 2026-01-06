import "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Home } from './screens/Home';
import { SearchScreen } from './screens/SearchScreen';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from "./screens/RegisterScreen";
import { AccountScreen } from "./screens/AccountScreen";
import { ComplexScreen } from "./screens/ComplexScreen";
import { BookingScreen } from "./screens/BookingScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { EditProfileScreen } from "./screens/EditProfileScreen";
import { PasswordScreen } from "./screens/PasswordScreen";
import { TermsOfServiceScreen } from "./screens/TermOfServiceScreen";
import { PrivacyPolicyScreen } from "./screens/PrivacyScreen";
import { PaymentScreen2 } from "./screens/PaymentScreen2";
import { MyBookingScreen } from "./screens/MyBookingScreen";
import { FavoriteScreen } from "./screens/FavouriteScreen";
import { PaymentScreen3 } from "./screens/PaymentScreen3";
import { ReviewScreen } from "./screens/ReviewScreen";
import { NotificationScreen } from "./screens/NotificationScreen";


const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            height: 70,
            paddingBottom: 10,
          },
          default: {
            height: 60,
          },
        }),
        tabBarActiveTintColor: "#239969",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/images/home.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MyBooking"
        component={MyBookingScreen}
        options={{
          tabBarLabel: "Đặt sân",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/images/booking.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/images/man.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;

const RootStack = createNativeStackNavigator({
  screens: {
    LoginScreen: {
      screen: LoginScreen,
      options: {
        headerShown: false,
      },
    },
    RegisterScreen: {
      screen: RegisterScreen,
      options: {
        headerShown: false,
      },
    },
    HomeTabs: {
      screen: HomeTabs,
      options: {
        headerShown: false,
        gestureEnabled: false,
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
    ComplexScreen: {
      screen: ComplexScreen,
      options: {
        headerShown: false,
      },
    },
     AccountScreen: {
      screen: AccountScreen,
      options: {
        headerShown:false,
      }
     },
     BookingScreen: {
      screen: BookingScreen,
      options: {
        headerShown:false,
      }
     },

          PaymentScreen: {
      screen: PaymentScreen,
      options: {
        headerShown:false,
      }
     },

          PaymentScreen2: {
      screen: PaymentScreen2,
      options: {
        headerShown:false,
      }
     },
     
     EditProfileScreen: {
      screen: EditProfileScreen,
      options: {
        headerShown:false,
      }
     },    

     PasswordScreen: {
      screen: PasswordScreen,
      options: {
        headerShown:false,
      }
     },

     TermsOfServiceScreen: {
      screen: TermsOfServiceScreen,
      options: {
        headerShown:false,
      }
     },

     PrivacyPolicyScreen: {
      screen: PrivacyPolicyScreen,
      options: {
        headerShown:false,
      }
     },

     FavoriteScreen: {
      screen: FavoriteScreen,
      options: {
        headerShown:false,
      }
     },

     PaymentScreen3: {
      screen: PaymentScreen3,
      options: {
        headerShown:false,
      }
    },

    ReviewScreen: {
      screen: ReviewScreen,
      options: {
        headerShown:false,
      }
    },

    NotificationScreen: {
      screen: NotificationScreen,
      options: {
        headerShown:false,
      }
    },


  },
});



export const Navigation = createStaticNavigation(RootStack);