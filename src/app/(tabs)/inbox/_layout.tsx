import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useColorScheme } from "react-native";
import ForYouScreen from "./for-you";
import InviteScreen from "./invite";
import UpcomingScreen from "./upcoming";
import { Colors } from "@/constants/Colors";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";

const Tab = createMaterialTopTabNavigator();

export default function InboxLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const {
    tabIconDefault: inactiveTintColor,
    tabIconSelected: activeTintColor,
  } = Colors[colorScheme];

  return (
    <ThemedSafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: inactiveTintColor,
          tabBarActiveTintColor: activeTintColor,
          tabBarIndicatorStyle: { backgroundColor: activeTintColor },
        }}
      >
        <Tab.Screen name="For You" component={ForYouScreen} />
        <Tab.Screen name="Invites" component={InviteScreen} />
        <Tab.Screen name="Upcoming" component={UpcomingScreen} />
      </Tab.Navigator>
    </ThemedSafeAreaView>
  );
}
