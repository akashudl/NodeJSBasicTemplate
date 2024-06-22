const express =require('express')
const router=express.Router();
const {AirportController}=require('../../controllers/index')



//api/v1/airplanes/
router.post('/',AirportController.createAirport)
router.get('/',AirportController.getAirports)


router.get('/:id',AirportController.getAirport)
router.put('/:id',AirportController.updateAirports)

// router.get('/',
//     AirplanController.getAirplanes
// )

// router.get('/:id',AirplanController.getAirplane)

// router.delete('/:id',AirplanController.destroyAirplane)
module.exports=router