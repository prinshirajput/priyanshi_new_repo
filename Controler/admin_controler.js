import adminShema from '../Model/admin_model.js'

import jwt from 'jsonwebtoken'
export const add=async(req,res)=>{

    try{
        const data={
            name:'admin',
            email:'admin@gmail.com',
            pasword:'123@admin'
        }
        const admin= await new adminShema(data)
        const result=admin.save();
        if(result)
        {
            res.status(201).json({'msg':'admin add sucesfully'})
        }
       

    }
    catch(err)
    {
        res.status(400).json({"error":err})
    }


}


export const admin_login=async(req,res)=>{

    const {email,pasword}=req.body
    const user = await adminShema.find({email})
    console.log(user)
    let data = {
        time: Date(),
        userId: 12,
    }

   

 if(user)
 {
    const secrorty_key="token_s_K"
    const payload={email: user.email}
    const options={expiresIn:'1h'}

    const token=jwt.sign(payload,secrorty_key,options)
    res.status(201).json({'token':token})
 }
 
}