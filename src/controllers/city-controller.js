const {CityService}=require('../services');
const {StatusCodes} =require('http-status-codes')
const {ErrorResponse,SuccessResponse}=require('../utils/common')




async function createCity(req,res){
   
    try{
        const City=await CityService.createCity({
            name:req.body.name,
        });
        SuccessResponse.data=City;
        return res.status(StatusCodes.CREATED).json(SuccessResponse) 

    }catch(error){
        //console.log(error.statusCode)
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)  
    }
}


module.exports={
    createCity
}