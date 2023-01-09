import 'dart:math';

import 'package:codergb_hub_app/constant/color.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:hive/hive.dart';

import 'login_logic.dart';

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(LoginLogic());

    return Scaffold(
      appBar: AppBar(
        leading: Icon(Icons.arrow_back),
        backgroundColor: Color(APP_COLOR),
      ),
      body: Column(
        children: [
          Container(
            height: 57,
            decoration: BoxDecoration(
              image: DecorationImage(
                image: AssetImage("assets/bgc.png")
              )
            ),
          ),
          Container(
            padding: EdgeInsets.only(left: 20,right: 20),
            decoration: BoxDecoration(

            ),
            child: Column(
              children: [
                Container(
                  decoration: BoxDecoration(
                      border: Border(
                          bottom: BorderSide(
                              color: Color(0xffd9d9d9)
                          )
                      )
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        flex:1,
                        child: Text("账号"),
                      ),
                      Expanded(
                        flex: 5,
                        child: Obx((){
                          return TextField(
                            controller: logic.userName.value,
                            decoration: InputDecoration(
                                hintText: "请输入用户名",
                                border: InputBorder.none
                            ),
                          );
                        }),
                      )
                    ],
                  ),
                ),
                Container(
                  decoration: BoxDecoration(
                    border: Border(
                      bottom: BorderSide(
                       color: Color(0xffd9d9d9)
                      )
                    )
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        flex:1,
                        child: Text("密码"),
                      ),
                      Expanded(
                        flex: 5,
                        child: Obx((){
                          return TextField(
                            controller: logic.password.value,
                            decoration: InputDecoration(
                                hintText: "请输入密码",
                                border: InputBorder.none
                            ),
                          );
                        }),
                      )
                    ],
                  ),
                )
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(top: 20),
            padding: EdgeInsets.only(left: 20,right: 20),
            child: Row(
              children: [
                Expanded(
                  flex: 1,
                    child: OutlinedButton(
                        onPressed: (){
                          //logic.login(logic.userName?.value?.text, logic.password?.value?.text);
                        },
                        child: const Text("注册"),
                        style: OutlinedButton.styleFrom(primary: Color(APP_COLOR))),
                ),
                SizedBox(width: 50,),
                Expanded(
                  flex: 1,
                  child: ElevatedButton(
                      onPressed: (){
                        logic.login(logic.userName.value.text, logic.password.value.text);
                      },
                      child: Text("登录"),
                      style: ElevatedButton.styleFrom(primary: Color(APP_COLOR))),
                )
              ],
            )
          )
        ],
      ),
    );
  }
}
