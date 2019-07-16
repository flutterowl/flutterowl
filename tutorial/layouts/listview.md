---
layout: default
title: A Complete Guide to Flutter List View with Example
parent: Flutter Layouts
nav_order: 1
permalink: flutter-list-view
menu_title: List View
---

# A Complete Guide to flutter list view

<img src="assets/images/cover/flutter-listview-example.jpg"/>

If you want to display multiple widgets in vertically or horizantally with scrollable, you can use flutter list view

To display, listView we have mutiple options such as

1. ListView()
2. ListView.builder()
3. ListView.custom()
4. ListView.separated()


## Working with Flutter ListView()

`ListView()` helps you to display static content, where you know list length or list data (how much data), you can use this

### Flutter ListView() Example 1

This example, we're going to display images horizantally with scrollable

```dart
ListView(
    scrollDirection: Axis.horizontal,
    children: <Widget>[
        Image.asset("assets/flutterowl.png", width: 100.0, height:100.0),
        Image.asset("assets/flutterowl.png", width: 100.0, height:100.0),
        Image.asset("assets/flutterowl.png", width: 100.0, height:100.0),
        Image.asset("assets/flutterowl.png", width: 100.0, height:100.0),
        Image.asset("assets/flutterowl.png", width: 100.0, height:100.0),
        Image.asset("assets/flutterowl.png", width: 100.0, height:100.0),
        Image.asset("assets/flutterowl.png", width: 100.0, height:100.0),
    ],
)
```
<img src="assets/images/screenshots/flutter-listview-example1.png"/>

---

### Flutter ListView() Example 2
Now, we're going to display 7 wonders name, country, images with vertically scrollable

```dart
ListView(
    children: <Widget>[
        ListTile(leading: Image.network("https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Taj-Mahal.jpg"), title: Text("Taj Mahal"), subtitle: Text("India")),
        ListTile(leading: Image.network("https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Christ-the-Redeemer.jpg"), title: Text("Christ the Redeemer"), subtitle: Text("Brazil")),
        ListTile(leading: Image.network("https://d36tnp772eyphs.cloudfront.net/blogs/1/2016/03/petra-jordan9.jpg"), title: Text("Petra"), subtitle: Text("Jordan")),
        ListTile(leading: Image.network("https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Great-Wall-of-China-view.jpg"), title: Text("The Great Wall of China"), subtitle: Text("China")),
        ListTile(leading: Image.network("https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/View-of-the-Colosseum.jpg"), title: Text("The Colosseum"), subtitle: Text("Rome")),
        ListTile(leading: Image.network("https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Machu-Picchu-around-sunset.jpg"), title: Text("Machu Picchu"), subtitle: Text("Peru")),
        ListTile(leading: Image.network("https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Chichen-Itza-at-night.jpg"), title: Text("Chichén Itzá"), subtitle: Text("Mexico")),
    ],
)
```
Image Source: https://matadornetwork.com/read/21-amazing-images-new-seven-wonders-world/

<img src="assets/images/screenshots/flutter-listview-example1.png"/>

---

## Flutter ListView.builder() Tutorial

Flutter `ListView.builder()` helps you to generate list view, when you're data lengh is unknown. (E.g) If you're getting data from web server, we're not sure about how many (in count) data we're receive. so we should use list view for that.

### Flutter ListView.builder() example

This example, we're going to display same 7 wonders but with `List`. consider, you're receiving these data from web request.

First, we need to create a class for `Place` where we can create custom `List`

```dart
class Place {
  String imageUrl;
  String name;
  String country;

  Place({this.imageUrl, this.name, this.country});
}
```

Now using this `Place`, we can create custom `List` as follows

```dart
List wonders = [
    Place(
        imageUrl:
            "https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Taj-Mahal.jpg",
        name: "Taj Mahal",
        country: "India"),
    Place(
        imageUrl:
            "https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Christ-the-Redeemer.jpg",
        name: "Christ the Redeemer",
        country: "Brazil"),
    Place(
        imageUrl:
            "https://d36tnp772eyphs.cloudfront.net/blogs/1/2016/03/petra-jordan9.jpg",
        name: "Petra",
        country: "Jordan"),
    Place(
        imageUrl:
            "https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Great-Wall-of-China-view.jpg",
        name: "The Great Wall of China",
        country: "China"),
    Place(
        imageUrl:
            "https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/View-of-the-Colosseum.jpg",
        name: "The Colosseum",
        country: "Rome"),
    Place(
        imageUrl:
            "https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Machu-Picchu-around-sunset.jpg",
        name: "Machu Picchu",
        country: "Peru"),
    Place(
        imageUrl:
            "https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/02/Chichen-Itza-at-night.jpg",
        name: "Chichén Itzá",
        country: "Mexico"),
  ];

```

Now, we can display these data inside `ListView.builder()`

```dart
ListView.builder(
    itemCount: wonders.length,
    itemBuilder: (context, index) {
        return ListTile(leading: Image.network(wonders[index].imageUrl), title: Text(wonders[index].name), subtitle: Text(wonders[index].country),);
    },
),

```

<img src="assets/images/screenshots/flutter-listview-example2.png"/>