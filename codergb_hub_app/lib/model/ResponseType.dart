class GBResponseType<T>{
  final String message;
  final int status;
  final T data;
  GBResponseType(this.message,this.status,T responseData):data = responseData;
}