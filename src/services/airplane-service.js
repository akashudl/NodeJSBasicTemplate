const {AirplaneRepositiory}=require('../repositories')
const AppError =require  ('../utils/Errors/app-error')
const {StatusCodes} =require('http-status-codes')
const airplaneRepositiory=new AirplaneRepositiory();



async function createAirplane(data){
    try{
     const airplane =await airplaneRepositiory.create(data);
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

async function getAirplanes(){
    try{
        const airplanes=await airplaneRepositiory.getAll();
        return airplanes
    }catch(error){
        throw new AppError('Cannot fetch airplanes data of all airplanes ',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}




async function getAirplane(id){
    try{
        const airplanes=await airplaneRepositiory.get(id);
        return airplanes
    }catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The airplan you requested is not present',error.statusCode)
        }
        throw new AppError('Cannot fetch airplanes data of all airplanes ',StatusCodes.INTERNAL_SERVER_ERROR)
        
    }
}



async function destroyAirplane(id){
    try{
        const response=await airplaneRepositiory.destroy(id);
        return response;
    }catch(error){
        console.log(error.statusCode)
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The airplan you requested to delete is not present',error.statusCode)
        }
        throw new AppError('Cannot fetch airplanes data of all airplanes ',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


async function updateAirplanes(data,id){
    try{
        console.log(data)
        const response=await airplaneRepositiory.update(data,id);
        
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
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplanes,

}