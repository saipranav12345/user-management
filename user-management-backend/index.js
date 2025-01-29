import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/users.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
};

app.use(express.json());
app.use("/api/users",userRoute);

app.use((err,req,res,next)=>{
    const errorStatus= err.status || 500
    const errorMessage= err.message || "Something Went Wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message:errorMessage,
        stack: err.stack,
    })
});

app.listen(8800,()=>{
    connect();
    console.log("connected to backend")
})