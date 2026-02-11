// src/components/ViolationItem.js
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function AbsentItem({ id, onDelete, index }) {
  const [lop, setLop] = useState("--Lớp--");
  const [lydo, setLyDo] = useState("")
  const [trangThai, setTrangThai] = useState("--Trạng thái--")
  const [name, setName] = useState("")

  return (
    <View style={styles.wrapper}>
      {/* Left */}
      <View style={styles.left}>
        <View style={styles.select}>
          <Picker selectedValue={lop} onValueChange={setLop}>
            <Picker.Item label="10C1" value="10C1" />
            <Picker.Item label="10C2" value="10C2" />
            <Picker.Item label="10C3" value="10C3" />
          </Picker>
        </View>

        <View style={styles.select}>
          <Picker selectedValue={trangThai} onValueChange={setTrangThai}>
            <Picker.Item label="Phép" value="Phép" />
            <Picker.Item label="Không Phép" value="Không Phép" />
            <Picker.Item label="Không rõ" value="Không rõ" />
          </Picker>
        </View>

        <View style={styles.select}>
          <TextInput
            placeholder="Họ và tên"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>
        

        <View style={styles.select}>
          <TextInput
            placeholder="Lý do"
            value={lydo}
            onChangeText={setLyDo}
            style={styles.input}
          />
        </View>
      </View>

      {/* Right */}
      <View style={styles.right}>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Text style={styles.delete}>✕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#4DB3FF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
  },

  left: {
    flex: 1,
    gap: 8,
  },

  select: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 8,
    justifyContent: "center",
    height: 40,
    width:250
  },

  input: {
    paddingHorizontal: 10,
    height: 40,
  },

  right: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  uploadBox: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  delete: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
});
