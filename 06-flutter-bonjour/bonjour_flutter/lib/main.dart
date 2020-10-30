import 'package:flutter/material.dart';

void main() => runApp(MonApplication());

const picUrl =
    'https://images.unsplash.com/photo-1549271456-0c1e6f59ab66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

class MonApplication extends StatelessWidget {
  static const lightPurple = Color(0xFFb74093);
  static const myStyle = const TextStyle(
    color: lightPurple,
  );

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Bonjour App'),
          backgroundColor: lightPurple,
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Container(),
              Text(
                'Bonjour',
                style: myStyle.copyWith(
                  fontSize: 40,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text('Je suis END', style: myStyle.copyWith(fontSize: 30)),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Image.network(picUrl, height: 350),
              ),
              ContactMeButton(lightPurple: lightPurple)
            ],
          ),
        ),
      ),
    );
  }
}

class ContactMeButton extends StatelessWidget {
  const ContactMeButton({
    Key key,
    @required this.lightPurple,
  }) : super(key: key);

  final Color lightPurple;

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      onPressed: () {
        showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text('Contactez-moi'),
              content: Text('Je suis joignable à l\'IMT Atlantique'),
            );
          },
        );
      },
      color: lightPurple,
      shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(
        Radius.circular(30),
      )),
      child: Text('Contactez moi'),
    );
  }
}
