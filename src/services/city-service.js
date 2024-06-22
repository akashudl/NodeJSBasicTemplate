const {CityRepositiory}=require('../repositories')
const AppError =require  ('../utils/Errors/app-error')
const {StatusCodes} =require('http-status-codes')
const cityRepositiory=new CityRepositiory();


async function createCity(data){
    try{
     const city =await cityRepositiory.create(data);
     return city   
    }catch(error){
        if(error.name=='SequeizeValidationError'||error.name=='SequelizeUniqueConstraintError'){
         
            let explanation=[];
            error.errors.forEach((err) => {
                explanation.push(err.message)
            });
            console.log(explanation)
            throw new AppError(explanation,StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}


module.exports={
    createCity
}