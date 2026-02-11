// RankingScreen.js
import { View, Text, FlatList, ActivityIndicator, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import RankingItem from "../../components/RankingItem";

const mockData = [
  { id: 1, name: "11B12", week: 36, month: 430, semester: 800, year: 2100, streak: 3 },
  { id: 2, name: "12A5", week: 67, month: 380, semester: 700, year: 1800, streak: 0 },
  { id: 3, name: "10C5", week: 110, month: 500, semester: 900, year: 2500, streak: 5 },
];

function calculateRanks(data, mode) {
  const sorted = [...data].sort((a, b) => b[mode] - a[mode]);

  let ranks = [];
  let currentRank = 1;

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i][mode] < sorted[i - 1][mode]) {
      currentRank = i + 1;
    }

    ranks.push({
      ...sorted[i],
      rank: currentRank,
    });
  }

  return ranks;
}

export default function RankingScreen() {
  const [mode, setMode] = useState("week");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch("https://api.com");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.log("NON OF DATA");
      setData(mockData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  const rankedData = calculateRanks(data, mode);
  const sorted = [...data].sort((a, b) => b[mode] - a[mode]);

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#f2f7ff" }}>
      
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Thi Đua 🏆</Text>

        <View
          style={{
            marginLeft: "auto",
            borderWidth: 1,
            borderRadius: 10,
            width: 150,
          }}
        >
          <Picker selectedValue={mode} onValueChange={setMode}>
            <Picker.Item label="Tuần" value="week" />
            <Picker.Item label="Tháng" value="month" />
            <Picker.Item label="Học kỳ" value="semester" />
            <Picker.Item label="Cả năm" value="year" />
          </Picker>
        </View>
      </View>

      {/* Table */}
      <View
        style={{
          flex: 1,
          marginTop: 10,
          backgroundColor: "#fff",
          borderRadius: 20,
          borderWidth: 3,
          borderColor: "#3fa9ff",
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", borderBottomWidth: 1 }}>
          <Text style={styles.header}>Xếp hạng</Text>
          <Text style={styles.header}>Lớp</Text>
          <Text style={styles.header}>Tổng điểm</Text>
        </View>

        <FlatList
            data={rankedData}
            keyExtractor={i => i.id.toString()}
            renderItem={({ item }) => (
              <RankingItem item={item} mode={mode} />
            )}
          />
      </View>
    </View>
  );
}

const styles = {
  header: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "orange",
    paddingVertical: 6,
  },
};
