---
layout: default
title: Flutter AppBar
parent: Material Components
nav_order: 1
permalink: flutter-appbar
menu_title: AppBar
image: assets/images/cover/flutter-appbar-tutorial.jpg
comments: true
file: flutter-appbar
---

<img src="assets/images/cover/flutter-appbar-tutorial.jpg">

# Deep Dive into Flutter AppBar 

This tutorial, we're going to work with flutter AppBar. To do that, first we need to create a new project

    flutter create flutterdemo
    cd flutterdemo

Next, we can edit our `main.dart` as follows

```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: MyApp()));

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("FlutterOwl"),
        centerTitle: true,
        backgroundColor: Colors.lightBlue[900],
        leading: Icon(Icons.menu),
        actions: <Widget>[
          Icon(Icons.notifications),
          Icon(Icons.more_vert)
        ],
      ),
    );
  }
}
```
**Explanation:**

- We created AppBar with centered title & leading and action buttons
- We can also change background color of appbar using `backgroundColor` property

## Screenshot

<img src="/assets/images/screenshots/components/flutter-appbar-example.png">