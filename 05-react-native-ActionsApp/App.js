import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Entete from "./src/Entete";
import Saisie from "./src/Saisie";
import BoutonCreer from "./src/BoutonCreer";
import ListeActions from "./src/action/ListeActions";
import Menu from "./src/menu/Menu";

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {
  // état global de l'application
  // il y aura probalement d'autres informations à stocker
  state = {
    texteSaisie: "",
    actions: [],
    selectedMenu: 0,
  };

  /**
   * Méthode invoquée lorsque que l'utilisateur appuie sur le bouton terminer
   *
   * @param action le nom de l'action
   */
  onTerminated(action) {
    console.log("here");
    this.setState({
      actions: this.state.actions.map((a) => {
        if (a.titre == action) {
          a.isTerminated = !a.isTerminated;
        }
        return a;
      }),
    });
  }

  /**
   * Méthode invoquée lorsque que l'utilisateur appuie sur le bouton delete
   *
   * @param action le nom de l'action
   */
  onDelete(action) {
    console.log("here2");
    var newActions = this.state.actions.filter((a) => a.titre != action);
    this.setState({
      actions: newActions,
    });
  }

  /**
   * Méthode invoquée lorsque que la saisie change.
   *
   * @param nouvelleSaisie la valeur saisie
   */
  quandLaSaisieChange(nouvelleSaisie) {
    this.setState({ texteSaisie: nouvelleSaisie });
  }

  /**
   * Méthode invoquée lors du clic sur le bouton `Valider`.
   */
  validerNouvelleAction() {
    console.log("Vous avez cliqué sur Valider !");
    if (this.state.texteSaisie) {
      console.log("Création d'une nouvelle action");
      this.setState({
        actions: [
          {
            titre: this.state.texteSaisie,
            isTerminated: false,
          },
          ...this.state.actions,
        ],
        texteSaisie: "",
      });
    }
  }

  /**
   * Méthode invoquée lorsque que l'utilisateur clique sur un menu
   *
   * @param index la valeur sélectionnée
   */
  onSelectMenu(index) {
    this.setState({ selectedMenu: index });
  }

  render() {
    const { texteSaisie, actions, selectedMenu } = this.state;

    var activeActions = actions.filter((a) => !a.isTerminated);
    var terminatedActions = actions.filter((a) => a.isTerminated);
    var actionsList = [actions, activeActions, terminatedActions];

    var onTerm = (action) => this.onTerminated(action);
    var onDel = (action) => this.onDelete(action);
    var onSelMenu = (index) => this.onSelectMenu(index);

    return (
      <View style={styles.conteneur}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Entete />
          <Saisie
            texteSaisie={texteSaisie}
            evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}
          />
          <ListeActions
            actions={actionsList[selectedMenu]}
            onTerm={onTerm}
            onDel={onDel}
          />
          <BoutonCreer onValider={() => this.validerNouvelleAction()} />
        </ScrollView>
        <Menu currentMenu={selectedMenu} onSelect={onSelMenu} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
