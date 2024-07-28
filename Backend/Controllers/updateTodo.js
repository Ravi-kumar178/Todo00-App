const Todo = require("../Models/Todo");

exports.updateTodo = async(req,res) => {
    try {
     const id = req.params.id;
     const {title,description} = req.body;
     if(!id){
       return res.status(404).json({
            success:false,
            message:"Id not found"
        })
     }
     const response = await Todo.findByIdAndUpdate(
                {_id:id},
                {title,description,updatedAt:Date.now()},
                {new: true}
        );

     return res.status(200).json({
        success:true,
        message:"Entry Updated Successfully",
        data:response
      })
    }
    catch (error) {
        console.log("Error: ",error.message);
       return res.status(500).json({
            success:false,
            message:"Error in Updation"
        })
    }
}