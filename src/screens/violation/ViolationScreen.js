// src/screens/Violation/ViolationScreen.js
import { View, Button, ScrollView, Alert, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import ViolationItem from "../../components/ViolationItem";

export default function ViolationScreen() {
  const [items, setItems] = useState([{ id: Date.now() }]);

  const addItem = () => {
    setItems(prev => [...prev, { id: Date.now() }]);
  };

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const submit = () => {
    console.log("SUBMIT DATA:", items);
    Alert.alert("Thành công", "Đã gửi dữ liệu (fake)");
  };

  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Vi Phạm ⚖️</Text>
      </View>

      <ScrollView>
        {items.map((item, index) => (
          <ViolationItem
            key={item.id}
            index={index + 1}
            id={item.id}
            onDelete={deleteItem}
            onChange={(data) => {
              setItems(prev =>
                prev.map(i => i.id === item.id ? { ...i, ...data } : i)
              );
            }}
          />
        ))}
      </ScrollView>

      {/* Add box */}
      <View style={styles.addBox}>
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={{ fontSize: 28, color: "#fff" }}>＋</Text>
        </TouchableOpacity>
      </View>

      {/* Submit */}
      <TouchableOpacity style={styles.submitBtn} onPress={submit}>
        <Text style={styles.submitText}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF6FF",
    padding: 16,
  },

  header: {
    backgroundColor: "#4DB3FF",
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  headerText: {
    color: "red",
    fontSize: 22,
    fontWeight: "bold",
  },

  addBox: {
    backgroundColor: "#4DB3FF",
    borderRadius: 16,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },

  addButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#7EE0C3",
    alignItems: "center",
    justifyContent: "center",
  },

  submitBtn: {
    alignSelf: "flex-end",
    backgroundColor: "#FFC83D",
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 20,
  },

  submitText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
