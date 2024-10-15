class ApiResponse{
    constructor(statusCode,data,message,success = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.success = statusCode<400
        this.message = message
    }
}