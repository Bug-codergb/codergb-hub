import 'package:codergb_hub_app/router/index.dart';
import 'package:codergb_hub_app/widget/content/appHome/app_home_view.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() {
  runApp(const MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Youtube',
      home: AppHomePage(),
      getPages: routes,
      debugShowCheckedModeBanner: false,
    );
  }
}
