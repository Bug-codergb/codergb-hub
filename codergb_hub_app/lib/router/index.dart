import 'package:codergb_hub_app/views/home/home_view.dart';
import 'package:codergb_hub_app/views/login/login_view.dart';
import 'package:get/get.dart';

List<GetPage> routes=[
  GetPage(name: "/login", page:()=>LoginPage()),
  GetPage(name: "/home", page: ()=>HomePage())
];