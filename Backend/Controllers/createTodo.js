const Todo = require("../Models/Todo");

exports.createTodo = async(req,res)=>{
  try{
    const {title,description} = req.body;
    if(!title || !description){
      return res.status(403).json({
            success:false,
            message:"Please Insert all field"
        });
    }
    const response = await Todo.create({title,description});
    return  res.status(201).json({
        success:true,
        message:"Entry Created Successfully",
        data : response
    })
  }
  catch(err){
    console.log("Error: ",err.message);
    return  res.status(400).json({
        success:false,
        message:"Error in Entry Creation"
    })
  }
}