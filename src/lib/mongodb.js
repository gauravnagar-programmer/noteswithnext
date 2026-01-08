import mongoose from "mongoose";

const dbConnection = async () =>{

    if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("db connected successfully")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default dbConnection