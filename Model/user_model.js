import mongoose from "mongoose";


const user_shema= new mongoose.Schema({
name:{
    type:String
},
age:{
    type:Number
},
username:{
    type:String
},
number:{
    type:Number
},
email:{
    type:String,
    unique:true
},
otp:{
    type:Number,
    unique:true ,
    
}
})

const u_model=mongoose.model("user",user_shema)

export default u_model;