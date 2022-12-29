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
          )
        ],
      ),
    );
  }
}
