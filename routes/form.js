const route=require('express').Router();


//route for form fields 
route.get("/",(req,res,next)=>{
    res.send("hello from form");
})

module.exports=route;   
