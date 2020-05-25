const route=require('express').Router();


//route for index.html 
route.get("/",(req,res,next)=>{
    res.send("Hello from index.html");
})

module.exports={
 route   
}