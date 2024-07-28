const Todo = require("../Models/Todo");

exports.getAllTodo = async(req,res)=>{
    try{
        const response = await Todo.find();
       /*  if(response.length == 0){
            return  res.status(200).json({
                success:true,
                message:"Please Create the entry"
            })
        } */
        return  res.status(200).json({
            success:true,
            message:"All data returned successfully",
            data: response
        })
    }
    catch(err){
        console.log("Error: ",err.message);
        return res.status(500).json({
            success:false,
            message:"Error in returning data"
        })
    }
}

exports.getOneTodo = async(req,res)=>{
    try {
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                success:false,
                message:"No id is found"
            })
        }
        const response = await Todo.findById({_id:id});

        return res.status(203).json({
            success:true,
            message:"Data found",
            data:response
        })

    } 
    catch (error) {
        console.log("Error: ",error.message);
        return  res.status(500).json({
            success:false,
            message:"Server Error"
        })
    }
}