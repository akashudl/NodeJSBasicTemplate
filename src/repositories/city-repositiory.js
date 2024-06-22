const {City} =require('../models')
const CurdRepository=require('./curd-repositiory');
class CityRepositiory extends CurdRepository{
    constructor(){
        super(City);
    }
}


module.exports=CityRepositiory