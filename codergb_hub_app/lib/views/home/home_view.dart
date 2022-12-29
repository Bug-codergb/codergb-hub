import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'home_logic.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(HomeLogic());

    return Container(
      child: Text("首页"),
    );
  }
}
