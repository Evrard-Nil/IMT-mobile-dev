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

  /// Converti la [_valeur] de [_deviseInitiale] à [_deviseFinale]
  void convert() {
    setState(() {
      _resultat = _deviseInitiale.convert(_valeur, _deviseFinale);
    });
  }

  /// Invoqué lorsque l'utisateur tape uen valeur
  void _onValChanged(String newVal) {
    setState(() => _valeur = double.parse(newVal));
  }

  /// Invoqué lorsque l'utilisateur change la valeur
  /// de la devise initiale
  void _updateDeviseFinale(Devise newVal) {
    setState(() => _deviseFinale = newVal);
  }

  /// Invoqué lorsque l'utilisateur change la valeur
  /// de la devise finale
  void _updateDeviseInit(Devise newVal) {
    setState(() => _deviseInitiale = newVal);
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
        Listedevises(value: _deviseInitiale, onChanged: _updateDeviseInit),
        Spacer(),
        Text('Vers', style: AppStyle.labelStyle),
        Spacer(),
        Listedevises(value: _deviseFinale, onChanged: _updateDeviseFinale),
        Spacer(flex: 2),
        ElevatedButton(onPressed: convert, child: Text('Convertir')),
        Spacer(flex: 2),
        Text(_resultat.toString(), style: AppStyle.labelStyle),
        Spacer(),
      ],
    ));
  }
}
