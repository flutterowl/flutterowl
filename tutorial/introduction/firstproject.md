---
layout: default
title: Your First Flutter Project
parent: Getting Started
nav_order: 2
permalink: /first-flutter-project
menu_title: Your First Flutter Project
---

This article, we'll learn flutter by creating your first project. To create a new flutter project, we need to execute following commands on your terminal / command prompt

Let's create a new project name called `firstproj`

```
flutter create firstproj
```

This creates a new project & folder called `firstproj`. Then we have to change our working directory to run this

```
cd firstproj
```

After changing the working directory, we need to run our project

```
flutter run
```

### Flutter Project Structure

Once you created a new project, you can see these folder on your machine

<img src="/assets/images/screenshots/flutter-project-structure.png">

**Where I should write code?**

You need to start with `firstproj/lib/main.dart`. This is the place, we need to write our code.

**How to add Dependencies/packages?**

During the lesson, you might need to few packages such as facebook_login, camera, geolocation ..etc based on your project requirements. In that case you need to edit `firstproj/pubspec.yaml`


## Hello World !

Let's erase all code inside your `firstproject/lib/main.dart` & put this code

```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: MyApp()));

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      body: Center(
        child: Text("Hello World"),
      ),
    );
  }
}
```

Now, you should save this file. Press **R** for reload or **Shift+r** for hot-reload (in terminal)