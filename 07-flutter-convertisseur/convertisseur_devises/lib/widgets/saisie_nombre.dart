import 'package:convertisseur_devises/styles.dart';
import 'package:flutter/material.dart';

class SaisieNombre extends StatelessWidget {
  final Function onValChanged;

  const SaisieNombre({Key key, @required this.onValChanged}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextField(
      style: AppStyle.inputStyle,
      onChanged: onValChanged,
    );
  }
}
