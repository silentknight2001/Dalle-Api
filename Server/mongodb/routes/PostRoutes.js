import express  from "express";
import * as dotenv from  'dotenv'

import {v2 as cloudinary} from 'cloudinary';

import Post from "../models/post.js" 


dotenv.config()

const router = express.Router()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,

})

// here will be two routes
//1st one is GET route to get all the post

router.route('/').get(async(req,res)=>{
    try {
        const posts = await Post.find({});

        res.status(200).json({success:true, data:posts})
    } catch (error) {
        res.status(500).json({success:false, message:error})
        
    }
})

//2nd one is create route for create post 

router.route('/').post(async(req,res)=>{
   try {
     // this data is coming from front-end
     const [name,prompt,photo] = req.body;
     //uploading to cloudonary
     const photoUrl = await cloudinary.uploader.upload(photo);
 
 
     // this will create new post in our data base
     const newPost = await Post.create({
         name,
         prompt,
         photo: photoUrl.url
     })
 
     res.status(201).json({success: true, data: newPost})
   } catch (error) {
    res.status(500).json({success: false, message: error})
   }
})

export default router
