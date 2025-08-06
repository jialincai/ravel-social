import { FlatList } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Event } from "@/types";
import { getEvents, updateEventStatus } from "@/types/dummy/eventsDb";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Row } from "@/components/Row";
import { Card } from "@/components/Card";
import { ButtonRow } from "@/components/ButtonRow";
import { ClipboardText } from "@/components/ClipboardText";
import { styles, formatEventDate, CURRENT_USER_ID } from ".";

export default function UpcomingScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const [events, setEvents] = useState<Event[]>([]);

  useFocusEffect(
    useCallback(() => {
      const allEvents = getEvents();
      const filtered = allEvents.filter((event) =>
        event.users.some(
          (u) =>
            u.user.id === CURRENT_USER_ID &&
            (u.status === "yes" || u.status === "maybe"),
        ),
      );
      setEvents(filtered);
    }, []),
  );

  const handleResponse = (eventId: string, status: "yes" | "maybe" | "no") => {
    updateEventStatus(eventId, CURRENT_USER_ID, status);
    const allEvents = getEvents();
    const filtered = allEvents.filter((event) =>
      event.users.some(
        (u) =>
          u.user.id === CURRENT_USER_ID &&
          (u.status === "yes" || u.status === "maybe"),
      ),
    );
    setEvents(filtered);
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const currentUser = item.users.find(
            (u) => u.user.id === CURRENT_USER_ID,
          );
          const currentStatus = currentUser?.status;

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
                selected={currentStatus}
                buttons={[
                  {
                    id: "yes",
                    label: "Yes",
                    onPress: () => handleResponse(item.id, "yes"),
                  },
                  {
                    id: "maybe",
                    label: "Maybe",
                    onPress: () => handleResponse(item.id, "maybe"),
                  },
                  {
                    id: "no",
                    label: "No",
                    onPress: () => handleResponse(item.id, "no"),
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
