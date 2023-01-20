import 'package:codergb_hub_app/views/home/childCpn/video/childCpn/videoItem/video_item_view.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

import 'video_logic.dart';

class VideoPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final logic = Get.put(VideoLogic());

    return Container(
      padding: EdgeInsets.only(left: 5,right: 5),
      child: SmartRefresher(
        enablePullDown: true,
        enablePullUp: true,
        header: WaterDropHeader(),
        // footer: CustomFooter(
        //   builder: (BuildContext context,LoadStatus mode){
        //     /*Widget body ;
        //     if(mode==LoadStatus.idle){
        //       body =  Text("pull up load");
        //     }
        //     else if(mode==LoadStatus.loading){
        //       body =  CupertinoActivityIndicator();
        //     }
        //     else if(mode == LoadStatus.failed){
        //       body = Text("Load Failed!Click retry!");
        //     }
        //     else if(mode == LoadStatus.canLoading){
        //       body = Text("release to load more");
        //     }
        //     else{
        //       body = Text("No more Data");
        //     }*/
        //     return Container(
        //       height: 55.0,
        //       child: Text("23"),
        //     );
        //   },
        // ),
        controller: logic.refreshController,
        onRefresh: logic.onRefresh,
        onLoading: logic.onLoading,
        child:  ListView.builder(
            itemBuilder: (c,i){
              return Obx((){
                return Wrap(
                  runSpacing: 5,
                  alignment: WrapAlignment.spaceBetween,
                  children:logic.videoList.asMap().entries.map((e){
                    var item = e.value;
                    var index =e.key;
                    return VideoitemPage(item);
                  }).toList(),
                );
              });
            },
            itemCount: 1
          )
      ),
    );
  }
}
