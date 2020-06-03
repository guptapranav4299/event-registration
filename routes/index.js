const route=require('express').Router();
const formRoute=require('./form')

route.get('/',(req,res)=>{
    res.send("Welcome to index route")
});

route.use('/register',formRoute);

module.exports= route;   
