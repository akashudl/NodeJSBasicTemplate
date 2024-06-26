const {AirportService}=require('../services');
const {StatusCodes} =require('http-status-codes')
const {ErrorResponse,SuccessResponse}=require('../utils/common')




async function createAirport(req,res){
    try{
        const airport=await AirportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId

        });
        SuccessResponse.data=airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse) 

    }catch(error){
        ErrorResponse.error=error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse) 
    }
}




async function getAirports(req,res){
    try{
        const airport=await AirportService.getAirports()
        SuccessResponse.data=airport;
        return res.status(StatusCodes.OK).json(SuccessResponse) 

    }catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse) 
    }
}



async function getAirport(req,res){
    try{
        const airplane=await AirportService.getAirport(req.params.id)
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse) 

    }catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse) 
    }
}




async function updateAirports(req,res){
    try{
        const airplane=await AirportService.updateAirports(req.body,req.params.id)
        SuccessResponse.data=airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse) 

    }catch(error){
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse) 
    }
}




module.exports={
    createAirport,
    getAirports,
    getAirport,updateAirports
}