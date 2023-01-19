import 'dart:math';

import 'package:codergb_hub_app/views/home/childCpn/explore/explore_view.dart';
import 'package:codergb_hub_app/views/home/childCpn/shorts/shorts_view.dart';
import 'package:codergb_hub_app/views/home/childCpn/subscriber/subscriber_view.dart';
import 'package:codergb_hub_app/views/home/childCpn/video/video_view.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../../constant/color.dart';
import 'home_logic.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(HomeLogic());

    return Container(
      child: Column(
        children: [
          Obx((){
            return Container(
              height: 40,
              padding: EdgeInsets.only(top: 10),
              color: Colors.white,
              child: TabBar(
                padding: EdgeInsets.all(0),
                labelColor: Color(APP_COLOR),
                unselectedLabelColor:Color(0xff888d92),
                labelPadding: EdgeInsets.only(left: 5,right: 5,top: 0,bottom: 0),
                indicatorColor:Color(APP_COLOR),
                indicatorSize:TabBarIndicatorSize.label,
                controller: logic.tabController,
                tabs: logic.tabList.map((e)=>Tab(text:e)).toList(),
              ),
            );
          }),
          Expanded(
              child: Container(
                  color: Color(0xfff0f0f0),
                  padding: EdgeInsets.only(top: 8),
                  child:TabBarView(
                    controller:logic.tabController ,
                    children: [
                      VideoPage(),
                      ExplorePage(),
                      ShortsPage(),
                      SubscriberPage()
                    ],
                  )
              ),
            )
        ],
      ),
    );
  }
}
