import mongoose from "mongoose";


const user_book_shema= new mongoose.Schema({
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

const u_model=mongoose.model("user_book_schema",user_book_shema)

export default u_model;