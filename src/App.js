import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Colors } from './constants/Colors';
import { Navigation } from './navigation';


SplashScreen.preventAutoHideAsync();

export function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const theme =
    colorScheme === 'dark'
      ? {
          ...DarkTheme,
          colors: { ...DarkTheme.colors, primary: Colors[colorScheme ?? 'light'].tint },
        }
      : {
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, primary: Colors[colorScheme ?? 'light'].tint },
        };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Navigation
        theme={theme}
        linking={{
          enabled: 'auto',
          prefixes: ['helloworld://'],
        }}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
      
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
