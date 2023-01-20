import 'package:codergb_hub_app/model/UserMsg.dart';
import 'Tag.dart';
import 'Category.dart';
class Video{
  final String id;
  final String name;
  final String picUrl;
  String? dt;
  final String playCount;
  final String description;
  Category ?category;
  final String createTime;
  final String updateTime;
  UserMsg ?user;
  List<Tag>? tag;

  Video({this.id="",
  this.name="",
  this.picUrl="",
  this.dt="",
  this.playCount="" ,
  this.description="" ,
  this.category ,
  this.createTime="",
  this.updateTime="",
  this.user ,
  this.tag});
  Video.fromMap(Map<String,dynamic> json):this.id=json['id'],
  this.name=json['name'],
  this.picUrl=json['picUrl'],
  this.dt=json['dt'],
  this.playCount = json['playCount'],
  this.description = json['description'],
  this.category = Category.fromMap(json['category']),
  this.createTime = json['createTime'],
  this.updateTime = json['updateTime'],
  this.user = UserMsg.fromMap(json['user']),
  this.tag = (json['tag'] as List<dynamic>).map((item){
    return Tag.fromMap(item);
  }).toList();
}