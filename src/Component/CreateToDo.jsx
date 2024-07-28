import axios from 'axios';
import React from 'react'
import {useForm} from "react-hook-form"
import toast from 'react-hot-toast';
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const CreateTodo = () => {
  const navigate = useNavigate();
  const {register , handleSubmit , formState:{errors}} = useForm();
  async function submitHandler(data,event){
    event.preventDefault();
    const toastId = toast.loading("Please wait...",{position:'top-center'})
   // console.log(data);
    try {
      const response = await axios.post('http://localhost:4000/api/v1/createTodo', data);
      console.log(response);
      toast.dismiss(toastId);
      toast.success(response.data.message,{ position: 'top-center'});
      navigate("/");
    } 
    catch (error) {
      console.log("Error: ", error.message);
      toast.dismiss(toastId);
      toast.error("Error in Todo creation");
    }
  }
  return (
    <div className=' bg-richblack-800 min-h-screen '>
      <div className=' max-w-[600px] mx-auto py-10'>
         <h1 className='text-center font-bold text-3xl  text-yellow-50'>Create Your Todo List</h1>
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
             <p className='font-semibold text-lg'>Add</p> 
             <FaPlus className=''/>
           </button>
         </form>
      </div>
    </div>
  )
}

export default CreateTodo