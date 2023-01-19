class GBResponseType{
  final int status;
  final dynamic data;
  GBResponseType(this.status,this.data);
  GBResponseType.fromMap(Map<String,dynamic> json) :data = json['data'],status = json['status'];
}