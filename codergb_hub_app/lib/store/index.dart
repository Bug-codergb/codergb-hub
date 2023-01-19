import 'dart:io';

import 'package:hive/hive.dart';
import 'package:path_provider/path_provider.dart';
import '../constant/dir.dart';
import '../constant/hive.dart';

class GBHive{
  late BoxCollection collection;
  GBHive._create(){}
  static Future<GBHive> create() async{
    var gbHive = GBHive._create();
    await gbHive.init();
    return gbHive;
  }
  init() async {
    Directory appDocDirectory = await getApplicationDocumentsDirectory();
    var path = appDocDirectory.path + rootDir;
    var directory = await Directory(path).create(recursive: true);
    collection = await BoxCollection.open(
      'gbHive',
      {
        LOGIN_HIVE,
      },
      path: directory.path,
    );
  }
}
