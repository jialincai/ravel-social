import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEventData,
} from "react-native";
import { uuidv7 } from "uuidv7";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Input } from "@/types";
import { dummyInputs } from "@/types/dummy/inputs";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import { Row } from "@/components/Row";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? "light";

  const inputRef = useRef<TextInput>(null);
  const [items, setItems] = useState<Input[]>(dummyInputs);

  const handleSubmit = useCallback((raw_text: string) => {
    const text = raw_text.trim();
    if (!text) return;

    setItems((prev) => [
      ...prev,
      {
        id: uuidv7(),
        user_id: "dummy_data",
        raw_text: text,
        created_at: new Date().toISOString(),
        processed: false,
      },
    ]);

    inputRef.current?.clear();
  }, []);

  const handleDelete = useCallback((delete_id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== delete_id));
  }, []);

  return (
    <ThemedSafeAreaView style={styles.container}>
      <ThemedText type="subtitle" style={styles.title}>
        Got an idea for a good time?
      </ThemedText>
      <ThemedTextInput
        ref={inputRef}
        placeholder="I want to..."
        placeholderTextColor="gray"
        onSubmitEditing={(
          e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
        ) => handleSubmit(e.nativeEvent.text)}
        style={styles.input}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Row>
            <ThemedText style={styles.bullet}>• {item.raw_text}</ThemedText>
            <Pressable onPress={() => handleDelete(item.id)}>
              <IconSymbol
                name="trash.fill"
                size={20}
                color={Colors[colorScheme].icon}
                style={styles.delete}
              />
            </Pressable>
          </Row>
        )}
      />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  list: {
    paddingTop: 40,
    gap: 8,
  },
  bullet: {
    flex: 1,
  },
  delete: {
    paddingHorizontal: 10,
  },
});
