import { NextResponse } from "next/server";
import dbConnection from "@/lib/mongodb";
import noteModel from "@/models/note";


export async function GET(req, { params }) {
  try {
    const { id } = await params; 
  
    await dbConnection(); 

    
    const findNote = await noteModel.findById(id);

    if (!findNote) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }

    return NextResponse.json(findNote);

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req,{params}) {
  try {
    const {id} = await params
    const {title,content} = await req.json()

    await dbConnection()

    const updatedNote = await noteModel.findByIdAndUpdate(id, 
      { title, content }
    )
    
    if (!updatedNote) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }

    return NextResponse.json(
      {message : "note update successfully"},
      {status : 200}
    );

  } catch (error) {
    return NextResponse.json(
      {message : "internal server error"},
      {status : 500}
    )
  }

}

export async function DELETE(req,{params}){
  try {
    const {id} = await params
  await dbConnection()
    const DeleteNote = await noteModel.findByIdAndDelete(id)
  
    if(!DeleteNote){
      return NextResponse.json(
        {message : "no user match"},
        {status : 404}
  
      )
    }
    return NextResponse.json(
      {message : "Note deleted successfully"},
      {status : 200}

    )
    
  } catch (error) {
      return NextResponse.json(
        {message : "Internal server error"},
        {status : 500}
      )
  }
}