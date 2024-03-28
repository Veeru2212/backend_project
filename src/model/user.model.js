
import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
 
const userSchema =new Schema({

    username:{
        type:String ,
        require:true,
         lowercase:true,
         trim:true,
         index:true,  //to make it seachable
         unique:true,
    } 
,
    email : {

        type:String ,
        require:true,
         lowercase:true,
         trim:true,
         index:true,  //to make it seachable
         unique:true,
    },
    fullName : {

        type:String ,
        require:true,
         trim:true,
        index:true,   i//to make it seachable
       
    },
    avtar : {

        type:String ,  //we use cloudnary url
        require:true,
    
    },
    coverimage : {

        type:String ,
       
    },
   watchhistory : [
    {
         
    type:Schema.mongoose.ObjectId,
    ref:"Vedio"
   }

],

   password:{
    type:String ,
    required:[true,'password is required']

   },


         
    


},{timestamps:true})
  
  userSchema.pre("save" ,async function (next)   {

    if(!this.isModified("password"))  return next();
     //agar password nahi change hui tho no need to encrypt 
     //else

     this.password=bcrypt.hash(this,password,10)
     next() 

  })

  userSchema.methods.ispassword_Akash =async function (password)
  {
    return await bcrypt.compare(password ,this.password)
  }
  
  userSchema.method.generateAccessToken=function(){
   return  jwt.sign(
    {
        _id:this.id,
        email:this.email,
        username:this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY 
    }
        )
  }


  userSchema.method.generateRefreshToken=function(){
    return  jwt.sign({
         _id:this.id,
         
     },
     process.env.REFRESH_TOKEN_SECRET,
     {
         expiresIn:process.env.REFRESH_TOKEN_EXPIRY 
     }
         )
   }

 

export  const User = mongoose.Model("User" ,userSchema)