const ErrorHandler = require('../utils/errorHandlers');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
   
    if (process.env.Node_ENV === 'DEVELOPMENT') {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }
   
    if (process.env.Node_ENV === 'production') {
        let error = { ...err }
        
        error.message = err.message;

      
        res.status(error.statusCode).json({
            success: false,
            error: error.message || 'INTERNAL SERVER ERROR'
        })
    }

}