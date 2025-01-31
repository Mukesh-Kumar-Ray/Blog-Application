import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routers/user.router.js";
const app = express();
dotenv.config();

//import information from dotenv file
const port = process.env.PORT || 6000 ;
const db = process.env.MONGO_DB;
//database connection 
try {
    mongoose.connect(db);
    console.log("database connect sucessfully");
} catch (error) {
    console("database error" , error);
}

//router

app.use("/api/user" , userRouter);


app.use("/", (req, res) => {
    res.send("Hello World");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
