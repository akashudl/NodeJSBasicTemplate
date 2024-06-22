const express =require('express')
const router=express.Router();
const {AirplanController}=require('../../controllers/index')
const {AirplaneMiddlewares, AirplaneMiddleware}=require('../../middleware')


//api/v1/airplanes/
router.post('/',
AirplaneMiddleware.validateCreateRequest,
AirplanController.createAirplane)


router.get('/',
    AirplanController.getAirplanes
)

router.get('/:id',AirplanController.getAirplane)

router.delete('/:id',AirplanController.destroyAirplane)

router.put('/:id',AirplanController.updateAirplane)
module.exports=router