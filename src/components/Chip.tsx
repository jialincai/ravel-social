import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

type ChipProps = {
  label: string;
  style?: ViewStyle | ViewStyle[];
};

// TODO: Implement Assist, Filter, Input, Sugguest subcategories.
export function Chip({ label, style }: ChipProps) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView
      style={[
        styles.chip,
        style,
        { backgroundColor: Colors[colorScheme].tint },
      ]}
    >
      <ThemedText style={[{ color: Colors[colorScheme].background }]}>
        {label}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
});
