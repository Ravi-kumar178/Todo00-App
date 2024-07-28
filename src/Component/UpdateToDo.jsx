import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoCaretBackOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { MdEdit } from 'react-icons/md';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateTodo = () => {

  const {register, handleSubmit, setValue , formState:{errors}} = useForm();
  const {id} = useParams();
  //console.log(id);

  //restoring the value of title and description
  async function getOneTodo(id){
    try {
      const response = await axios.get(`https://todo00-app.onrender.com/api/v1/getOneTodo/${id}`);
      console.log(response);
      setValue("title",response.data.data.title);
      setValue("description",response.data.data.description);
    }
     catch (error) {
      console.log("Error: ",error.message);
    }
  }

  useEffect(()=>{
    getOneTodo(id)
  },[id]);

  //updation
  const navigate = useNavigate();
  async function submitHandler(data,e){
     e.preventDefault();
     try {
      const response = await axios.put(`https://todo00-app.onrender.com/api/v1/updateTodo/${id}`,data);
      console.log(response);
      navigate("/");
      toast.success(response.data.message);
     } 
     catch (error) {
      toast.error("Error in updating");
      console.log("Error: ",error.message);
     }
  }


  return (
    <div className=' bg-richblack-800 min-h-screen '>
       <div className=' max-w-[600px] mx-auto py-10'>
       <h1 className='text-center font-bold text-3xl  text-yellow-50'>Update Your Todo List</h1>
        <Link to="/" className='flex flex-row items-center mt-6 gap-2 text-lg text-richblack-50'>
          <IoCaretBackOutline className='-mb-0.5'/>
          <p>Back</p>
        </Link>

        <form 
           onSubmit={handleSubmit(submitHandler)} 
         className='mt-10 max-w-[400px] mx-auto flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='title' className='text-xl text-richblack-5 '>
              Title<sup className=' text-pink-100'>*</sup>
            </label>
            <input
             type='text'
             id='title'
             name='title'
             placeholder='Enter the title'
             className=' h-10 pl-2 focus:outline-none focus:outline-yellow-5 text-richblack-5 bg-richblack-600 border-b-2 focus:border-none border-b-yellow-50 rounded-md'
             {...register("title",{required:true})}
            />
            {
              errors.title && (
                <span className='text-pink-300 font-semibold text-sm'>Title is required</span>
              )
            }
          </div>

          <div className='flex flex-col gap-2 '>
            <label htmlFor='description' className='text-xl text-richblack-5 '>
              Description 
              <sup className=' text-pink-100'>*</sup>
            </label>
            <input
             type='text'
             id='description'
             name='description'
             placeholder='Enter the description'
             className=' h-10 pl-2 focus:outline-none focus:outline-yellow-5 text-richblack-5 bg-richblack-600 border-b-2 focus:border-none border-b-yellow-50 rounded-md'
             {...register("description",{required:true})}
            />
            {
              errors.description && (
                <span className='text-pink-300 font-semibold text-sm'>Description is required</span>
              )
            }
          </div>

           <button
            type='submit'
           className='flex items-center text-richblack-800 gap-2 bg-yellow-50 py-2 w-fit px-4 rounded-lg'>
             <p className='font-semibold text-lg'>Update</p> 
             <MdEdit/>
           </button>
         </form>
       </div>
    </div>
  )
}

export default UpdateTodo