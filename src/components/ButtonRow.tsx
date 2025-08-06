import React from "react";
import { Pressable, StyleSheet, ViewStyle, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Row } from "@/components/Row";
import { Colors } from "@/constants/Colors";

export type ButtonRowProps = {
  buttons: {
    id: string;
    label: string;
    onPress: () => void;
    style?: ViewStyle;
  }[];
  selected?: string;
  style?: ViewStyle;
};

export function ButtonRow({ buttons, selected, style }: ButtonRowProps) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Row style={style}>
      {buttons.map((btn, idx) => {
        const isFirst = idx === 0;
        const isLast = idx === buttons.length - 1;
        const isSelected = btn.id === selected;
        const backgroundColor = isSelected
          ? Colors[colorScheme].text
          : Colors[colorScheme].background;

        const borderColor = isSelected
          ? Colors[colorScheme].background
          : Colors[colorScheme].text;

        return (
          <Pressable
            key={btn.label}
            onPress={btn.onPress}
            style={[
              styles.button,
              isFirst && styles.leftRadius,
              isLast && styles.rightRadius,
              { borderColor, backgroundColor },
              btn.style,
            ]}
          >
            <ThemedText style={{ color: borderColor }}>{btn.label}</ThemedText>
          </Pressable>
        );
      })}
    </Row>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
  },
  leftRadius: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightRadius: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
