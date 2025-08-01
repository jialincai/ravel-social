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
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { Row } from "@/components/Row";

type Item = { id: string; raw_text: string };

export default function InboxScreen() {
  const inputRef = useRef<TextInput>(null);
  const [items, setItems] = useState<Item[]>([]);

  const handleSubmit = useCallback((raw_text: string) => {
    const text = raw_text.trim();
    if (!text) return;

    setItems((prev) => [...prev, { id: uuidv7(), raw_text: text }]);

    inputRef.current?.clear();
  }, []);

  const handleDelete = useCallback((delete_id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== delete_id));
  }, []);

  return (
    <ThemedView style={styles.container}>
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
              <ThemedText style={styles.deleteButton}>✕</ThemedText>
            </Pressable>
          </Row>
        )}
      />
    </ThemedView>
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
  deleteButton: {
    paddingHorizontal: 10,
    color: "red",
  },
});
