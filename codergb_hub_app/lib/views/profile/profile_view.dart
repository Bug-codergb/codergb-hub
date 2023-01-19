import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'profile_logic.dart';

class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(ProfileLogic());

    return Container(
      child: Text("我的"),
    );
  }
}
