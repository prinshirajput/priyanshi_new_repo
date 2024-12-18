import mongoose from "mongoose";


const admin_shema= new mongoose.Schema({
name:{
    type:String
},
email:{
    type:String
},
pasword:{
    type:String
}
})

const a_model=mongoose.model("admin",admin_shema)

export default a_model;