import user_book_model from '../Model/user_book_model.js'


export const add=async(req,res)=>{

    try{
       const data=req.body
        const admin= await new user_book_model(data)
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