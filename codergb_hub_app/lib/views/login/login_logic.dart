import 'package:codergb_hub_app/constant/url.dart';
import 'package:codergb_hub_app/model/UserMsg.dart';
import 'package:codergb_hub_app/network/index.dart';
import 'package:flutter/cupertino.dart';
import 'package:get/get.dart';

class LoginLogic extends GetxController {
  Rx<TextEditingController> userName = TextEditingController().obs;
  Rx<TextEditingController> password = TextEditingController().obs;
  void login(String? userName,String? password)async {
    if(userName!=null && password!=null){
      GBHttpRequest<UserMsg>().request(LOGIN,method: 'get',data: {
        "userName":userName,
        "password":password
      }).then((data){
        if(data.status == 200){
          print("登录成功");
          print(data.data.userName);
        }
      });
    }
  }
}
