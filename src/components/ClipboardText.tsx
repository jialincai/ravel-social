import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { User } from "@/types";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Row } from "@/components/Row";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

type InviteeListProps = {
  invitees: User[];
  style?: ViewStyle;
};

export function ClipboardText({ invitees, style }: InviteeListProps) {
  const colorScheme = useColorScheme() ?? "light";
  const names = invitees.map((i) => i.display_name);

  return (
    <ThemedView
      style={[
        styles.inviteeList,
        { borderColor: Colors[colorScheme].tint },
        style,
      ]}
    >
      <Row style={styles.row}>
        <ThemedText>{names.join(", ")}</ThemedText>
        <IconSymbol
          name="square.on.square"
          size={18}
          color={Colors[colorScheme].text}
        />
      </Row>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  inviteeList: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 4,
    padding: 8,
  },
  row: {
    justifyContent: "space-between",
  },
});
