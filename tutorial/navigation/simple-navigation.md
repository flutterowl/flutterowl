---
layout: default
title: Simple Routing
parent: Flutter Navigation & Routing
nav_order: 1
permalink: /simple-routing
menu_title: Simple Routing
---

# Simple Routing

### What you'll learn

- Navigating forward
- Navigating backward

### Getting Started

In flutter, there is a simple way to navigate between two pages. Yes, you can navigate between two pages with a single line.

Let's create new project

    flutter create navigate
    cd navigate

For navigation, we need to create two or more pages. I'm going to create three pages called `first.dart`, `second.dart`, `third.dart` inside **pages folder** (optional). Each Page is going to display a simple text and button on the center of the scaffold

`lib/pages/first.dart`

```dart
import 'package:flutter/material.dart';

class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("First Page")),
      body: Center(
        child: Column(children: <Widget>[
          Text("First Page"),
          RaisedButton(child: Text("Goto Page 2"), onPressed: () {
              // navigation code here
          })
        ]),
      ),
    );
  }
}
```
So, Each Page looks with different class name respectively.

We also need to update `MaterialApp( home: )` variable inside our `main.dart `

`lib/main.dart`

```dart
import 'package:flutter/material.dart';
import 'package:navigate/pages/first.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FirstPage(),
    );
  }
}
```
**Explanation:** We have imported firstpage and set `home:` variable to `FirstPage()`

Now, it's our turn to connect each pages using navigation or routing.

```dart
Navigator.push(context, MaterialPageRoute(builder: (context)=> PageName()));
```

Now, let's do the same with our example, so `first.dart` looks like


`lib/pages/first.dart`

```dart
import 'package:flutter/material.dart';
import 'package:navigate/pages/second.dart';

class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("First Page")),
      body: Center(
        child: Column(children: <Widget>[
          Text("First Page"),
          RaisedButton(child: Text("Goto Page 2"), onPressed: () {
            Navigator.push(context, MaterialPageRoute(builder: (context)=> SecondPage()));
          })
        ]),
      ),
    );
  }
}
```
Let's create a second page

`lib/pages/second.dart`

```dart
import 'package:flutter/material.dart';
import 'package:navigate/pages/third.dart';

class SecondPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Second Page")),
      body: Center(
        child: Column(children: <Widget>[
          Text("Second Page"),
          RaisedButton(child: Text("Goto Page 3"), onPressed: () {
            Navigator.push(context, MaterialPageRoute(builder: (context)=> ThirdPage()));
          })
        ]),
      ),
    );
  }
}
```
**Explanation:**
- When user clicks button, It'll goto page three
- Where, Back button on AppBar create automatically


`lib/pages/third.dart`

```dart
import 'package:flutter/material.dart';
import 'package:navigate/pages/first.dart';

class ThirdPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("Third Page")),
      body: Center(
        child: Column(children: <Widget>[
          Text("Third Page"),
          RaisedButton(child: Text("Goto Page 2"), onPressed: () {
            Navigator.pop(context);
          })
        ]),
      ),
    );
  }
}
```
**Explanation:**
- When user clicks button, It'll goto page two
- We have used `Navigator.pop(context)` for navigating back programmatically

### Flutter Navigation Screeshots

<img src="/assets/images/screenshots/routing/simple-navigate-1.png"> <img src="/assets/images/screenshots/routing/simple-navigate-2.png"> <img src="/assets/images/screenshots/routing/simple-navigate-3.png">

----

<button id="fo_dlbtn" data-fileid="flutter-simple-navigation" class="btn btn-blue">Download Source Code</button>


---

## Passing Data Between Pages

Navigation without data doesn't make any sense. so, let's add few more lines of code to acheive that

First, we need to work with `second.dart` for receiving data

```dart
class SecondPage extends StatelessWidget {
  String _name = '';
  String _message = '';

  SecondPage(name, message){
    this._message = message;
    this._name = name;
  }
  @override
  Widget build(BuildContext context) {
    // some code
  }
}
```
**Explanation:**

- This example, we're going to pass data called name and message. so we need to create a constructor called `SecondPage()` and receiving data.
- Note: constructor must be a same name of class name.
- Then we have created variable called `_name`, `_message`
- Now, using constructor, we're assigning incoming data to our variable. now you can display that variable any where you want

Now, let's pass data.

```dart
RaisedButton(
  child: Text("Goto Page 2"),
  onPressed: () {
    Navigator.push(context,
        MaterialPageRoute(builder: (context) => SecondPage("FlutterOwl","How are you")));
  }
)
```

When user click Goto Page 2 button, we're moving to `SecondPage` with "FlutterOwl","How are you" data

### Screenshots

<img src="/assets/images/screenshots/routing/simple-routing-pass-data1.png"> <img src="/assets/images/screenshots/routing/simple-routing-pass-data2.png">