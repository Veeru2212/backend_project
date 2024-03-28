import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; 
const vedioschema= new Schema ({

   vediofile:{

    type :String ,
    required:true,

   },
   thumbnail:{
    type :String ,
    required:true,
   },
    title:{
        type:String ,
        required:true,
    },
    description:{
          type: String ,
          required:true,
    },
    duration :{
        type:Number,  // comes from cloudnary 
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    owner:{
        type:Schema.Types .ObjectId
    }

},{timestamp:true})


vedioschema.plugin(mongooseAggregatePaginate)

export const Vedio = mongoose.model("Vedio" ,vedioschema)