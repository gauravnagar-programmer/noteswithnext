"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios"
import { SuccessMessage } from "@/components/InfoMessage";

export default function Home() {

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    
    const res = await axios("/api/notes");
    setNotes(res.data);
  };

  useEffect(() =>{
    fetchNotes()
  },[])

  console.log(notes)

  const deleteNote = async (id) => {

      const res = await axios.delete(`/api/notes/${id}`);
      const {message } = res.data
      SuccessMessage(message)
      fetchNotes();
    }
  

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Notes</h1>
        <Link href="/notes/create" className="bg-blue-600 text-white px-4 py-2 rounded">Add Note</Link>
      </div>
      <div className="grid gap-4">
        {notes.map((note) => (
          <div key={note._id} className=" p-4 rounded shadow-sm bg-gray-300 flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="text-gray-800">{note.content}</p>
              <small className="text-gray-900">{new Date(note.createdAt).toLocaleString()}</small>
            </div>
            <div className="flex gap-2 items-center text-white font-medium">
              <Link href={`/notes/edit/${note._id}`} className="bg-blue-500 rounded-md px-4 py-2  active:scale-90">Edit</Link>
              <button onClick={() => deleteNote(note._id)} className="bg-red-500 rounded-md px-4 py-2 cursor-pointer active:scale-90">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}