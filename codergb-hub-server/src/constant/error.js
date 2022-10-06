class Error{
  constructor(message="",status=404,data) {
    this.message = message;
    this.status = status;
    this.data=data;
  }
}
module.exports={
  Error
}
