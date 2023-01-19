import 'dart:math';

import 'package:codergb_hub_app/views/home/home_view.dart';
import 'package:codergb_hub_app/views/profile/profile_view.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:hive/hive.dart';
import '../../constant/color.dart';
import 'app_logic.dart';

class AppPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(AppLogic());
    return Obx((){
      return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.white,
          leadingWidth: 40,
          toolbarHeight:40,
          elevation:0,
          leading: Container(
            height: 20,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.all(Radius.circular(50)),
              image:DecorationImage(
                fit: BoxFit.contain,
                image: NetworkImage(logic.userMsg.value.avatarUrl)
              ),
            ),
          ),
          title: Container(
            width: Get.width-150,
            height: 35,
            padding: EdgeInsets.only(left: 10,right: 10),
            decoration: BoxDecoration(
              color: Color(0xfff1f2f4),
              borderRadius: BorderRadius.all(Radius.circular(20))
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,
              children:[
                Expanded(
                  flex: 1,
                  child: Icon(Icons.search_rounded,color: Color(0xffc1c7ca),)
                ),
                SizedBox(width: 10,),
                Expanded(
                  flex: 6,
                  child: TextField(
                    controller: logic.keyword.value,
                    textAlignVertical: TextAlignVertical.top,
                    cursorColor: Color(APP_COLOR),
                    decoration: InputDecoration(
                      hintText: "世间美好与你环环相扣",
                      border: InputBorder.none,
                      hintStyle: TextStyle(
                        fontSize: 14,
                        color: Color(0xffc1c7ca)
                      )
                    ),
                  ),
                )
              ]
            ),
          ),
          actions: [
            Icon(Icons.message_rounded,color: Color(0xffc1c7ca),)
          ],
        ),
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: logic.currentIndex.value,
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: "首页",
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: "我的",
            )
          ],
          onTap: (index){
            print(index);
            logic.currentIndex.value = index;
          },
          selectedItemColor:Color(APP_COLOR),
        ),
        body: IndexedStack(
          index: logic.currentIndex.value,
          children: <Widget>[
            HomePage(),
            ProfilePage()
          ],
        ),
      );
    });
  }
}
