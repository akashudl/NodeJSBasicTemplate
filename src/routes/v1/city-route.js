const express =require('express')
const router=express.Router();
const {CityController}=require('../../controllers/index')



//api/v1/airplanes/
router.post('/',CityController.createCity)


// router.get('/',
//     AirplanController.getAirplanes
// )

// router.get('/:id',AirplanController.getAirplane)

// router.delete('/:id',AirplanController.destroyAirplane)
module.exports=router