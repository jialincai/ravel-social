import { useRef, useState } from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  StyleSheet,
  TextInput,
} from "react-native";
import { uuidv7 } from "uuidv7";
import { Bullet } from "@/components/Bullet";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedTextInput } from "@/components/ThemedTextInput";

type Item = { id: string; raw_text: string };

export default function InboxScreen() {
  const inputRef = useRef<TextInput>(null);
  const [items, setItems] = useState<Item[]>([]);

  function handleSubmit(
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) {
    const text = e.nativeEvent.text.trim();
    if (text.length === 0) return;

    const newItem = {
      id: uuidv7(),
      raw_text: text,
    };

    setItems((prev) => [...prev, newItem]);
    inputRef.current?.clear();
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Got an idea for a good time? Drop it here.
      </ThemedText>
      <ThemedTextInput
        ref={inputRef}
        placeholder="I want to..."
        placeholderTextColor="gray"
        onSubmitEditing={handleSubmit}
        style={styles.input}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Bullet style={styles.bullet}>
            <ThemedTextInput>{item.raw_text}</ThemedTextInput>
          </Bullet>
        )}
        contentContainerStyle={styles.list}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  title: {
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  list: {
    paddingTop: 12,
  },
  bullet: {
    marginBottom: 8,
  },
});
