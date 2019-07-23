---
layout: default
title: A Deep Dive into Flutter Drawer
parent: Material Components
nav_order: 3
permalink: /flutter-drawer/
menu_title: Drawer
image: /assets/images/cover/flutter-drawer-tutorial.jpg
comments: true
file: flutter-drawer
---

<img src="/assets/images/cover/flutter-drawer-tutorial.jpg">

# Deep Dive into Flutter Drawer

Thinking about creating sidemenu or drawer for your flutter application? Let's do that

    flutter create flutterdemo
    cd flutterdemo

Let's work with `main.dart`

```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: MyApp()));

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text("FlutterOwl"), backgroundColor: Colors.lightBlue[900]),
      drawer: Drawer(
          child: ListView(
        children: <Widget>[
          ListTile(
            leading: CircleAvatar(backgroundImage:  NetworkImage("https://flutterowl.com/flutterowl.png")),
            title: Text("FlutterOWl"),
            subtitle: Text("flutterowl9@gmail.com"),
          ),
          ListTile(leading: Icon(Icons.home), title: Text("Home")),
          ListTile(leading: Icon(Icons.grid_on), title: Text("Products")),
          ListTile(leading: Icon(Icons.contacts), title: Text("Contact Us")),
        ],
      )),
    );
  }
}

```

**Explanation:**

-  We can create drawer using `drawer` property from `Scafold`. If you want to show drawer in right side, you need to user `endDrawer`
- These properties are required `Drawer()` Widget
- This example we have create a menu using ListView and ListTile


### Screenshots

<img src="/assets/images/screenshots/components/flutter-drawer-example1.png"> <img src="/assets/images/screenshots/components/flutter-drawer-example2.png">