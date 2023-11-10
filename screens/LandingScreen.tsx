import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/shared/AppHeader";
import { theme } from "../constants/theme";
import SearchField from "../components/landing/SearchField";

const LandingScreen = () => {
  const [searchFilterVisible, setSearchFilterVisible] = useState(false);

  const onFilterPress = () => {
    setSearchFilterVisible(!searchFilterVisible);
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <AppHeader
        title="Wander Loom"
        onBackPress={() => {}}
        onFilterPress={onFilterPress}
      />
      {searchFilterVisible && <SearchField />}
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: theme.colors.bgExtraLight,
    flex: 1,
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  greetingText: { flex: 1, fontSize: 18, fontWeight: "bold" },
  weatherText: { flex: 1, textAlign: "right", fontSize: 14 },
});
