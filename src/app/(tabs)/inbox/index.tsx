import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { User } from "@/types";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Row } from "@/components/Row";
import { Card } from "@/components/Card";
import { ButtonRow } from "@/components/ButtonRow";
import { Chip } from "@/components/Chip";

export default function ForYouScreen() {
  const colorScheme = useColorScheme() ?? "light";

  // Example invitee list
  const party: User[] = [
    {
      id: "1",
      email: "jialin@example.com",
      display_name: "Jialin",
      created_at: "2023-08-01T12:00:00Z",
    },
    {
      id: "2",
      email: "davis@example.com",
      display_name: "Davis",
      created_at: "2023-08-01T12:00:00Z",
    },
    {
      id: "3",
      email: "tammy@example.com",
      display_name: "Tammy",
      created_at: "2023-08-01T12:00:00Z",
    },
  ];

  return (
    <ThemedView style={styles.centered}>
      <Card style={styles.container}>
        <ThemedView>
          <ThemedText type="subtitle">
            See Wicked on Broadway
          </ThemedText>
          <Row>
            <IconSymbol
              name="person.2.fill"
              size={20}
              color={Colors[colorScheme].icon}
              style={styles.icon}
            />
            <ThemedText>{party.map((i) => i.display_name).join(", ")}</ThemedText>
          </Row>
        </ThemedView>
        <ThemedView>
          <Row style={[styles.sectionHeading, {borderColor: Colors[colorScheme].text}]}>
            <IconSymbol
              name="tag.fill"
              size={20}
              color={Colors[colorScheme].icon}
              style={styles.icon}
            />
            <ThemedText type="subtitle">Tags</ThemedText>
          </Row>
          <Row style={styles.tagContainer}>
            <Chip label="musical" />
            <Chip label="live-show" />
            <Chip label="theater" />
          </Row>
        </ThemedView>
        <ButtonRow
          buttons={[
            {
              label: "Like",
              onPress: () => {
                /* handle like */
              },
            },
          ]}
        />
      </Card>
    </ThemedView>
  );
}

export const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    gap: 8
  },
  icon: {
    marginRight: 8
  },
  sectionHeading: {
    borderTopWidth:1,
    paddingTop: 4,
    paddingBottom: 8
  },
  tagContainer: {
    gap: 4
  }
});
