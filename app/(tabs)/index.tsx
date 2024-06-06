import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [text, setText] = useState("Начальный текст");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Button
        title="Изменить текст"
        onPress={() =>
          setText(
            text == "Начальный текст" ? "Текст изменен!" : "Начальный текст"
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
