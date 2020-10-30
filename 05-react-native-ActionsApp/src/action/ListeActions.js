import React from "react";
import { View, Text } from "react-native";
import AucuneAction from "./AucuneAction";
import UneAction from "./UneAction";

const ListeActions = ({ actions, onTerm, onDel }) => {
  return (
    <View>
      {actions && actions.length > 0 ? (
        actions.map((e) => (
          <UneAction action={e} onTerm={onTerm} onDel={onDel} />
        ))
      ) : (
        <AucuneAction />
      )}
    </View>
  );
};

export default ListeActions;
