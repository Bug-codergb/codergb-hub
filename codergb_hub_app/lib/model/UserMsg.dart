class UserMsg{
  final String userId;
  final String userName;
  final String token;
  final String avatarUrl;
  UserMsg({this.userId="",this.userName="",this.token="",this.avatarUrl=""});
  UserMsg.fromMap(Map<dynamic,dynamic> json): userId = json['userId'],
  userName = json['userName'],
  token = json['token'],
  avatarUrl = json['avatarUrl'];
  Map<String,dynamic> toMap(){
    return {
      'userId':userId,
      'userName':userName,
      'token':token,
      'avatarUrl':avatarUrl,
    };
  }
}