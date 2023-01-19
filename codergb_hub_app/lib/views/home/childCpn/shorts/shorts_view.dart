import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'shorts_logic.dart';

class ShortsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(ShortsLogic());

    return Container(
      child: Text("短视频"),
    );
  }
}
