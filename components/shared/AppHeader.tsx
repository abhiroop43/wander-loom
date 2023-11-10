import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Icon } from "@rneui/themed";
import { theme } from "../../constants/theme";

interface AppHeaderProps {
  onBackPress: any;
  onFilterPress: any;
  title: string;
}

const AppHeader = ({ title, onBackPress, onFilterPress }: AppHeaderProps) => {
  return (
    <Header
      placement="center"
      centerComponent={{
        text: title,
        style: { color: theme.colors.text, fontSize: 20 },
      }}
      leftComponent={
        onBackPress && (
          <Icon
            name="chevron-left"
            type="feather"
            color={theme.colors.text}
            onPress={onBackPress}
          />
        )
      }
      rightComponent={
        onFilterPress && (
          <Icon
            name="filter"
            type="feather"
            color={theme.colors.text}
            onPress={onFilterPress}
          />
        )
      }
      containerStyle={styles.headerContainer}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.bg100,
    justifyContent: "space-around",
    borderBottomWidth: 0, // Remove the default bottom border
    borderTopWidth: 0,
    marginTop: 0,
    paddingTop: -0,
  },
});

export default AppHeader;
