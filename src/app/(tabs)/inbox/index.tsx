import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Row } from "@/components/Row";
import { Card } from "@/components/Card";
import { ButtonRow } from "@/components/ButtonRow";
import { Chip } from "@/components/Chip";
import { dummySuggestions } from "@/types/dummy/suggestions";

export default function ForYouScreen() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView style={{flex:1}}>
      <FlatList
        data={dummySuggestions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
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
              buttons={[
                {
                  label: "Like",
                  onPress: () => {
                    // handle like
                  },
                },
              ]}
            />
          </Card>
        )}
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
    margin: 16
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
