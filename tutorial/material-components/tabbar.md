---
layout: default
title: A Complete Guide to Flutter TabBar
parent: Material Components
nav_order: 4
permalink: flutter-tabbar
menu_title: TabBar
---

# A Complete Guide to Flutter TabBar

This tutorial, we're going to display TabBar with your flutter application. To do that, first we need to create a new project

    flutter create flutterdemo
    cd flutterdemo

Let's work with `main.dart`

```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: MyApp()));

class MyApp extends StatelessWidget {
  int _selectedTabIndex = 0;

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 4,
        child: Scaffold(
            appBar: AppBar(
              title: Text("FlutterOwl"),
              backgroundColor: Colors.lightBlue[900],
              bottom: TabBar(tabs: <Widget>[
                Tab(icon: Icon(Icons.photo_camera)),
                Tab(text: "Chats"),
                Tab(text: "Status"),
                Tab(text: "Calls")
              ]),
            ),
            body: TabBarView(
              children: <Widget>[
                Center(child: Text("camera")),
                Center(child: Text("Chats")),
                Center(child: Text("Status")),
                Center(child: Text("Calls")),
              ],
            )));
  }
}
```

**Explanation:**

- First we need include our `Scaffold()` inside `DefaultTabController()`, where `DefaultTabController()` controls tab clicks
- Now, we need to provide `TabBar()` with `AppBar(bottom:)` property which can hold childrens of `Tab()`
- In Scaffold body, we can use `TabBarView()` to display respective widget (you can also display pages)


### Screenshot

<img src="/assets/images/screenshots/components/flutter-tabbar-example1.png"> <img src="/assets/images/screenshots/components/flutter-tabbar-example2.png">