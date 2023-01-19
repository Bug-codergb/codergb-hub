import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'video_logic.dart';

class VideoPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(VideoLogic());

    return Container(
      child: Text("视频"),
    );
  }
}
