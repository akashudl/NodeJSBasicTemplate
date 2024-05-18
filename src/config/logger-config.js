const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;



const customFormat=printf(({level,message,timestamp})=>{

    //level is severity level of logs high,low meidum 
    //message of logs 
    // timetsamp -> Print when this logs happen
    //label
    return `${timestamp} : ${level}: ${message}`;


})


const logger=createLogger({
    format:combine(
        
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        customFormat
      ),
      transports:[
        new transports.Console(),
        new transports.File({filename:'combine.log'})
      ],
})


module.exports=logger