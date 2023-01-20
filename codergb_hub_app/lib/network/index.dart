import 'package:codergb_hub_app/constant/common.dart';
import 'package:codergb_hub_app/model/DataRes.dart';
import 'package:codergb_hub_app/model/Page.dart';
import 'package:dio/dio.dart';
import 'package:get/get.dart';

import '../model/PageRes.dart';
import '../model/ResponseType.dart';

typedef DataParser<T> = T Function(Map<String,dynamic>);
typedef DataPageParser<T> = Page<T> Function(Map<String,dynamic>);
typedef PageDataParser<T> = T Function(Map<String,dynamic>);
class GBHttpRequest<T>{
  BaseOptions baseOptions = BaseOptions(
      baseUrl: HOST_NAME,
      connectTimeout: 5000
  );

   Future<DataRes<T>> requestData(url,{String method = "get",
                                      Map<String,dynamic>? params,
                                      Map<String,dynamic>? data,
                                      Map<String,dynamic> ? headers,
                                      DataParser<T>? dataParser,}) async {
    final dio = Dio(baseOptions);
    Options options = Options(method: method,headers: headers);
    try{
      final result = await dio.request(url,queryParameters: params,data: data,options: options);
      final responseType = GBResponseType.fromMap(result.data);
      if(dataParser!=null){
        DataRes<T> gbResponseType = DataRes<T>(responseType.status,dataParser(responseType.data));
        return gbResponseType;
      }else{
        DataRes<T> gbResponseType = DataRes<T>(responseType.status,responseType.data);
        return gbResponseType;
      }
    }on DioError catch(e){
      print(e);
      throw e;
    }
  }
   Future<DataRes<PageRes<T>>> requestPage(url,{String method = "get",
     Map<String,dynamic>? params,
     Map<String,dynamic>? data,
     Map<String,dynamic> ? headers,
     DataPageParser<T>? dataParser,
     PageDataParser<T>? pageDataParser }) async {

     final dio = Dio(baseOptions);
     Options options = Options(method: method,headers: headers);
     try{
       final result = await dio.request(url,queryParameters: params,data: data,options: options);
       final responseType = GBResponseType.fromMap(result.data);
       if(dataParser!=null){

         if(pageDataParser!=null){
           /*List<T> list = responseType.data['list'].map((item){
             print(item.runtimeType);
             print(pageDataParser(item).runtimeType);
             return pageDataParser(item);
           }).toList();*/
           List<T> list=[];
           for(var item in responseType.data['list']){
             list.add(pageDataParser(item));
           }
           int count = responseType.data['count'];
           PageRes<T> resultData = PageRes<T>(count,list);
           DataRes<PageRes<T>> gbResponseType = DataRes<PageRes<T>>(responseType.status,resultData);
           return gbResponseType;
         }else{
           DataRes<PageRes<T>> gbResponseType = DataRes<PageRes<T>>(responseType.status,responseType.data);
           return gbResponseType;
         }

       }else{
         DataRes<PageRes<T>> gbResponseType = DataRes<PageRes<T>>(responseType.status,responseType.data);
         return gbResponseType;
       }
     }on DioError catch(e){
       print(e);
       throw e;
     }
   }
}