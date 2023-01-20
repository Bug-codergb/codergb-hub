import 'package:codergb_hub_app/constant/hive.dart';
import 'package:codergb_hub_app/model/UserMsg.dart';
import 'package:codergb_hub_app/store/LoginHive.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class HomeLogic  extends GetxController with GetSingleTickerProviderStateMixin   {
  Rx<UserMsg> userMsg = UserMsg().obs;
  RxInt currentIndex = 0.obs;
  RxList<String> tabList = ['推荐','探索','shorts','订阅内容'].obs;
  TabController? tabController;
  @override
  void onInit() async {
    // TODO: implement onInit
    super.onInit();
    print(tabList.length);
    tabController = TabController(length: tabList.length, vsync: this);

    LoginHive loginHive = await LoginHive.create();
    Map user = await loginHive.get(USER_MSG);
    if(user!=null){
      UserMsg userInfo = UserMsg.fromMap(user);
      userMsg.value = userInfo;
    }
  }
}
