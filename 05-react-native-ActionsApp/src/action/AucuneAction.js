import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * Composant représentant une action.
 *
 * TODO modifier le code pour afficher le titre de l'action et les boutons associés.
 */

const AucuneAction = () => (
  <View style={styles.conteneurPasDAction}>
    <Text style={styles.textePasDAction}>Aucune action à l'horizon !</Text>
  </View>
);

const styles = StyleSheet.create({
  conteneurPasDAction: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: "#ffffff",
    paddingTop: 20,
    paddingBottom: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000000",
    borderRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    flexDirection: "row",
    alignItems: "center",
  },
  textePasDAction: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 17,
  },
});
export default AucuneAction;
