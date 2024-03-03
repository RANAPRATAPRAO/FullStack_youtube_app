
//require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path:'./.env'
})



connectDB()


// ;(async()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on the port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ",error);
//         throw err
//     }
// })()