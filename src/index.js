// require('dotenv').config({path: './env'})   //we can use this line only  ,is line say bhe apna kam chal jai ga  

//nahi tho hum logo ko import dotenv and dotenv.config wali line bhe include karna paday ga
import dotenv from "dotenv"
import connectDB from "./database/index.js";
//import {app} from './app.js'

dotenv.config({
    path: './.env'
})




connectDB()
.then(()=>{
           app.listen(process.env.PORT || 8000 ,()=>{
            console.log("surver is runnung ",process.env.PORT)
           })
})
.catch((error)=>{
  console.log("failed in connecting batabase" ,error)
})






//    .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// })







/*
import  express  from "express";

const app=express()
 
;(async()=>{
       try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     
      app.on("error",(error)=>{
        console.log("error:",error);
        throw error;
      })

       } catch (error) {
        console.log("error:",error)
        throw error
        
       }
})()
*/