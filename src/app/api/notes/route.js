import { NextResponse } from "next/server";
import noteModel from "@/models/note";
import dbConnection from "@/lib/mongodb";


export async function GET(req){
try {
  dbConnection()
  const notes = await noteModel.find()
  return NextResponse.json(notes)
  
} catch (error) {
  return NextResponse.json(
    {message : error},
    {status : 500}
  )
}
}


export async function POST(req){
try {
 await dbConnection()
  const {title,content} = await req.json()
  const newNote = await noteModel.create({ title, content });
  return NextResponse.json(
    {message : "Note register successfully", success : true},
    {status : 201}
  )
  
} catch (error) {
 return NextResponse.json(
    {message : error},
    {status : 500}
  )
  console.log(error)
}
}

