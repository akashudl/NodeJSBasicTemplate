const { Logger } = require("winston");
const AppError = require("../utils/Errors/app-error");
const {StatusCodes} =require('http-status-codes')
class CurdRepository{
    constructor(models){
        this.models=models;
    }
    async create(data){
     
            const response=await this.models.create(data);
            return response
      
    }



    async destroy(data){
        
            const response=await this.models.destroy({
                where :{
                    id:data,
                }
            });
            if(!response){
                throw new AppError('Not able to find the resource',StatusCodes.NOT_FOUND)
            }
            return response
        
    }



    async get(data){
            const response=await this.models.findByPk(data);
            if(!response){
                throw new AppError('Not able to find the resource',StatusCodes.NOT_FOUND)
            }
            return response
        
    
    }

    async getAll(data){
        try{
            const response=await this.models.findAll();
            return response
        }
        catch(error){
            Logger.error('Something went wrong curd repo create : getAll')
            throw error
        }
    }
    async update(data,id){
  
            const response=await this.models.update(data,{
                where:{
                    id:id
                }
            });
            if(response[0]==0){
                throw new AppError('Not able to find the resource',StatusCodes.NOT_FOUND)
            }
            return response
        
  
    }

}


module.exports=CurdRepository