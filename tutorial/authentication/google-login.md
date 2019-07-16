---
layout: default
title: Flutter Google Login
parent: Flutter Authentication
nav_order: 2
permalink: flutter-google-login
menu_title: Google Login
---

# A Step By Step Guide for Google login with Flutter

This tutorial, we're going to learn about integrating google login with your flutter apps. To to that, we're going to use this package: [https://pub.dev/packages/google_sign_in](https://pub.dev/packages/google_sign_in)


### Step for integrating Google login

- Creating & Configuring Firebase App
- Configuring Android & iOS
- Adding Package
- Working with Dart Code

### Getting Started

Let's create a new project

    flutter create testproj
    cd testproj

Open your `pubspec.yaml` & add package

```yaml
dependencies:
    flutter:
        sdk: flutter
    google_sign_in: ^4.0.2
```

### Working with Dart Code

Let's work with main.dart for login and logout functionalities

```dart
bool _isLoggedIn = false;
GoogleSignIn _googleSignIn = GoogleSignIn(scopes: ['email']);

_login() async{
    try{
        await _googleSignIn.signIn();
        setState(() => _isLoggedIn = true);
    } catch (err){
        print(err);
    }
}

_logout(){
    _googleSignIn.signOut();
    setState(() => _isLoggedIn = false );
}
```

**Explanation:**
- We created `_isLoggedIn` variable for detecting state of user's login
- `_googleSignIn` as global variable from `GoogleSignIn()`
- when user click login button, we're calling `_googleSignIn.signIn()`
- `_googleSignIn.signOut()` for logout

```dart
Scaffold(
    body: Center(
        child: _isLoggedIn
            ? Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                    Image.network(_googleSignIn.currentUser.photoUrl, height: 50.0, width: 50.0,),
                    Text(_googleSignIn.currentUser.displayName),
                    OutlineButton( child: Text("Logout"), onPressed: (){
                    _logout();
                    },)
                ],
                )
            : Center(
                child: OutlineButton(
                    child: Text("Login with Google"),
                    onPressed: () {
                    _login();
                    },
                ),
                )),
    ),
)

```
**Explanation:**
- This code display login button if user is not logged in, otherwise it displays user profile image, name with logout button

### Screenshot
<img src="assets/images/screenshots/glogin/op1.png"> <img src="assets/images/screenshots/glogin/op2.png"> <img src="assets/images/screenshots/glogin/op3.png"> <img src="assets/images/screenshots/glogin/op4.png">

---

### Flutter Google login Setup for Android

1. login with your firebase account [https://console.firebase.google.com/](https://console.firebase.google.com/)
    - Create new project
    - fill your app details such as name 
    - Accept Terms & conditions

    <img src="assets/images/screenshots/glogin/1.png">

2. Navigate to Project Settings -> General & choose your support email

    <img src="assets/images/screenshots/glogin/2.png">

3. Navigate to project settings -> Choose Android

    <img src="assets/images/screenshots/glogin/3.png">

4. Fill App details such as Package name, name and SHA-1 Key

    <img src="assets/images/screenshots/glogin/4.png">

    To generate SHA1 Key, you need to follow this : [https://developers.google.com/android/guides/client-auth](https://developers.google.com/android/guides/client-auth) & password is android

    <img src="assets/images/screenshots/glogin/5.png">

5. Download `google-services.json` file

    <img src="assets/images/screenshots/glogin/6.png">

6. Copy the downloaded `google-services.json` file into `testproj/android/app`

    <img src="assets/images/screenshots/glogin/7.png">

7. Update Application ID in your `testproj/android/app/build.gradle`

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

8. Navigate to Authentication->SignIn Method & Enable Google Login

    <img src="assets/images/screenshots/glogin/8.png">
    
---

### Flutter Google login Setup for iOS

**Firebase Setup**

1. Navigate to Firebase Project Overview -> Settings & choose Add iOS platform

    <img src="assets/images/screenshots/glogin/3.png">

2. Add your bundle id & app name & click Next

    <img src="assets/images/screenshots/glogin/9.png">

3. Download `GoogleServiceInfo.plist` file & Paste inside `testproj/ios/Runner`

    <img src="assets/images/screenshots/glogin/10.png">

4. Navigate to `testproj/ios` & execute

    ```
    pod install
    ```

    Note: You must added `flutter_google_login` package in `pubspec.yaml` before doing this

5. Open `testproj/ios/Runner.xcworkspace` & click Add Files to Runner & choose `GoogleServiceInfo.plist` file

    <img src="assets/images/screenshots/glogin/12.png">

    <img src="assets/images/screenshots/glogin/13.png">

6. Now you need to copy these lines & Add into `testproj/ios/Runner/Info.plist`

    ```xml
    <key>CFBundleURLTypes</key>
    <array>
        <dict>
            <key>CFBundleTypeRole</key>
            <string>Editor</string>
            <key>CFBundleURLSchemes</key>
            <array>
                <string>REVERSE CLIENT ID</string>
            </array>
        </dict>
    </array>
    ```

    Note: you can copy reverse client id from `GoogleServiceInfo.plist`

