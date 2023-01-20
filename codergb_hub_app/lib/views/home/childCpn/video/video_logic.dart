import 'package:codergb_hub_app/constant/hive.dart';
import 'package:codergb_hub_app/model/Page.dart';
import 'package:codergb_hub_app/model/UserMsg.dart';
import 'package:codergb_hub_app/network/index.dart';
import 'package:codergb_hub_app/store/LoginHive.dart';
import 'package:get/get.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

import '../../../../model/video/Video.dart';

class VideoLogic extends GetxController {
  RxList<Video> videoList = [Video()].obs;
  RxInt count = 0.obs;
  final RefreshController refreshController = RefreshController(initialRefresh: false);
  @override
  void onInit() async {
    // TODO: implement onInit
    super.onInit();
    request();
  }
  void request() async{
    LoginHive loginHive = await LoginHive.create();
    Map user = await loginHive.get(USER_MSG);
    if(user!=null){
      UserMsg userMsg = UserMsg.fromMap(user);
      final Map<String,dynamic> headers={
        'Authorization':userMsg.token
      };
      final Map<String,dynamic> params={
        'offset':0,
        'limit':6
      };
      var result = await GBHttpRequest<Video>().requestPage("/video/all",params:params,headers: headers,
          dataParser: Page.fromMap,pageDataParser: Video.fromMap);
      if(result.status == 200){
        videoList.value = result.data.list ;
        count.value = result.data.count;
      }
      return;
    }
  }
  void onRefresh() async{
    // monitor network fetch
    request();
    // if failed,use refreshFailed()
    refreshController.refreshCompleted();
  }

  void onLoading() async{
    // monitor network fetch

    refreshController.loadComplete();
  }
}
