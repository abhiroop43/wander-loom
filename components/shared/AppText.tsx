import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface AppTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  // size?: "small" | "medium" | "large";
  weight?: "semibold" | "bold" | "regular";
  // color?: string;
}
const AppText = ({ children, style, weight = "regular" }: AppTextProps) => {
  return (
    <Text style={[{ fontFamily: "Poppins-" + weight }, style]}>{children}</Text>
  );
};

export default AppText;
