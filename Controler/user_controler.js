import { error } from 'console';
import user_model from '../Model/user_model.js'
import jwt from 'jsonwebtoken'

export const signup=async(req,res)=>{

    try{
       const data=req.body
        const admin= await new user_model(data)
        const result=admin.save();
        if(result)
        {
            res.status(201).json({'msg':'user add sucesfully'})
        }
       

    }
    catch(err)
    {
        res.status(400).json({"error":err})
    }


}
export const login=async(req,res)=>{

    const {email,pasword}=req.body
    const user = await user_model.find({email})
 if(user[0].otp==req.body.otp)
 {
    const secrorty_key="token_s_K"
    const payload={email: user.email}
    const options={expiresIn:'1h'}

    const token=jwt.sign(payload,secrorty_key,options)
    res.status(201).json({'token':token})
 }
 else
 {
    res.send("otp is not match")
 }
 
}