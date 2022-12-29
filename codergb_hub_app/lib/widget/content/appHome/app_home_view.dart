import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'app_home_logic.dart';

class AppHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(AppHomeLogic());

    return Scaffold(
      appBar: AppBar(
        title: Text("0"),
      ),
      body: Text("0"),
    );
  }
}
