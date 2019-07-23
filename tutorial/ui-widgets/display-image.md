---
layout: default
title: Display Image in flutter
parent: UI Widgets
nav_order: 2
permalink: /display-image-in-flutter/
menu_title: Display Image in flutter
image: /assets/images/cover/display-images-in-flutter.jpg
comments: true
file: flutter-images
---

# Display Images in Flutter

<img src="/assets/images/cover/display-images-in-flutter.jpg">

This article, we're going to learn, how to display images in your flutter app.

### What you'll learn?
- Display Images from /assets folder
- Display Image from Network

### Getting Started

First, create a new project & change your working dirctory

    flutter create testproj
    cd testproj

### Display Image from /assets folder

Incase, If you want to display any image locally, (eg. from Project folder), we need to use following methods

1. Create a new folder called /assets in your project folder. (File path will be `testproj/assets/`)
2. Copy images to your /assets folder
3. Open your `pubspec.yaml` and add these lines

    ```yaml
    flutter:
        /assets:
        - /assets/flutterowl.png
    ```

    so final `pubspec.yaml` looks like this

    ```yaml
    name: testproj
    description: A new Flutter project.
    version: 1.0.0+1
    environment:
    sdk: ">=2.1.0 <3.0.0"

    dependencies:
    flutter:
        sdk: flutter
    cupertino_icons: ^0.1.2

    dev_dependencies:
    flutter_test:
        sdk: flutter

    flutter:
    uses-material-design: true
    /assets:
        - /assets/flutterowl.png
    ```

    **Note:** Spacing is very important

4. Now using following code you can display an image

``` dart
Image.asset("/assets/flutterowl.png");
```

<img src="/assets/images/screenshots/flutter-display-image-locally.png"/>

---

### Display Image from Network

To display image from network, we need to use following code

```dart
Image.network("http://flutterowl.com/flutterowl.png");
```


### Change Height ant Width for Image

In case, IF you want to change and height, width of your image, you can do it with following code

```dart
Image.network("http://flutterowl.com/flutterowl.png", height: 150.0, width: 150.0)
Image.asset("/assets/flutterow.png", height: 100.0, width: 100.0)
```

<img src="/assets/images/screenshots/flutter-display-image-locally.png"/>

---

### Download Source code
