const mongoose=require("mongoose")

const connectDb=async()=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>console.log("connected..."))
    .catch((err)=>{
        console.log(err)
        console.log("Failed To Connect DB")
    })
}

module.exports=connectDb