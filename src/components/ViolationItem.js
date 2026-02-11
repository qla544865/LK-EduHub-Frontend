// src/components/ViolationItem.js
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function ViolationItem({ id, onDelete, index }) {
  const [khoi, setKhoi] = useState("--Khối--");
  const [lop, setLop] = useState("--Lớp--");
  const [loivipham, setLoiViPham] = useState("--Vi Phạm--");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.wrapper}>
      {/* Left */}
      <View style={styles.left}>
        <View style={styles.select}>
          <Picker selectedValue={khoi} onValueChange={setKhoi}>
            <Picker.Item label="Khối 10" value="10" />
            <Picker.Item label="Khối 11" value="11" />
            <Picker.Item label="Khối 12" value="12" />
          </Picker>
        </View>

        <View style={styles.select}>
          <Picker selectedValue={lop} onValueChange={setLop}>
            <Picker.Item label="10C1" value="10C1" />
            <Picker.Item label="10C2" value="10C2" />
            <Picker.Item label="10C3" value="10C3" />
          </Picker>
        </View>

        <View style={styles.select}>
          <Picker selectedValue={loivipham} onValueChange={setLoiViPham}>
            <Picker.Item label="Đi trễ" value="Đi trễ" />
            <Picker.Item label="Không phù hiệu" value="Không phù hiệu" />
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
      </View>

      {/* Right */}
      <View style={styles.right}>
        <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={{ fontSize: 22 }}>📄</Text>
          )}
        </TouchableOpacity>

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
    width:200
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
