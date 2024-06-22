const express =require('express')
const router=express.Router();
const {InfoController}=require('../../controllers/index')
const airplaneRoutes=require('./airpleroutes');
const cityRoutes=require('./city-route')

const airportRoutes=require('./airportroutes')

router.use('/airplanes',airplaneRoutes)
router.use('/cities',cityRoutes)
router.use('/airport',airportRoutes)

router.get('/info',InfoController.info)


module.exports=router