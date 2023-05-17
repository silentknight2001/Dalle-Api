import mongoose from "mongoose"

const connectDB = (url)=>{
   mongoose.set('strictQuery', true); // this function will usefull when we work with search functionality


   //important part is connect mongodb to our database
    
   mongoose.connect(url)
   .then(()=>console.log("MongoDB connected")).catch((error)=>console.log(`mongodb unable to connect =>>> ${error}`))

}

export default connectDB