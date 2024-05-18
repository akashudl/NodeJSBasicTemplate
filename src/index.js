const express =require('express');
const { ServerConfig,Logger } = require('./config');

const app=express();


const apiroute=require('./routes')



app.use('/api',apiroute);


app.listen(ServerConfig.port,()=>{
    console.log(`Successfull started the server on PORT : ${ServerConfig.port}`)
    Logger.info("Sucessfully Stared the server","root",{})
})