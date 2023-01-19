import 'dart:math';

import 'package:codergb_hub_app/constant/common.dart';
import 'package:dio/dio.dart';

import '../model/ResponseType.dart';

typedef DataParser<T> = T Function(Map<String,dynamic>);
class GBHttpRequest<T>{
   Future<GBResponseType> request(url,{String method = "get",
                                      Map<String,dynamic>? params,
                                      Map<String,dynamic>? data,
                                      DataParser<T> ? dataParser}) async {
    BaseOptions baseOptions = BaseOptions(
        baseUrl: HOST_NAME,
        connectTimeout: 5000
    );
    final dio = Dio(baseOptions);
    Options options = Options(method: method);
    try{
      final result = await dio.request(url,queryParameters: params,data: data,options: options);
      final responseType = GBResponseType.fromMap(result.data);
      if(dataParser!=null){
        GBResponseType gbResponseType = GBResponseType(responseType.status,dataParser(responseType.data));
        return gbResponseType;
      }else{
        GBResponseType gbResponseType = GBResponseType(responseType.status,responseType.data);
        return gbResponseType;
      }
    }on DioError catch(e){
      print(e);
      throw e;
    }
  }
}