import 'package:codergb_hub_app/store/index.dart';
import 'package:hive/hive.dart';

import '../constant/hive.dart';
class LoginHive{
  late CollectionBox<Map> loginHive;
  LoginHive._create(){}
  static Future<LoginHive> create() async{
    var hive = LoginHive._create();
    await hive.init();
    return hive;
  }
  init() async {
    var collectionHive = await GBHive.create();
    collectionHive.init();
    if(collectionHive.collection!=null){
      loginHive = await collectionHive.collection.openBox<Map>(LOGIN_HIVE);
    }
  }
  put(String key, value) async {
    await loginHive.put(key, value);
  }
  get(String key) async {
    var resMap =  await loginHive.get(key);
    return resMap;
  }
}