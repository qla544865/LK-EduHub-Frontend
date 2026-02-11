// src/screens/menu/MenuScreen.js
import { View, Text, TouchableOpacity } from "react-native";

export default function MenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity onPress={() => navigation.navigate("Attendance")}>
        <Text>Điểm danh</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Ranking")}>
        <Text>Thi đua</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Violation")}>
        <Text>Vi phạm</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Behavior")}>
        <Text>Đánh giá hạnh kiểm</Text>
      </TouchableOpacity>
    </View>
  );
}
