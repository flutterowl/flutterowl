---
layout: default
title: A Complete Guide to Flutter GridView with Example
parent: Flutter Layouts
nav_order: 2
permalink: /flutter-grid-view/
menu_title: GridView
image: assets/images/cover/flutter-grid-view-tutorial.jpg
comments: true
description: A complete guide for flutter gridview
---

# A Complete Guide to Flutter GridView

<img src="assets/images/cover/flutter-grid-view-tutorial.jpg">

This tutorial, we're going to display content in grid view. List ListView(), GridView also have mutliple ways to display gridview such as

1. GridView.count()
2. GridView.builder()
3. GridView.custom()
4. GridView.extend()

### Getting started

let's create new proejct with flutter & start coding

    flutter create testproj
    cd testproj

## Flutter GridView Example 1

This example, we're going to display images in gridview using `GridView.count()`.

```dart
 GridView.count(
    padding: EdgeInsets.all(8.0),
    crossAxisCount: 3,
    mainAxisSpacing: 4.0,
    crossAxisSpacing: 4.0,
    children: <Widget>[
        Container( child: Image.network("https://placeimg.com/640/480/any", fit: BoxFit.cover)),
        Container( child: Image.network("https://placeimg.com/640/480/any", fit: BoxFit.cover)),
        Container( child: Image.network("https://placeimg.com/640/480/any", fit: BoxFit.cover)),
        Container( child: Image.network("https://placeimg.com/640/480/any", fit: BoxFit.cover)),
        Container( child: Image.network("https://placeimg.com/640/480/any", fit: BoxFit.cover)),
        Container( child: Image.network("https://placeimg.com/640/480/any", fit: BoxFit.cover)),
    ],
)
```

**Explanation:** 
- `padding` is used for adding space for entire grid
- `crossAxisCount` means "How many grid you want to display"
- `mainAxisSpacing` = A space between grid (top -> bottom)
- `crossAxisSpacing` = A Space between widget (side by side)

<img src="assets/images/screenshots/fluter-gridview-example1.png"/>

---

## Flutter GridView Example 2

This example we're going to create 7 wonder project with `GridView.builder()`. To do that, first we need to create a class for `Place`

```dart
class Place {
  String imageUrl;
  String name;
  String country;

  Place({this.imageUrl, this.name, this.country});
}
```

then we need to create a wonders variable using `List` where we can hold all information about places. Note: Here, we're generating statically, but this applicable for web requests also

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

Now using our `wonders` list, we can display gridview using `GridView.builder()`

```dart
GridView.builder(
    itemCount: wonders.length,
    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount( crossAxisCount: 2,),
    itemBuilder: (context, index) {
    return Card(child: 
        Column( children: <Widget>[
        Container(child: Image.network(wonders[index].imageUrl, fit: BoxFit.cover,), height: 150),
        Text(wonders[index].name),
        Text(wonders[index].country),
        ],)
    );
    },
),
```

<img src="assets/images/screenshots/fluter-gridview-example2.png"/>

---