"use client"
import axios from "axios"
import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { WarningMessage,SuccessMessage } from "./InfoMessage";
import { useRouter } from "next/navigation";

const Form = ({heading}) => {
  const router = useRouter()
  const [inputField,setInputField] = useState({
    title : "",
    content : "",
  })

  const handleInput = (e) =>{
    const {name,value} = e.target

    setInputField((prev) =>({
      ...prev,
      [name] : value
  }))
  }


  const handleSubmit = async (e) =>{
    e.preventDefault()
    const {title,content} = inputField
    if(!title || !content){

      WarningMessage("Please fill all the fields")  
      return
    }
   const res =  await axios.post("/api/notes",inputField)
    const {message,success} = res.data
   if(success){
    SuccessMessage(message)
    setTimeout(() => {
        router.push("/")
    }, 1500);
   }

   setInputField({
    title : "",
    content : ""
   })
  }

  return (
      <form onSubmit={handleSubmit}  className="flex  mx-auto max-w-lg flex-col bg-white text-gray-800 rounded shadow-lg p-12 mt-12" >
              <h1 className="text-xl text-gray-700 font-bold text-center my-3">{heading ? heading : "Enter" } Your note</h1>
      <div className="flex flex-col gap-3">

    <label className="font-semibold " >Title</label>
    <input 
      className="flex items-center focus:ring-2 focus:ring-blue-500 py-2 px-4 bg-gray-100 rounded focus:outline-none "
      type="text" 
      name="title"
      required
      placeholder="enter your title"
      value={inputField.title}
      onChange={handleInput}
      />
      </div>
      
    <div className="flex flex-col gap-3 mt-3">

    <label className="font-semibold" >Content</label>
     <textarea 
     className="bg-gray-100 resize-none rounded px-4 py-2  h-20 focus:ring-2 focus:ring-blue-500 outline-none"
     required
     name="content"
     value={inputField.content}
     onChange={handleInput}
     placeholder="Describe Your task"
       />
    </div>

    <button className="flex items-center justify-center h-12 px-6 md:w-md bg-blue-600 mt-8 rounded font-semibold outline-none text-sm text-white  hover:bg-blue-700">Login</button>
    <ToastContainer/>
  </form>
  )
}

export default Form