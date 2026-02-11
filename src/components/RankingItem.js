// src/components/RankingItem.js
import { View, Text } from "react-native";

export default function RankingItem({ item, mode }) {
  return (
    <View style={{ flexDirection: "row", paddingVertical: 10, borderBottomWidth: 1, borderStyle: "dashed" }}>
      <Text style={{ flex: 1, textAlign: "center" }}>
        #{item.rank}
      </Text>
      <Text style={{ flex: 1, textAlign: "center" }}>
        {item.name}
      </Text>
      <Text style={{ flex: 1, textAlign: "center" }}>
        {item[mode]}
      </Text>
    </View>
  );
}
