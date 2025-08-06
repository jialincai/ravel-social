import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { produce } from "immer";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { dummySuggestions } from "@/types/dummy/suggestions";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Row } from "@/components/Row";
import { Card } from "@/components/Card";
import { ButtonRow } from "@/components/ButtonRow";
import { Chip } from "@/components/Chip";

// Helper: format date/time to "Saturday August 12, 12:00PM-3:00PM"
// TODO: Move this to utilities folder
export function formatEventDate(isoString: string) {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export const CURRENT_USER_ID = "u1";

export default function ForYouScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const [suggestions, setSuggestions] = useState(dummySuggestions);

  const handleFeedbackUpdate = (suggestionId: string) => {
    setSuggestions((prev) =>
      produce(prev, (draft) => {
        const suggestion = draft.find((s) => s.id === suggestionId);
        if (!suggestion) return;
        const user = suggestion.users.find(
          (u) => u.user.id === CURRENT_USER_ID,
        );
        if (user) {
          user.feedback = user.feedback === "like" ? "pending" : "like";
          user.responded_at = new Date().toISOString();
        }
      }),
    );
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const currentUser = item.users.find(
            (u) => u.user.id === CURRENT_USER_ID,
          );
          const currentFeedback = currentUser?.feedback;

          return (
            <Card style={styles.card}>
              <ThemedView>
                <ThemedText type="subtitle">{item.raw_text}</ThemedText>
                <Row>
                  <IconSymbol
                    name="person.2.fill"
                    size={20}
                    color={Colors[colorScheme].icon}
                    style={styles.icon}
                  />
                  <ThemedText>
                    {item.users.map((u) => u.user.display_name).join(", ")}
                  </ThemedText>
                </Row>
              </ThemedView>
              <ThemedView>
                <Row
                  style={[
                    styles.sectionHeading,
                    { borderColor: Colors[colorScheme].text },
                  ]}
                >
                  <IconSymbol
                    name="tag.fill"
                    size={20}
                    color={Colors[colorScheme].icon}
                    style={styles.icon}
                  />
                  <ThemedText type="subtitle">Tags</ThemedText>
                </Row>
                <Row style={styles.tagContainer}>
                  {item.tags.map((tag) => (
                    <Chip key={tag.id} label={tag.name} />
                  ))}
                </Row>
              </ThemedView>
              <ButtonRow
                selected={currentFeedback}
                buttons={[
                  {
                    id: "like",
                    label: "Like",
                    onPress: () => handleFeedbackUpdate(item.id),
                  },
                ]}
              />
            </Card>
          );
        }}
      />
    </ThemedView>
  );
}

export const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  card: {
    gap: 8,
    margin: 16,
  },
  icon: {
    marginRight: 8,
  },
  sectionHeading: {
    borderTopWidth: 1,
    paddingTop: 4,
    paddingBottom: 8,
  },
  tagContainer: {
    gap: 4,
  },
});
