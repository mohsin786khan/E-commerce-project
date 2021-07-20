// error handler class

class ErrorHandler {
    constructor(message, statusCode) {
      //  super(message);
        this.message = message;
        this.statusCode = statusCode
        
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = ErrorHandler;



































































