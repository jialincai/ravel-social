import { FlatList } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Row } from "@/components/Row";
import { Card } from "@/components/Card";
import { ButtonRow } from "@/components/ButtonRow";
import { ClipboardText } from "@/components/ClipboardText";
import { dummyEvents } from "@/types/dummy/events";

import { styles } from "@/app/(tabs)/inbox/index";

// Helper: format date/time to "Saturday August 12, 12:00PM-3:00PM"
function formatEventDate(isoString: string) {
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

export default function InviteScreen() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView style={{flex:1}}>
      <FlatList
        data={dummyEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card style={styles.card}>
              <ThemedView>
                <ThemedText type="subtitle">{item.raw_text}</ThemedText>
                <Row>
                  <IconSymbol
                    name="mappin.and.ellipse"
                    size={20}
                    color={Colors[colorScheme].icon}
                    style={styles.icon}
                  />
                  <ThemedText>{item.location.address}</ThemedText>
                </Row>
                <Row>
                  <IconSymbol
                    name="clock.fill"
                    size={20}
                    color={Colors[colorScheme].icon}
                    style={styles.icon}
                  />
                  <ThemedText>
                    {formatEventDate(item.scheduled_time)}
                  </ThemedText>
                </Row>
              </ThemedView>
              <ThemedView>
                <Row
                  style={[
                    styles.sectionHeading,
                    { borderColor: Colors[colorScheme].icon },
                  ]}
                >
                  <IconSymbol
                    name="person.2.fill"
                    size={20}
                    color={Colors[colorScheme].icon}
                    style={styles.icon}
                  />
                  <ThemedText type="subtitle">Party</ThemedText>
                </Row>
                <ClipboardText invitees={item.users.map((u) => u.user)} />
              </ThemedView>
              <ButtonRow
                buttons={[
                  {
                    label: "Yes",
                    onPress: () => {
                      // handle yes for item.id
                    },
                  },
                  {
                    label: "Maybe",
                    onPress: () => {
                      // handle maybe for item.id
                    },
                  },
                  {
                    label: "No",
                    onPress: () => {
                      // handle no for item.id
                    },
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
