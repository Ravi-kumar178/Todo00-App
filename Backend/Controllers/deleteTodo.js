const Todo = require("../Models/Todo");

exports.deleteTodo = async(req,res)=>{
    try {
        const id = req.params.id;
        if(!id){
            return res.status(404).json({
                success: false,
                message:"Document is not present"
            })
        }
          await Todo.findByIdAndDelete(
                        {_id:id}
                    );

        return res.status(200).json({
            success:true,
            message:"Entry Deleted Successfully"
        })
    } 
    catch (error) {
        console.log("Error: ",error.message);
        return res.status(500).json({
            success:false,
            message:"Server Down"
        })
    }
}