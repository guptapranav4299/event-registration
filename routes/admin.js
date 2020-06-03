const route=require('express').Router();

const dashboardRoute=require('./dashboard')

// login route
route.get('/',(req,res,next)=>{
    res.send("Welcome to login route")
});

// dashboard
route.use('/dashboard',dashboardRoute);

module.exports= route;   
