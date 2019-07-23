---
layout: default
title: Flutter & HTTP | A Complete Guide
parent: Flutter & HTTP
nav_order: 1
permalink: /flutter-http-tutorial/
menu_title: HTTP GET & POST
image: /assets/images/cover/flutter-http-tutorial.jpg
comments: true
file: flutter-http
---

<img src="/assets/images/cover/flutter-http-tutorial.jpg">

# A Step By Step tutorial for Flutter & Http

In this tutorial, we're going to learn about how to make http requrest with flutter. To start with that, we need to create a flutter project

    flutter create httpdemo
    cd httpdemo


### What you'll learn

- Read (GET) Data from webserver
- POST data to web server

This example, we're going to use [https://reqres.in/](https://reqres.in/) as our server

To working with HTTP, we need to include following package with our `pubspec.yaml` file

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^0.12.0+2
  toast: ^0.1.5
```

http helps you to make requests & toast allows you to dispaly toast message.

## Reading JSON with Flutter

First, we're going to read user's data from https://reqres.in/api/users. Response look like this

```json
    {
    page: 1,
    per_page: 3,
    total: 12,
    total_pages: 4,
    data: [
        {
            id: 1,
            email: "george.bluth@reqres.in",
            first_name: "George",
            last_name: "Bluth",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        },
        {
            id: 2,
            email: "janet.weaver@reqres.in",
            first_name: "Janet",
            last_name: "Weaver",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        },
        {
            id: 3,
            email: "emma.wong@reqres.in",
            first_name: "Emma",
            last_name: "Wong",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        }
    ]
}

```

Let's import required packages first

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';
```

Since we're working with json data, we need to import `dart:convert`. Now we need to create a function which make GET request with our URL

```dart
List _users = [];

getUsers() async {
    http.get("https://reqres.in/api/users").then((res) {
        Map userData = json.decode(res.body);
        setState(() {
        _users = userData["data"];
        });
    });
}
```
**Explanation:**

- We created `_users` to store response from server
- `http.get(url)` received data & we have used `json.decode` for converting response as json
- once data is received, we're updating `_users`

**Displaying data**

```dart
@override
Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
        title: Text("Users"),
        actions: <Widget>[
            IconButton(
            icon: Icon(Icons.refresh),
            onPressed: () => getUsers(),
            )
        ],
        ),
        body: _users.length == 0
            ? Center(child: Text("No user Found"))
            : ListView.builder(
                itemCount: _users.length,
                itemBuilder: (context, index) {
                return ListTile(
                    leading: CircleAvatar(
                        backgroundImage: NetworkImage(_users[index]['avatar'])),
                    title: Text(_users[index]['first_name'] +
                        " " +
                        _users[index]['last_name']),
                );
                },
            ),
    );
}
```

**Explanation:**

- We're checking `_users.length == 0`, if yes, we display no user found, otherwise, we display data with listview

<img src="/assets/images/screenshots/http/flutter-http-get1.png"> <img src="/assets/images/screenshots/http/flutter-http-get2.png">

---

## Making HTTP POST

Now, we're going to make http post request to [https://reqres.in/api/register](https://reqres.in/api/register). for that we need 

```json
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
```

Let's create a simple form for receiving inputs from user such as email and password

```dart

Map<String,String> _user = {};

@override
    Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
        appBar: AppBar(
        title: Text("Register"),
        ),
        body: Container(
        padding: EdgeInsets.all(32.0),
        child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
            TextField(decoration: InputDecoration(hintText: "Email"), onChanged:(val){
                setState(() {
                _user['email'] = val;
                });
            }),
            
            TextField(obscureText: true , decoration: InputDecoration(hintText: "Password"), onChanged:(val){
                setState(() {
                _user['password'] = val;
                });
            }),
            OutlineButton(
                child: Text("Register"),
                onPressed: () {
                register();
                },
            )
            ],
        ),
        ),
    );
}
```
**Explanation:**

- We created `_user` variable for storing user info
- We created TextField for getting email and password
- When user press register button we're calling `register()`

```dart
register(){
    http.post("https://reqres.in/api/register",
        body: _user 
    ).then((res){
        var resJson = json.decode(res.body);

        if(resJson['error'] != null){
        Toast.show("Something Went wrong -> " + resJson['error'], context, gravity: Toast.CENTER);
        }
        else{
        Toast.show("Registerd Successfully", context, gravity: Toast.CENTER);
        }
    });
}
```
**Explanation:**
- we're making request using `http.post()` with url & converted response to json. Based on response we're displaying toast message

<img src="/assets/images/screenshots/http/flutter-http-post.png">