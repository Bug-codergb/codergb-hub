class Category{
  String id="";
  String name="";
  String createTime="";
  String updateTime="";
  Category({this.id="",this.name="",this.createTime="",this.updateTime=""});
  Category.fromMap(Map<String,dynamic> json):this.id = json['id'],
        this.name = json['name'],this.createTime = json['createTime'],this.updateTime = json['updateTime'];
}