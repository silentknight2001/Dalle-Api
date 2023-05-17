import express  from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./mongodb/Connection.js";

import PostRoutes from './mongodb/routes/PostRoutes.js';

import dalleRoutes from './mongodb/routes/dalleRoutes.js'
import router from "./mongodb/routes/PostRoutes.js";
 
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json({limit:'50mb'}))


//middle ware API end point

app.use('/api/v1/post', PostRoutes);
app.use('/api/v1/dalle', dalleRoutes);


app.get('/', async(req, res)=>{
    res.send("hello frm DELL-E AI")
})


const startserver = async()=>{

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080,()=>console.log("server is running on port http://localhost:8080"))
    } catch (error) {
        console.log(`getting error bro ${error}`);
    }

}

startserver()
