import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { Platform, View, Text } from "react-native";
import {
  lightColors,
  darkColors,
  createTheme,
  ThemeProvider,
} from "@rneui/themed";
import LandingScreen from "./screens/LandingScreen";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import React, { useEffect, useState } from "react";

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

  // if (!fontsLoaded && !fontError) {
  //   return <AppLoading />;
  // }

  const fetchFonts = async () => {
    await Font.loadAsync({
      "Poppins-regular": Poppins_400Regular,
      "Poppins-semibold": Poppins_600SemiBold,
      "Poppins-bold": Poppins_700Bold,
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
        <LandingScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
