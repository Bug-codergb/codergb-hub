import 'package:codergb_hub_app/network/index.dart';
class Page<T>{
  int count =0;
  dynamic list;
  Page(this.count,this.list);
  Page.fromMap(Map<String,dynamic> json):count = json['count'],
    list = (json['list']).map((e){
      return e;
    }).toList();
}