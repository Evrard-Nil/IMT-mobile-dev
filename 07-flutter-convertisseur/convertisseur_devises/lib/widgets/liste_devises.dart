import 'package:convertisseur_devises/models/devise.dart';
import 'package:flutter/material.dart';

class Listedevises extends StatelessWidget {
  const Listedevises({Key key, @required this.onChanged, @required this.value})
      : super(key: key);
  final Function onChanged;
  final Devise value;

  @override
  Widget build(BuildContext context) {
    return DropdownButton(
      isExpanded: true,
      onChanged: onChanged,
      value: value,
      hint: Text('Choisir une devise'),
      items: [
        for (var devise in Devise.values)
          DropdownMenuItem<Devise>(
            child: Text(devise.libelle),
            value: devise,
          ),
      ],
    );
  }
}
