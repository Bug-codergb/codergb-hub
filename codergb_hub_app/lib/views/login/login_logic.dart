import 'package:codergb_hub_app/constant/hive.dart';
import 'package:codergb_hub_app/constant/url.dart';
import 'package:codergb_hub_app/model/UserMsg.dart';
import 'package:codergb_hub_app/network/index.dart';
import 'package:codergb_hub_app/store/LoginHive.dart';
import 'package:flutter/cupertino.dart';
import 'package:get/get.dart';

class LoginLogic extends GetxController {
  Rx<TextEditingController> userName = TextEditingController().obs;
  Rx<TextEditingController> password = TextEditingController().obs;
  void login(String? userName,String? password)async {
    if(userName!=null && password!=null){
      GBHttpRequest<UserMsg>().request(LOGIN,method: 'post',dataParser: UserMsg.fromMap,params: {},data: {
        "userName":userName,
        "password":password
      }).then((data) async {
        if(data.status == 200){
          LoginHive loginHive = await LoginHive.create();
          UserMsg user = data.data;
          Map userMap = user.toMap();
          await loginHive.put(USER_MSG, userMap);
          Get.toNamed("/app");
        }
      });
    }
  }
}
