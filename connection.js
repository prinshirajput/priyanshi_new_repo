import mongoose from "mongoose";

const url= 'mongodb://127.0.0.1:27017/interview_task'

const result=mongoose.connect(url)
if(result)
{
    console.log("sucessfuly connected")
}