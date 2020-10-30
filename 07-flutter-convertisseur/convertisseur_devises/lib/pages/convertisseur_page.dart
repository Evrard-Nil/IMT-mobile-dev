import 'package:convertisseur_devises/models/devise.dart';
import 'package:convertisseur_devises/styles.dart';
import 'package:convertisseur_devises/widgets/liste_devises.dart';
import 'package:convertisseur_devises/widgets/saisie_nombre.dart';
import 'package:flutter/material.dart';

class ConvertisseurDevisePage extends StatefulWidget {
  ConvertisseurDevisePage();
  @override
  State<StatefulWidget> createState() => _ConvertisseurDevisePage();
}

class _ConvertisseurDevisePage extends State<ConvertisseurDevisePage> {
  // les différents "états" de la page
  double _valeur; // valeur saisie
  Devise _deviseInitiale; // devise initiale sélectionnée
  Devise _deviseFinale; // devise finale sélectionnée
  double _resultat; // le résultat de la conversion
  // définition des valeurs initiales
  @override
  void initState() {
    super.initState();
    _valeur = 0;
    _resultat = 0;
    _deviseInitiale = Devise.EURO;
    _deviseFinale = Devise.DOLLAR;
  }

  void updateRes() {
    _resultat = _deviseInitiale.convert(_valeur, _deviseFinale);
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      children: [
        Spacer(),
        Text('Valeur', style: AppStyle.labelStyle),
        Spacer(),
        SaisieNombre(onValChanged: _onValChanged),
        Spacer(),
        Text('De', style: AppStyle.labelStyle),
        Spacer(),
        Listedevises(
          value: _deviseInitiale,
          onChanged: (newVal) {
            setState(() {
              _deviseInitiale = newVal;
              updateRes();
            });
          },
        ),
        Spacer(),
        Text('Vers', style: AppStyle.labelStyle),
        Spacer(),
        Listedevises(
          value: _deviseFinale,
          onChanged: (newVal) {
            setState(() {
              _deviseFinale = newVal;
              updateRes();
            });
          },
        ),
        Spacer(flex: 2),
        ElevatedButton(onPressed: () => true, child: Text('Convertir')),
        Spacer(flex: 2),
        Text(_resultat.toString(), style: AppStyle.labelStyle),
        Spacer(),
      ],
    ));
  }

  void _onValChanged(newVal) {
    setState(() {
      _valeur = double.parse(newVal);
      updateRes();
    });
  }
}
