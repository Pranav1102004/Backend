import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDb from "./db/index.js";
import path from "path";
import { app } from "./app.js";

dotenv.config({
    path : './env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server running at port ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.log(`database connection failed!! ${error}`);
})