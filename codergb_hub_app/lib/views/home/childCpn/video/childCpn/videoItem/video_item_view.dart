import 'package:codergb_hub_app/model/video/Video.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:hive/hive.dart';

import 'video_item_logic.dart';

class VideoitemPage extends StatelessWidget {
  final Video item;
  VideoitemPage(this.item,{Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final logic = Get.put(VideoitemLogic());

    return Container(
      height: 170,
      width: Get.width-190,

      margin: EdgeInsets.only(bottom: 10),
      /*padding: EdgeInsets.only(left: 8,right: 8),*/
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.all(Radius.circular(4))
      ),
      child: Column(
        children: [
          Container(
            height: (Get.width-186)/2,
            margin: EdgeInsets.only(bottom: 8),
            decoration: BoxDecoration(
                borderRadius: BorderRadius.only(topLeft:Radius.circular(4),topRight: Radius.circular(4)),
              image:DecorationImage(
                image: NetworkImage(item.picUrl)
              )
            ),
          ),
          Container(
            padding: EdgeInsets.only(left: 6,right: 6),
            height: 34,
            child: Text(item.name.trim(),style: TextStyle(fontSize: 13),maxLines: 2,overflow: TextOverflow.ellipsis,),
          ),
          SizedBox(height: 10),
          Container(
            padding: EdgeInsets.only(left: 6,right: 6),
            child: Row(
              children: [
                Expanded(
                  flex: 5,
                  child: Text("${item.user!=null?item.user!.userName.trim() : '--'}",style: TextStyle(
                      fontSize: 12,
                      color: Color(0xff9da3a8)
                  ),),
                ),
                Expanded(
                  child: Icon(Icons.more_vert_sharp,color: Color(0xff9da3a8),size: 18,),
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
