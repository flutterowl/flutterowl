---
layout: default
title: Flutter Facebook Login
parent: Flutter Authentication
nav_order: 1
permalink: /flutter-facebook-login/
menu_title: Facebook Login
image: assets/images/cover/flutter-facebook-login-tutorial.jpg
comments: true
file: flutter-fblogin
---

# A Complete Guide to Facebook login with Flutter

<img src="assets/images/cover/flutter-facebook-login-tutorial.jpg">

This article, we're going to learn how to integrate facebook login with your flutter apps. To integrating facebook login, we need to follow few steps

1. Working with Facebook apps
2. Working with Android Configuration
3. Working with iOS configuration
4. Working with Dart Code

To working with Facebook login, we're going to use this package [https://pub.dev/packages/flutter_facebook_login](https://pub.dev/packages/flutter_facebook_login)

### What you'll learn

1. Learn how to create facebook apps for fb login
2. Integrate facebook plugin
3. Fetching User's profile information such as name, display picture and email using graph API


### Getting Started

Let's create an new project for flutter

    flutter create testproj
    cd testproj

Let's add [flutter_facebook_login](https://pub.dev/packages/flutter_facebook_login) & [http](https://pub.dev/packages/http) package in your `pubspec.yaml` 

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^0.12.0+2
  flutter_facebook_login: ^1.2.0
```

**!important:** use latest `flutter_facebook_login` for iOS & AndroidX support. otherwise you face issue while building an app

## Working with dart code

Once we completed all configuration steps, now we need to work with our `main.dart`. As a first step, we have to import required packages. In our case, we need flutter_facebook_login, http and json

```dart
import 'package:flutter_facebook_login/flutter_facebook_login.dart';
import 'package:http/http.dart' as http;
import 'dart:convert' as JSON;
```

then, we can write a function for facebook login and logout. We also need to create variable for storing state of login.


```dart

  bool _isLoggedIn = false;
  Map userProfile;
  final facebookLogin = FacebookLogin();


_loginWithFB() async{

    final result = await facebookLogin.logInWithReadPermissions(['email']);

    switch (result.status) {
      case FacebookLoginStatus.loggedIn:
        final token = result.accessToken.token;
        final graphResponse = await http.get('https://graph.facebook.com/v2.12/me?fields=name,picture,email&access_token=${token}');
        final profile = JSON.jsonDecode(graphResponse.body);
        setState(() {
          userProfile = profile;
          _isLoggedIn = true;
        });
        break;

      case FacebookLoginStatus.cancelledByUser:
        setState(() => _isLoggedIn = false );
        break;
      case FacebookLoginStatus.error:
        setState(() => _isLoggedIn = false );
        break;
    }

  }

_logout(){
    facebookLogin.logOut();
    setState(() => _isLoggedIn = false );
  }

```

**Explanation:**

- we created `_isLoggedIn` variable for storing user's login state
- `userProfile` helps storing user's profile information like name, email
- `facebookLogin` used as global variable for performing action regarding flutter_facebook_login package
- then we created `_loginWithFB()` for performing login
-  `facebookLogin.logInWithReadPermissions(['email'])` used for getting permission for email & basic profile information
- After that, we're using graph API to fetch user info & storing wiht `userProfile`
- we created `_logout()` for logout


```dart
Scaffold(
    body: Center(
        child: _isLoggedIn
            ? Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                    Image.network(userProfile["picture"]["data"]["url"], height: 50.0, width: 50.0,),
                    Text(userProfile["name"]),
                    OutlineButton( child: Text("Logout"), onPressed: (){
                    _logout();
                    },)
                ],
                )
            : Center(
                child: OutlineButton(
                    child: Text("Login with Facebook"),
                    onPressed: () {
                    _loginWithFB();
                    },
                ),
                )),
    )
```

**Explanation:**

- we're checking `_isLoggedIn` state for login state
- If user is loggedin, we're displaying profile picture, name and logout button
- If user is not loggedin, we're displaying login button

<img src="assets/images/screenshots/fblogin/op1.png"> <img src="assets/images/screenshots/fblogin/op2.png"> <img src="assets/images/screenshots/fblogin/op3.png"> <img src="assets/images/screenshots/fblogin/op4.png"> <img src="assets/images/screenshots/fblogin/op5.png">

---
## Creating Facebook App

1. Login your facebook account (developers.facebook.com) & create new app

    <img src="assets/images/screenshots/fblogin/1.png">

2. Fill Application name and contact email
    <img src="assets/images/screenshots/fblogin/2.png">

3. Complete Captcha
    <img src="assets/images/screenshots/fblogin/3.png">

4. Click Product from your left sidebar & choose Facebook Login
    <img src="assets/images/screenshots/fblogin/4.png">

5. Choose Android App
    <img src="assets/images/screenshots/fblogin/5.png">

6. Click Next -> Next .. & you need to fill your package name and mainactivity name (hint: Package name is nothing but com.yourcompanyname.appname & Activity class name is com.yourcompanyname.appname.MainActivity) & Click Save & Click use this package name

    <img src="assets/images/screenshots/fblogin/6.png">

    <img src="assets/images/screenshots/fblogin/7.png">
    
7. Click Next -> next . Fill your hash key & click save

    ```
    //For Mac

    keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64

    //For Windows

    keytool -exportcert -alias androiddebugkey -keystore "C:\Users\USERNAME\.android\debug.keystore" | "PATH_TO_OPENSSL_LIBRARY\bin\openssl" sha1 -binary | "PATH_TO_OPENSSL_LIBRARY\bin\openssl" base64

    Password: android
    ```
    <img src="assets/images/screenshots/fblogin/8.png">

8. then Click Next -> next till last step & complete Android Setup

---

### Flutter Facebook login setup for Android

**Working with `build.gradle`**

Open `testproj/android/app/build.gradle` & rename application id from `com.example.testproj` => `com.flutterowl.testproj` (Note: you can use any package name which follows `com.companyname.appname`)

```
 defaultConfig {
    applicationId "com.flutterowl.testproj"
    minSdkVersion 16
    targetSdkVersion 28
    versionCode flutterVersionCode.toInteger()
    versionName flutterVersionName
    testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
}
```


**Working with `strings.xml`**

Navigate to `testproj/android/app/src/main/res/values/strings.xml`.(Please create strings.xml if file is not found). Add these lines & update your APPNAME, APP_ID and protocol scheme (It's a APP_ID with fb as prefix)

```xml
<resources>
    <string name="app_name">YOUR_FB_APPNAME</string>
    <string name="facebook_app_id">YOUR_FB_APP_ID</string>
    <string name="fb_login_protocol_scheme">fb000000000000</string>
</resources>
```

**Working with `AndroidManifest.xml`**

Open `testproj/android/app/src/main/AndroidManifest.xml` & add these line between `<application></application>`

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>

<activity android:name="com.facebook.FacebookActivity" android:configChanges= "keyboard|keyboardHidden|screenLayout|screenSize|orientation" android:label="@string/app_name" />

<activity android:name="com.facebook.CustomTabActivity" android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="@string/fb_login_protocol_scheme" />
    </intent-filter>
</activity>
```

---
### Flutter Facebook login setup for iOS

1. Navigate Facebook Login -> Quick Start & choose iOS
    <img src="assets/images/screenshots/fblogin/5.png">

2. Click Next.. & Fill your package name (bundle id)
    <img src="assets/images/screenshots/fblogin/9.png">

3. Navigate to `testproj/ios/Runner/Info.plist` & copy code from facebook

    <img src="assets/images/screenshots/fblogin/10.png">

    & It look like this

    <img src="assets/images/screenshots/fblogin/11.png">

### Flutter Project Setup

1. Install cocoapods from your termainal, if it's not in your machine
    
    ```
    sudo gem install cocoapods
    ```

2. Navigate to `testproj/ios/` & Open `PODfile` (execute `pod init`, if file not found) & paste these lines at end

    ```
    pod 'FBSDKLoginKit'
    ```

3. execute from your termainal

    ```
    pod install
    ```

main.dart code is same as android

