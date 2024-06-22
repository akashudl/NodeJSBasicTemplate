const CurdRepository=require('./curd-repositiory');
const {Airplane} =require('../models')

class AirplaneRepositiory extends CurdRepository{
    constructor(){
        super(Airplane);
    }
}


module.exports=AirplaneRepositiory