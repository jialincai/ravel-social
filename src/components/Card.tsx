import React from "react";
import { View, StyleSheet, ViewStyle, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

export type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function Card({ children, style }: CardProps) {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: Colors[colorScheme].background,
          borderColor: Colors[colorScheme].text,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "stretch",
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
  },
});
