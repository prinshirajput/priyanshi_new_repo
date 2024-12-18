import book_managment_schema from '../Model/admin_book_model.js'

export const add=async(req,res)=>{

    try{
       const data=req.body
        const admin= await new book_managment_schema(data)
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

export const get_book=async(req,res)=>{

    try{

        const id= req.params.id
    const user =await book_managment_schema.findById(id)
     
     
        if(user)
        {
            res.status(201).json(user)
        }
       

    }
    catch(err)
    {
        res.status(400).json({"error":err})
    }


}

export const delete_book=async(req,res)=>{

    try{

        const id= req.params.id
    const user =await book_managment_schema.findByIdAndDelete(id)
     
     
        res.status(201).json({'msg':"bookdeleted "})
       

    }
    catch(err)
    {
        res.status(400).json({"error":err})
    }


}


export const upaded_book=async(req,res)=>{

    try{

        const id= req.params.id
    const user =await book_managment_schema.findByIdAndUpdate(id,req.body,{new:true})
     
     
        res.status(201).json({'msg':"book updated "})
       

    }
    catch(err)
    {
        res.status(400).json({"error":err})
    }


}