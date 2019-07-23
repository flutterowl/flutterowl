---
layout: default
title: Flutter & Firebase Push Notification
parent: Flutter & Firebase
nav_order: 4
permalink: /flutter-firebase-push-notification/
menu_title: Firebase Cloud Messaging
image: assets/images/cover/flutter-firebase-push-notification-tutorial.jpg
comments: true
file: flutter-fcm
---

<img src="assets/images/cover/flutter-firebase-push-notification-tutorial.jpg">

# A Complete Guide to integrate Firebase Messaging with Flutter

This tutorial, we're going to implement firebase push notifictaion with Flutter. 

## Step 1: Firebase Configuration

Before starting this, You must complete: [Firebase Flutter Setup](/flutter-firebase-setup)

## Step 2: Create Project & Add Dependencies

Let's create new project

```
flutter create flutterfcm
cd flutterfcm
```

Let's add `firebase_messaging` with `pubspec.yaml`

```yaml
dependencies:
  flutter:
    sdk: flutter
  firebase_messaging: ^5.0.4
```

## Step 3: Android Configuration

Open `android/app/src/main/AndroidManifest.xml` & put this code inside `<activity></activity>`

```xml
<intent-filter>
 <action android:name="FLUTTER_NOTIFICATION_CLICK"/>
 <category android:name="android.intent.category.DEFAULT"/>
</intent-filter>
```

### Step 4: Working with Code

Let's work with `main.dart`

```dart
import 'package:flutter/material.dart';
import 'package:firebase_messaging/firebase_messaging.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  String _message = '';

  final FirebaseMessaging _firebaseMessaging = FirebaseMessaging();

  _register() {
    _firebaseMessaging.getToken().then((token) => print(token));
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getMessage();
  }
  
  void getMessage(){
   _firebaseMessaging.configure(
        onMessage: (Map<String, dynamic> message) async {
      setState(() => _message = message["notification"]["title"]);
    }, onResume: (Map<String, dynamic> message) async {
      setState(() => _message = message["notification"]["title"]);
    }, onLaunch: (Map<String, dynamic> message) async {
      setState(() => _message = message["notification"]["title"]);
    });
  }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text("Message: $_message"),
            OutlineButton(
              child: Text("Register My Device"),
              onPressed: () => _register(),
            ),
          ]),
        ),
      ),
    );
  }
}
```

**Code Explanation:**

- When user click Register button, it'll call `_register()` which register our device with firebase and return token, which we're printing it on termainal for sending message

- `getMessage()` called on `initState()` so, when user open an app, we receive push notification


## Step 5: Sending Message Via CURL

Get Your server Key **Firebase Console -> Firebase Project OverView -> Project Settings -> Cloud Messaging**

<img src="assets/images/screenshots/firebase/firebase-server-key.png">

Run this command on your terminal & see the result. Note: Please update device token and server key with yours!

```
DATA='{"notification": {"body": "this is a body","title": "this is a title"}, "priority": "high", "data": {"click_action": "FLUTTER_NOTIFICATION_CLICK", "id": "1", "status": "done"}, "to": "DEVICE_TOKEN"}'

curl https://fcm.googleapis.com/fcm/send -H "Content-Type:application/json" -X POST -d "$DATA" -H "Authorization: key=FIREBASE_SERVER_KEY"

```

<img src="assets/images/screenshots/firebase/fcm1.png"> <img src="assets/images/screenshots/firebase/fcm2.png">