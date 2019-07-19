---
layout: default
title: Flutter & Firebase FireStore Database
parent: Flutter & Firebase
nav_order: 3
permalink: flutter-firebase-firestore-database
menu_title: FireStore
---

# A Simple Chat with Flutter & FireStore

In last article, we have seen how to implement flutter firebase chat (realtime database). This tutorial, we're going to implement same concept but with firestore

## Step 1: Configure Firebase & Flutter

Before starting this, You must complete: [Firebase Flutter Setup](/flutter-firebase-setup)

## Step 2 : Adding Dependencies

Once you have completed setup, we need to add required packages with your `pubspec.yaml`. In our case we need to add Firestore (`cloud_firestore`), `intl` (for timestamp handling)

```yaml
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^0.1.2
  firebase_core: ^0.4.0+6
  cloud_firestore: ^3.0.4
  intl: ^0.15.8
```

## Step 3: Working with Code

Now we can start writing code with our `main.dart`

Let's create a reference  to `chats` collection for storing messages. & `_txtCtrl` for handling user inputs

```dart
var _firestoreRef = Firestore.instance.collection('chats');
TextEditingController _txtCtrl = TextEditingController();
```

Now using `_firestoreRef` we can add, read, update, delete data with `chats` collection

#### Insert Data to Firebase FireStore

```dart
sendMessage() {
  _firestoreRef.add({
    "message": _txtCtrl.text,
    "timestamp": DateTime.now().millisecondsSinceEpoch
  });
  _txtCtrl.clear();
}
```
this code can insert(push) data into firestore & clear text field

#### Delete Data for FireStore

```dart
deleteMessage(key) {
    _firestoreRef.document(key).delete();
}
```
Using this code, we delete documnet with key

#### Update Data to FireStore

```dart
updateTimeStamp(key) {
    _firestoreRef
        .document(key)
        .updateData({"timestamp": DateTime.now().millisecondsSinceEpoch});
}
```
Using this code, we're updating timestamp of particular message based on key

#### Read data from firebase Realtime Database

To display firebase data into our app, we need `StreamBuilder`.

```dart
StreamBuilder(
    stream: _firestoreRef.snapshots(),
    builder: (context, snapshot) {
        if (!snapshot.hasData)
            return LinearProgressIndicator();
        else {
            List item = [];
            snapshot.data.documents.forEach((document) {
                item.add({"key": document.documentID, ...document.data});
            });

            return ListView.builder(
                itemCount: item.length,
                itemBuilder: (context, index) {
                    return ListTile(
                    title: Text(item[index]['message']),
                    trailing: Text(DateFormat("hh:mm:ss")
                        .format(DateTime.fromMicrosecondsSinceEpoch(
                            item[index]['timestamp'] * 1000))
                        .toString()),
                    onTap: () => updateTimeStamp(item[index]['key']),
                    onLongPress: () => deleteMessage(item[index]['key']),
                    );
                },
            );
        }
    },
)
```

**Explanation:**
- We created `StreamBuilder` based on `_firestoreRef.snapshots()`, which means, we update stream builder whenever data changes on fireStore Database (CRUD)
- If there is no error, we're storing all messages (`snapshot.data.documents`) into `List item`
- Since firebase key are unpredictable, we have used `forEach` to push data into `item`
- Once everything is fine, we use `ListView.builder()` & ListTile for displaying data
- When user Tap, we update timestamp & with longpress, we delete data

This code we display a TextField with Buttons

```dart
Container( child: Row(children: <Widget>[
        Expanded(child: TextField(controller: _txtCtrl)),
        SizedBox(
            width: 80,
            child: OutlineButton(child: Text("Add"), onPressed: () => sendMessage()))
    ])
);
```

### Screenshot

<img src="assets/images/screenshots/firebase/chat1.png"> <img src="assets/images/screenshots/firebase/chat2.png"> <img src="assets/images/screenshots/firebase/chat3.png"> <img src="assets/images/screenshots/firebase/chat4.png">