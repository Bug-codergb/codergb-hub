import 'package:codergb_hub_app/network/index.dart';
import 'package:get/get.dart';

import '../../../../model/video/Video.dart';

class VideoLogic extends GetxController {
  RxList<Video> videoList = [Video()].obs;
  @override
  void onInit() async {
    // TODO: implement onInit
    super.onInit();
    //GBHttpRequest("")
  }
}
