import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../constants/theme";
import AppText from "../shared/AppText";

interface QuickFilterButtonProps {
  title: string;
  selected: boolean;
  onClick: any;
  filterParam: string;
}

const QuickFilterButton = ({
  title,
  selected,
  onClick,
  filterParam,
}: QuickFilterButtonProps) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      {selected ? (
        <LinearGradient
          colors={[theme.colors.bg500, theme.colors.bg400]}
          style={styles.button}
          start={{ x: 0.3, y: 0.2 }}
        >
          <AppText style={styles.selectedButtonText}>{title}</AppText>
        </LinearGradient>
      ) : (
        <LinearGradient colors={["#f1f1f1", "#f1f1f1"]} style={styles.button}>
          <AppText style={styles.deselectedButtonText}>{title}</AppText>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    width: 110,
  },
  selectedButtonText: {
    color: theme.colors.white,
    fontSize: 10,
    fontWeight: "bold",
  },
  deselectedButtonText: {
    color: theme.colors.text,
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default QuickFilterButton;
