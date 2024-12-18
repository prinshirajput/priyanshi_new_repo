import mongoose from "mongoose";


const admin_shema= new mongoose.Schema({
book_name:{
    type:String
},
auther_name:{
    type:String
},
price:{
    type:String
},
description:{
    type:String
}
})

const a_model=mongoose.model("admin_book_managment",admin_shema)

export default a_model;