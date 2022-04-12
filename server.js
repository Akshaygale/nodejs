const express=require("express");
const cors=require("cors");
const router=require("./routes")

const server=express()
server.use(cors());

// server.get("/",(req,res)=>{
//     res.send("hello")
// })


server.use("/api/v1",router)


server.listen(3000,()=>{
    console.log("started");
})