import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

/**
 * Composant représentant une option de menu.
 *
 *
 *
 */
const OptionMenu = ({ titre, isSelected, onSelect }) => (
  <TouchableHighlight
    underlayColor="#efefef"
    onPress={() => onSelect()}
    style={[styles.item, styles.selected, styles.border, styles.selected]}
  >
    <Text style={[styles.itemText, isSelected ? styles.bold : styles.normal]}>
      {titre}
    </Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: "#dddddd",
  },
  itemText: {
    color: "#777777",
    fontSize: 16,
  },
  selected: {
    backgroundColor: "#ffffff",
  },
  bold: {
    fontWeight: "bold",
  },
  normal: {
    fontWeight: "normal",
  },
});
export default OptionMenu;
