const express=require("express");
const mainrouter=require("./products");


const router=express.Router();

router.use("/products",mainrouter);
module.exports=router;