---
layout: default
title: Flutter & Firebase Setup
parent: Flutter & Firebase
nav_order: 1
permalink: /flutter-firebase-setup/
menu_title: Setup
---

# Firebase Setup for Flutter.

In order to work with firebase with flutter, we need to follow these setup.


## Step 1: Create a new firebase project

1. Login to **console.firebase.google.com**
    
    <img src="/assets/images/screenshots/glogin/1.png">

2. Goto Project OverView -> Project Settings -> General & add your support Email

    <img src="/assets/images/screenshots/glogin/2.png">

3. Scroll Down & Click Add Android Project

    <img src="/assets/images/screenshots/glogin/3.png">

4. Fill Required Details

    <img src="/assets/images/screenshots/glogin/4.png">

5. To Generate SHA 1 Hash key: 

    <img src="/assets/images/screenshots/glogin/5.png">

6. Download `Google-services.json` file

    <img src="/assets/images/screenshots/glogin/6.png">

7. Navigate to Project Settings & Add iOS

    <img src="/assets/images/screenshots/glogin/3.png">

8. Fill Required Details

    <img src="/assets/images/screenshots/glogin/9.png">

9. Download `GoogleService-Info.plist` file

    <img src="/assets/images/screenshots/glogin/9.png">


## Step 2: Android Setup

1. Copy & Paste your `google-services.json` file into `projectname/android/app/`

    <img src="/assets/images/screenshots/glogin/7.png">


2. Open `projectname/android/app/build.gradle` & add firebase dependencies

    ```
    dependencies {
        implementation 'com.google.firebase:firebase-core:17.0.0'
    }
    ```

    Update your package name

    ```
    defaultConfig {
        applicationId "com.flutterowl.testproj"
    }
    ```

    Add followling line to end of the `projectname/android/app/build.gradle` file

    ```
    apply plugin: 'com.google.gms.google-services'
    ```

3. Open `projectname/android/build.gradle` & Add

    ```
    dependencies {
        classpath 'com.google.gms:google-services:4.2.0'
    }
    ```


### Step 3: iOS Setup

1. Copy & Paste your Downloaded `GoogleService-Info.plist` into `projectname/ios/Runner` folder
2. Open `projectname/ios/PODFile` (Execute `pod install` if file not found) & Add ;

    ```
    pod 'Firebase/Core;
    ```

    & Execute

    ```
    pod install
    ```

    <img src="/assets/images/screenshots/glogin/11.png">

3. Open `projectname/ios/Runner.xcworkspace` & Choose Project & Add File to Runner & Choose `GoogleService-Info.plist` with choose target of Runner

    <img src="/assets/images/screenshots/glogin/12.png">

    <img src="/assets/images/screenshots/glogin/13.png">

