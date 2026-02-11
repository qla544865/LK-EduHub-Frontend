// ViolationItem.styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  selectText: {
    fontSize: 14,
  },

  right: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  uploadBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
