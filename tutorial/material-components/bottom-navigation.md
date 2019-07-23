---
layout: default
title: A Complete Guide to Flutter Bottom Navigation Bar
parent: Material Components
nav_order: 5
permalink: flutter-bottom-nativigation
menu_title: Bottom Navigation
image: assets/images/cover/flutter-bottom-navigation-tutorial.jpg
comments: true
file: flutter-bottom-navigation
---

<img src="assets/images/cover/flutter-bottom-navigation-tutorial.jpg">

# A Complete Guide to Flutter Bottom Navigation Bar

Let's explore, how to work with bottom navigation bar with flutter.

    flutter create flutterdemo
    cd flutterdemo

Now, we need work with our `main.dart`

```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: MyApp()));

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int _selectedTabIndex = 0;

  List _pages = [
    Text("Home"),
    Text("Search"),
    Text("Account"),
  ];

  _changeIndex(int index) {
    setState(() {
      _selectedTabIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text("FlutterOwl"), backgroundColor: Colors.lightBlue[900]),
      body: Center(child: _pages[_selectedTabIndex]),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedTabIndex,
        onTap: _changeIndex,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), title: Text("Home")),
          BottomNavigationBarItem(
              icon: Icon(Icons.search), title: Text("Search")),
          BottomNavigationBarItem(
              icon: Icon(Icons.account_circle), title: Text("My Account")),
        ],
      ),
    );
  }
}
```

**Explanation:**

- To display bottom navigation, we have to use `bottomNavigationBar` property with Scaffold
- `BottomNavigationBar()` requires items where you can use `BottomNavigationBarItem()`. When user clicks any Tab, we're calling `_changeIndex` to update `_selectedTabIndex`. 
- Based on `_selectedTabIndex` we're displaying required widgets using `_pages[_selectedTabIndex]` in body

Note: you can create separate page & pass that widget into `_pages`


### Screenshot

<img src="/assets/images/screenshots/components/flutter-bottom-navigation-example1.png"> <img src="/assets/images/screenshots/components/flutter-bottom-navigation-example2.png"> <img src="/assets/images/screenshots/components/flutter-bottom-navigation-example3.png">
