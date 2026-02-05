import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import roadmaproute from "./routes/roadmap.js";

dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());
app.use("/roadmap",roadmaproute)

const PORT=process.env.PORT || 4000;

app.get('/health',(req,res)=>{
    res.json({status:'ok'})
})

app.listen(PORT,()=>{
    console.log(`api is running`);
})
