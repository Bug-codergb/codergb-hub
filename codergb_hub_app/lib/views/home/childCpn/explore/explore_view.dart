import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'explore_logic.dart';

class ExplorePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(ExploreLogic());

    return Container(
      child: Text("探索"),
    );
  }
}
