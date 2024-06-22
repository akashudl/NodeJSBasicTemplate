const {AirportRepositiory}=require('../repositories')
const AppError =require  ('../utils/Errors/app-error')
const {StatusCodes} =require('http-status-codes')
const airportRepositiory=new AirportRepositiory();



async function createAirport(data){
    try{
     const airplane =await airportRepositiory.create(data);
     return airplane   
    }catch(error){
        if(error.name=='SequeizeValidationError'){
            let explanation=[];
            error.errors.forEach((err) => {
                explanation.push(err.message)
            });
            throw new AppError(explanation,StatusCodes.INTERNAL_SERVER_ERROR)
        }
        throw new AppError('Cannot create a new airplane object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirports(){
    try{
        const airplanes=await airportRepositiory.getAll();
        return airplanes
    }catch(error){
        throw new AppError('Cannot fetch airplanes data of all airplanes ',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}




async function getAirport(id){
    try{
        const airplanes=await airportRepositiory.get(id);
        return airplanes
    }catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The airplan you requested is not present',error.statusCode)
        }
        throw new AppError('Cannot fetch airplanes data of all airplanes ',StatusCodes.INTERNAL_SERVER_ERROR)
        
    }
}



async function destroyAirport(id){
    try{
        const response=await airportRepositiory.destroy(id);
        return response;
    }catch(error){
        console.log(error.statusCode)
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The airplan you requested to delete is not present',error.statusCode)
        }
        throw new AppError('Cannot fetch airplanes data of all airplanes ',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function updateAirports(data,id){
    try{
        console.log(data)
        const response=await airportRepositiory.update(data,id);
        
        return response;
    }catch(error){
        console.log(error)
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The airplan you requested to update is not present',error.statusCode)
        }
        throw new AppError('Cannot fetch airplanes data of the  airplanes ',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}



module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirports,

}