---
layout: default
title: A Deep Dive into Flutter Floating Action Button
parent: Material Components
nav_order: 2
permalink: /flutter-floating-action-button/
menu_title: Floating Action Button
image: assets/images/cover/flutter-floating-action-button-tutorial.jpg
comments: true
file: flutter-fab
---

<img src="assets/images/cover/flutter-floating-action-button-tutorial.jpg">

# Deep Dive into Flutter Floating Action Button (FAB)

This tutorial, we're going to working with Flutter Floating Action Button (FAB). To work with that, we need to create new flutter project

    flutter create flutterdemo
    cd flutter demo

Now, let's work with our `main.dart` file

### Floating Action Button Example 1

Let's create FAB with Simple Icon

```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: MyApp()));

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("FlutterOwl"),
        backgroundColor: Colors.lightBlue[900],
      ),
      body: Center(child: Text("Floating Action Button")),
      
      
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.orange,
        child: Icon(Icons.search),
        onPressed: () {},
      ),
    );
  }
}
```

### Output
<img src="/assets/images/screenshots/components/flutter-floating-action-example1.png">

---

### Floating Action Button Example 2

Let's create a FAB with Text & Icon

```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: MyApp()));

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("FlutterOwl"),
        backgroundColor: Colors.lightBlue[900],
      ),
      body: Center(child: Text("Floating Action Button")),

      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: Colors.orange,
        icon: Icon(Icons.search),
        label: Text("Search"), 
        onPressed: () {},
      ),

    );
  }
}
```

### Output

<img src="/assets/images/screenshots/components/flutter-floating-action-example2.png">