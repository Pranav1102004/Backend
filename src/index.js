import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDb from "./db/index.js";
import path from "path";

dotenv.config({
    path : './env'
})

connectDb()