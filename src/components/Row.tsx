import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { ThemedView } from "@/components/ThemedView";

export type RowProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function Row({ children, style }: RowProps) {
  return <ThemedView style={[styles.row, style]}>{children}</ThemedView>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
