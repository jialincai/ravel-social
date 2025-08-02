import { User } from "@/types";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Row } from "@/components/Row";
import { Card } from "@/components/Card";
import { ButtonRow } from "@/components/ButtonRow";
import { ClipboardText } from "@/components/ClipboardText";

import { styles } from "@/app/(tabs)/inbox/index";

export default function InviteScreen() {
  const colorScheme = useColorScheme() ?? "light";

  // Example invitee list; replace with real user data
  const invitees: User[] = [
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
          <ThemedText type="subtitle">Visit the MOMA</ThemedText>
          <Row>
            <IconSymbol
              name="mappin.and.ellipse"
              size={20}
              color={Colors[colorScheme].icon}
              style={styles.icon}
            />
            <ThemedText>11 W 53rd St, New York, NY 10019</ThemedText>
          </Row>
          <Row>
            <IconSymbol
              name="clock.fill"
              size={20}
              color={Colors[colorScheme].icon}
              style={styles.icon}
            />
            <ThemedText>Saturday August 12, 12:00PM-3:00PM</ThemedText>
          </Row>
        </ThemedView>
        <ThemedView>
          <Row style={[styles.sectionHeading, { borderColor: Colors[colorScheme].icon}]}>
            <IconSymbol
              name="person.2.fill"
              size={20}
              color={Colors[colorScheme].icon}
              style={styles.icon}
            />
            <ThemedText type="subtitle" >Party</ThemedText>
          </Row>
          <ClipboardText invitees={invitees} />
        </ThemedView>
        <ButtonRow
          buttons={[
            {
              label: "Yes",
              onPress: () => {
                /* handle yes */
              },
            },
            {
              label: "Maybe",
              onPress: () => {
                /* handle maybe */
              },
            },
            {
              label: "No",
              onPress: () => {
                /* handle no */
              },
            },
          ]}
        />
      </Card>
    </ThemedView>
  );
}
