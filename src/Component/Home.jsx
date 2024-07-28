import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { MdEdit } from 'react-icons/md';
import toast from 'react-hot-toast';


const Home = () => {
  const [data,setData] = useState([]);

  //get All todo
  async function getAllTodo(){
    try {
      const response = await axios.get("https://todo00-app.onrender.com/api/v1/getAllTodo");
      console.log(response);
      setData(response.data.data);
     // console.log(data);
    } 
    catch (error) {
      console.log("Error: ",error.message);
    }
  }
  useEffect(()=>{
    getAllTodo();
  },[]);

 //delete the data
 async function deleteHandler(id){
   try {
     await axios.delete(`https://todo00-app.onrender.com/api/v1/deleteTodo/${id}`)
     setData((prevData)=>prevData.filter((data)=>data._id !== id))
     toast.success('Data deleted successfully');
   } 
   catch (error) {
     toast.error('Error while data deletion');
     console.log("Error: ",error.message);
   }
 }

  console.log(data);
  return (
    <div className=' bg-richblack-800 min-h-screen '>
        <div className=' max-w-[600px] mx-auto py-10'>
          <div className='bg-yellow-25 w-fit px-4 py-2 rounded-lg'>
            <Link to="/createTodo" >
             <p className=' text-richblack-800 flex flex-row items-center gap-2'><span className=' font-semibold'>Add ToDo</span> <FaPlus /></p>
            </Link>
           </div>
           <div className='mt-8 '>
            {
              data.length > 0 && (
                <div className='
                 text-yellow-50 font-semibold text-2xl border-b-2 pb-5
                flex flex-row w-full justify-between items-center'>
                  <p>S. No.</p>
                  <p className=' -translate-x-5'>Title</p>
                  <p>Action</p>
                </div>
              )
            }
           </div> 
           <div className='mt-5'>
             {
              data.length > 0 ?
               (<div className='flex flex-col gap-4'>
                  {
                    data.map((todos,index)=>(
                      <div key={index} className={`flex ${index === data.length-1?(''):('border-b-2')} pb-4 text-richblack-25 flex-row  w-full justify-between items-center`}>
                        <p className='font-semibold text-lg'>{index+1}</p>
                        <div className='flex flex-col justify-center items-center gap-1'>
                          <p className='text-lg'>{todos.title}</p>
                          <p>{todos.description}</p>
                        </div>
                        <div className=' text-xl flex flex-row items-center gap-3'>
                          <button onClick={()=>{deleteHandler(todos._id)}}><MdDelete/></button>
                          <Link to={`/updateTodo/`+todos._id}><button><MdEdit/></button></Link>
                        </div>
                      </div>
                    ))
                  }
               </div>)
               :
               (<div className='text-richblack-50 text-center capitalize font-semibold text-2xl'>Please Create Your To do list</div>)
             }
           </div>
        </div>
    </div>
  )
}

export default Home