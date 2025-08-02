import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { User } from "@/types";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Row } from "@/components/Row";
import { Card } from "@/components/Card";
import { ButtonRow } from "@/components/ButtonRow";

export default function ForYouScreen() {
  const colorScheme = useColorScheme() ?? "light";

  // Example invitee list; replace with real user data
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
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <ThemedText type="subtitle">See Wicked on Broadway</ThemedText>
        <Row>
          <IconSymbol
            name="mappin.and.ellipse"
            size={18}
            color={Colors[colorScheme].text}
            style={{ marginRight: 6 }}
          />
          <ThemedText>
            222 West 51st Street, New York, NY, USA, 10019
          </ThemedText>
        </Row>
        <Row>
          <IconSymbol
            name="person.2.fill"
            size={18}
            color={Colors[colorScheme].text}
            style={{ marginRight: 6 }}
          />
          <ThemedText>{party.map((i) => i.display_name).join(", ")}</ThemedText>
        </Row>
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
