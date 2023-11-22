import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { Dimensions, Platform, View, Text, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { lightColors, darkColors, createTheme, ThemeProvider } from '@rneui/themed';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import React, { useEffect, useState } from 'react';
import StackNavigation from './navigation/StackNavigation';

const deviceHeight = Dimensions.get('window').height;

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: darkColors.platform.ios,
    }),
  },
});

export default function App() {
  let [fontsLoaded, setFontLoaded] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      'Poppins-regular': Poppins_400Regular,
      'Poppins-semibold': Poppins_600SemiBold,
      'Poppins-bold': Poppins_700Bold,
    });
  };

  useEffect(() => {
    async function getFonts() {
      await fetchFonts();
      setFontLoaded(true);
    }
    getFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="auto" />

        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
