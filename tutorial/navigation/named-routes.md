---
layout: default
title: Named Routes
parent: Flutter Navigation & Routing
nav_order: 2
permalink: flutter-navigation/named-routes
menu_title: Named Routes
comments: true
---

# Named Router

This article, we're going to work with named router with Flutter. To do that, first we need to create a new flutter project

    flutter create navigate
    cd navigate

Next, we need to create new pages called first, second, third as we did on our previous article.


### Named Routes declaration

```dart
MaterialApp(
    routes: {
        '/': (context) => FirstPage(),
        '/second': (context) => SecondPage(),
        '/third': (context) => ThirdPage(),
    },
);
```
**Explanation**

we have declared routes with key, value based. key is a route name (like '/', '/second', '/third') and value is a page where we want to navigate

Now you can call Named Routes using these lines

```dart
Navigator.pushNamed(context, 'routeName');
Navigator.pushNamed(context, '/second');
```

As a result, our page code will be like this

```dart
import 'package:flutter/material.dart';

class FirstPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar: AppBar(title: Text("First Page")),
      body: Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text("First Page"),
              RaisedButton(
                  child: Text("Goto Page 2"),
                  onPressed: () => Navigator.pushNamed(context, '/second'))
            ]),
      ),
    );
  }
}
```

### Flutter Navigation Screeshots

<img src="/assets/images/screenshots/routing/simple-navigate-1.png"> <img src="/assets/images/screenshots/routing/simple-navigate-2.png"> <img src="/assets/images/screenshots/routing/simple-navigate-3.png">


---

## Passing Data Between pages using flutter named routes

We all know, moving from one page to another page is not enought without passing a data. This example, we're going build a product catalog project for learning pass data between two pages. To do that, first we need to create a new modal class for our product information.

`navigate/lib/modal/product.dart`

```dart
class Product{
  final String name;
  final double price;
  final String img;

  Product({this.name, this.price, this.img});
}
```

Then We have to create a our Product List on our first page (`first.dart`) for displaying product list.

```dart
List<Product> _products = [
    Product(name: "iPhone X", price: 60000, img: "https://rukminim1.flixcart.com/image/416/416/j9d3bm80/mobile/k/x/a/apple-iphone-x-mqa82hn-a-original-imaeyysgmypxmazk.jpeg?q=70"),
    Product(name: "Samsung Galaxy A10", price: 19000, img: "https://rukminim1.flixcart.com/image/416/416/jt8yxe80/mobile/g/v/x/samsung-galaxy-a10-sm-a105fzbgins-original-imafenbrg4zt5xye.jpeg?q=70"),
    Product(name: "Honor 8C ", price: 13000, img: "https://rukminim1.flixcart.com/image/416/416/jq5iky80/mobile/h/z/n/honor-8c-bkk-al10-original-imafc7hyyxjpv6ew.jpeg?q=70"),
];
```
Image Credit: flipkart.com

Using this list of data, we can create a list with ListView.builder()


```dart
ListView.builder(
  itemCount: _products.length,
  itemBuilder: (context, index){
    return ListTile(
      title: Text(_products[index].name),
      onTap: (){
       // code here
      },
    );
  },
)
```

when single product clicked, we need to pass our data to next page using `Navigator.pushNamed()`, where it takes 3rd parameter for `argurments`. Here we have passed `Product` with every tap

```dart
 Navigator.pushNamed(
  context,
  '/product-info',
  arguments: Product(name: _products[index].name, price: _products[index].price, img: _products[index].img),
);
```

Let's create new page called `product-detail.dart` & receive data using `ModalRoute.of(context).settings.arguments` & Store into `_productInfo`

```dart
final Product _productInfo = ModalRoute.of(context).settings.arguments;
```

### Screenshot

<img src="/assets/images/screenshots/routing/named-routes1.png"> <img src="/assets/images/screenshots/routing/named-routes2.png"> <img src="/assets/images/screenshots/routing/named-routes3.png">