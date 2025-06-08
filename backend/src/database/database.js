import mongoose from "mongoose";
export const connectToDB=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGODB_URL);
            console.info(`Database connected successfully with id ${connection.connection.host}`)
    }catch(err){
        console.error("Database failed to connect with ERROR: "+ err.message);
        process.exit(1);
    }
}