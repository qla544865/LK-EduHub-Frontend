// ViolationScreen.styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

  card: {
    backgroundColor: "#4DB3FF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },

  addBox: {
    backgroundColor: "#4DB3FF",
    borderRadius: 16,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },

  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#7EE0C3",
    alignItems: "center",
    justifyContent: "center",
  },

  submitBtn: {
    alignSelf: "flex-end",
    backgroundColor: "#FFC83D",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },

  submitText: {
    fontWeight: "bold",
    color: "#000",
  },
});
