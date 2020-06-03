const route=require('express').Router();

// dashboard
route.get('/',(req,res,next)=>{
    res.send("Welcome to dashboard route")
});




module.exports= route;   
