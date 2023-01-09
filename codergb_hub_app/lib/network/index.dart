import 'dart:math';

import 'package:codergb_hub_app/constant/common.dart';
import 'package:dio/dio.dart';

import '../model/ResponseType.dart';

class GBHttpRequest<T>{
   Future<GBResponseType<T>> request(url,{String method = "get", Map<String,dynamic>? params,Map<String,dynamic>? data}) async {
    BaseOptions baseOptions = BaseOptions(
        baseUrl: HOST_NAME,
        connectTimeout: 5000
    );
    final dio = Dio(baseOptions);

    Options options = Options(method: method);
    try{
      final result = await dio.request<GBResponseType<T>>(url,queryParameters: params,data: data,options: options);

      return result.data!;
    }on DioError catch(e){
      print(e);
      throw e;
    }
  }
}