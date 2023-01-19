import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'subscriber_logic.dart';

class SubscriberPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(SubscriberLogic());

    return Container(
      child: Text("订阅"),
    );
  }
}
