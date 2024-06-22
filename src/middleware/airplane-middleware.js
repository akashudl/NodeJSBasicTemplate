const {StatusCodes} =require('http-status-codes')
const {ErrorResponse}=require('../utils/common')
function validateCreateRequest(req,res,next){
     if(!req.body.modelNumber){
        ErrorResponse.message="Something went wrong while creating airplanes"
        ErrorResponse.error={explanation:'Model number not found in the oncoming request in the correct form' }
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse) 
    
    
    }
    next();
}


module.exports={validateCreateRequest}