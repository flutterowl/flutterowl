---
layout: default
title: Flutter Buttons Examples
parent: UI Widgets
nav_order: 2
permalink: /display-buttons-on-flutter
menu_title: Flutter Buttons
image: assets/images/cover/flutter-buttons.jpg
comments: true
file: flutter-buttons
---

# Flutter Buttons Complete Guide

<img src="assets/images/cover/flutter-buttons.jpg">

Flutter has multiple button types such as 

- RaisedButton
- OutlineButton
- FlatButton
- IconButton


### Display Raised Button on Flutter

To display RasiedButton, we need to execute following code

```dart
RaisedButton(
    child: Text("RaisedButton"),
    onpressed: (){ 
        // some code here
    })
```
<img src="assets/images/screenshots/fluter-raisedbutton-example.png"/>

---

### Display  FlatButton on Flutter

To display FlatButton, we need to execute following code

```dart
FlatButton(
    child: Text("FlatButton"),
    onpressed: (){ 
        // some code here
    })
```
<img src="assets/images/screenshots/fluter-flatbutton-example.png"/>

---

### Display OutlineButton on Flutter

To display OutlineButton, we need to execute following code

```dart
OutlineButton(
    child: Text("OutlineButton"),
    onpressed: (){ 
        // some code here
    })
```
<img src="assets/images/screenshots/fluter-outlinebutton-example.png"/>

---

### Display IconButton on Flutter

To display IconButton, we need to execute following code

```dart
IconButton(
    icon: Icon(Icons.favorite)
    onpressed: (){ 
        // some code here
    })
```

<img src="assets/images/screenshots/fluter-iconbutton-example.png"/>