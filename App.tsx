import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Platform } from "react-native";
import {
  Button,
  lightColors,
  darkColors,
  createTheme,
  ThemeProvider,
} from "@rneui/themed";
import LandingScreen from "./screens/LandingScreen";
import AppHeader from "./components/shared/AppHeader";
import StartScreen from "./screens/StartScreen";

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
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <LandingScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
