// require('dotenv').config({path:'./env'});

import dotenv from "dotenv";
 import connectDB from "./db/index.js";


 dotenv.config({
    path: "./.env"
});
 

connectDB();















/*
//First Approch to connecting DataBase using mongoose
import mongoose from "mongoose";
import { DB_Name } from "./constants";
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error", (error) => {
            console.log("ERROR : ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listing on port ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.log('Error while connecting to MongoDB', error);
        throw error

    }
})()

*/