import { StyleSheet, ViewStyle } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import React from "react";

export type BulletProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function Bullet({ children, style }: BulletProps) {
  return (
    <ThemedView style={[styles.row, style]}>
      <ThemedText style={styles.symbol}>•</ThemedText>
      <ThemedView style={{ flex: 1 }}>{children}</ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  symbol: {
    marginRight: 10,
  },
});
