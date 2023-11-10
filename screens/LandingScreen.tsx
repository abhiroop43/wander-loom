import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/shared/AppHeader";
import { theme } from "../constants/theme";
import SearchField from "../components/landing/SearchField";
import QuickFilterButton from "../components/landing/QuickFilterButton";

const LandingScreen = () => {
  const [searchFilterVisible, setSearchFilterVisible] = useState(false);
  const [quickFilter, setQuickFilter] = useState("");

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
      <View style={styles.quickFilterContainer}>
        <QuickFilterButton
          title="Places"
          filterParam="places"
          selected={quickFilter === "places"}
          onClick={() => {
            setQuickFilter("places");
          }}
        />
        <QuickFilterButton
          title="Tour"
          filterParam="tour"
          selected={quickFilter === "tour"}
          onClick={() => {
            setQuickFilter("tour");
          }}
        />
        <QuickFilterButton
          title="Adventure"
          filterParam="adventure"
          selected={quickFilter === "adventure"}
          onClick={() => {
            setQuickFilter("adventure");
          }}
        />
      </View>
      <View style={styles.filteredItemsContainer}></View>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: theme.colors.bg100,
    flex: 1,
  },
  quickFilterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    height: 10,
  },
  filteredItemsContainer: {
    flex: 28,
  },
});
