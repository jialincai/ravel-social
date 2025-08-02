import React from "react";
import { Pressable, StyleSheet, ViewStyle, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Row } from "@/components/Row";
import { Colors } from "@/constants/Colors";

export type ButtonRowProps = {
  buttons: { label: string; onPress: () => void; style?: ViewStyle }[];
  selected?: string;
  style?: ViewStyle;
};

export function ButtonRow({ buttons, selected, style }: ButtonRowProps) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Row style={style}>
      {buttons.map((btn, idx) => {
        const isSelected = btn.label === selected;
        return (
          <Pressable
            key={btn.label}
            onPress={btn.onPress}
            style={[
              styles.segmentButton,
              idx === 0 && styles.leftButton,
              idx === buttons.length - 1 && styles.rightButton,
              {
                borderColor: Colors[colorScheme].text,
                backgroundColor: isSelected
                  ? Colors[colorScheme].text
                  : Colors[colorScheme].background,
              },
              btn.style,
            ]}
          >
            <ThemedText
              style={{
                color: isSelected
                  ? Colors[colorScheme].background
                  : Colors[colorScheme].text,
              }}
            >
              {btn.label}
            </ThemedText>
          </Pressable>
        );
      })}
    </Row>
  );
}

const styles = StyleSheet.create({
  segmentButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
  },
  leftButton: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightButton: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
