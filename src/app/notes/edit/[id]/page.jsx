"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
} from "@/components/InfoMessage";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = (id) => {
  const params = useParams();
  const router = useRouter(); 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (params && params.id) {
      const getPrevData = async () => {
        try {
          const findNote = await axios.get(`/api/notes/${params.id}`);

          setTitle(findNote.data.title);
          setContent(findNote.data.content);
        } catch (error) {
          return ErrorMessage(error.message);
        }
      };

      getPrevData();
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      WarningMessage("Please fill all the fields");
      return;
    }
    try {
      const res = await axios.put(`/api/notes/${params.id}`, {
        title,
        content,
      });
      console.log(res);
      const {message} = res.data
      SuccessMessage(message)
      setTimeout(() => {
        router.push('/')
      }, 1000);

    } catch (error) {
      return ErrorMessage(error.message);
    }
  };

  return (
<div className='px-5  flex flex-col '>
   <Link href="/"  className='active:bg-gray-700 mt-10 flex items-center gap-3 bg-gray-500 rounded-full  w-fit text-white font-semibold  px-3'> <span className='text-2xl'>←</span>Home</Link>
   <form
      onSubmit={handleSubmit}
      className="flex  mx-auto max-w-lg flex-col bg-white text-gray-800 rounded shadow-lg p-12 mt-12"
    >
      <h1 className="text-xl text-gray-700 font-bold text-center my-3">
        Update Your note
      </h1>
      <div className="flex flex-col gap-3">
        <label className="font-semibold ">Title</label>
        <input
          className="flex items-center focus:ring-2 focus:ring-blue-500 py-2 px-4 bg-gray-100 rounded focus:outline-none "
          type="text"
          name="title"
          required
          placeholder="enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <label className="font-semibold">Content</label>
        <textarea
          className="bg-gray-100 resize-none rounded px-4 py-2  h-20 focus:ring-2 focus:ring-blue-500 outline-none"
          required
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Describe Your task"
        />
      </div>

      <button className="flex items-center justify-center h-12 px-6 w-64 bg-yellow-400 mt-8 rounded font-semibold outline-none text-sm text-blue-100 hover:bg-yellow-600 cursor-pointer">
        Update
      </button>
      <ToastContainer />
    </form>
    </div>
  );
};

export default page;
