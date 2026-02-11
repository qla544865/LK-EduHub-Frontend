import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useAuthStore } from "../../store/authStore";

export default function MenuScreen({ navigation }) {
  const logout = useAuthStore(state => state.logout);

  const menus = [
    { title: "User", screen: "User" },
    { title: "Thi đua", screen: "Ranking" },
    { title: "Điểm\ndanh", screen: "Attendance" },
    { title: "Vi\nphạm", screen: "Violation" },
    { title: "Thông\nbáo", screen: "Notification" },
    { title: "Xếp\nloại", screen: "Behavior" },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.grid}>
          {menus.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    padding: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "47%",
    height: 150,
    backgroundColor: "#BFE3FF",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#2f889c",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  cardText: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
});
