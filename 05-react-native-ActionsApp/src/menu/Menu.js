import React from "react";
import { View, StyleSheet } from "react-native";
import OptionMenu from "./OptionMenu";
const allMenus = ["Toutes", "Actives", "Terminées"];

/**
 * Composant Menu.
 */
const Menu = ({ currentMenu, onSelect }) => (
  <View style={styles.menu}>
    {allMenus.map((name, index) => (
      <OptionMenu
        key={name}
        titre={name}
        isSelected={currentMenu == index}
        onSelect={() => onSelect(index)}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  menu: {
    height: 70,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
});
export default Menu;
