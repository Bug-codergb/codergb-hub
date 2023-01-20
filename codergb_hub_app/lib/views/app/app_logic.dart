import 'package:codergb_hub_app/constant/hive.dart';
import 'package:codergb_hub_app/model/UserMsg.dart';
import 'package:codergb_hub_app/store/LoginHive.dart';
import 'package:flutter/cupertino.dart';
import 'package:get/get.dart';

class AppLogic extends GetxController {
  Rx<UserMsg> userMsg = UserMsg().obs;
  RxInt currentIndex = 0.obs;
  Rx<TextEditingController> keyword = TextEditingController().obs;
  @override
  void onInit() async {
    // TODO: implement onInit
    super.onInit();
    LoginHive loginHive = await LoginHive.create();
    Map user = await loginHive.get(USER_MSG);
    if(user!=null){
      UserMsg userInfo = UserMsg.fromMap(user);
      userMsg.value = userInfo;
    }
  }
}
