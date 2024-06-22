const {Airport} =require('../models')
const CurdRepository=require('./curd-repositiory');
class  AirportRepositiory  extends CurdRepository{ 
    constructor(){
        super(Airport);
    }
}


module.exports=AirportRepositiory 