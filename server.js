const express=require('express');
const srv=express();


// fetch from public folder
// srv.use(express_static(__dirname+'public'));


// for handling post request
srv.use(express.json());
srv.use(express.urlencoded({extended:true}));



// change when deploying 
const port= 3000 || process.env.port 

srv.listen(3000,()=>{
    console.log("Server running at port 3000");
});
